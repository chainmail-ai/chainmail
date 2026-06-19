import { Router, type IRouter } from "express";
import healthRouter from "./health";
import dashboardRouter from "./dashboard";
import analysesRouter from "./analyses";
import sbomRouter from "./sbom";
import vulnerabilitiesRouter from "./vulnerabilities";
import licensesRouter from "./licenses";
import riskRouter from "./risk";
import provenanceRouter from "./provenance";
import readinessRouter from "./readiness";
import diffRouter from "./diff";

const router: IRouter = Router();

router.use(healthRouter);
router.use(dashboardRouter);
router.use(analysesRouter);
router.use(sbomRouter);
router.use(vulnerabilitiesRouter);
router.use(licensesRouter);
router.use(riskRouter);
router.use(provenanceRouter);
router.use(readinessRouter);
router.use(diffRouter);

export default router;
