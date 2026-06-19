import { Router, type IRouter } from "express";
import { db, analysesTable } from "@workspace/db";
import { GetProvenanceParams, GetProvenanceResponse } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/analyses/:id/provenance", async (req, res) => {
  try {
    const { id } = GetProvenanceParams.parse(req.params);
    const analysis = await db.select().from(analysesTable).where(eq(analysesTable.id, id)).then((r) => r[0]);
    if (!analysis) {
      res.status(404).json({ error: "Not found" });
      return;
    }

    const level = analysis.slsaLevel;
    const verified = analysis.provenanceVerified;

    const attestations = [
      {
        type: "SLSA Provenance",
        verified: level >= 1,
        detail: level >= 1 ? `Provenance generated at SLSA L${level}` : "No provenance attestation found",
      },
      {
        type: "Sigstore/Cosign",
        verified: level >= 2 && verified,
        detail: level >= 2 && verified ? "Image signed with Sigstore keyless signing" : "Artifact not signed with Sigstore",
      },
      {
        type: "SBOM Attestation",
        verified: level >= 1,
        detail: level >= 1 ? `CycloneDX ${analysis.sbomVersion} SBOM attested` : "SBOM not attested",
      },
      {
        type: "Build Hermetic",
        verified: level >= 3,
        detail: level >= 3 ? "Build confirmed hermetic (no network access)" : "Build hermeticity not enforced",
      },
    ];

    const steps = [
      { step: "Generate SBOM", status: "complete" as const, guidance: "Use syft or trivy to generate a CycloneDX SBOM from your build artifacts" },
      { step: "Sign Artifact", status: level >= 1 ? "complete" as const : "incomplete" as const, guidance: "Use cosign to sign your artifact: `cosign sign --yes ghcr.io/your-org/your-image`" },
      { step: "Attest Provenance", status: level >= 2 ? "complete" as const : "incomplete" as const, guidance: "Use slsa-github-generator to generate provenance attestation in your CI pipeline" },
      { step: "Enforce SLSA Policy", status: level >= 3 ? "complete" as const : "not_started" as const, guidance: "Configure slsa-verifier or policy-controller to enforce provenance at deploy time" },
      { step: "Publish Attestations", status: level >= 2 ? "complete" as const : "not_started" as const, guidance: "Push attestations to a transparency log (Rekor) for public auditability" },
    ];

    const data = GetProvenanceResponse.parse({
      analysisId: id,
      signed: verified,
      signingTool: level >= 1 ? "cosign" : undefined,
      attestations,
      slsaLevel: level,
      steps,
    });
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "provenance error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
