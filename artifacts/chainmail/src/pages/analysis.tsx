import { useParams } from "wouter";
import { useGetAnalysis } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ActivitySquare, Shield, FileText, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

export default function Analysis() {
  const params = useParams();
  const id = params.id as string;
  const { data: analysis, isLoading } = useGetAnalysis(id, { query: { enabled: !!id, queryKey: [id] } });

  if (isLoading) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  if (!analysis) {
    return (
      <WorkbenchLayout>
        <div className="text-center py-12 text-muted-foreground">Analysis not found.</div>
      </WorkbenchLayout>
    );
  }

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{analysis.repo}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {analysis.version && <span>Version: {analysis.version}</span>}
            {analysis.commitSha && <span>Commit: {analysis.commitSha.substring(0, 7)}</span>}
            <span>Scanned: {format(new Date(analysis.scannedAt), "MMM d, yyyy HH:mm")}</span>
            <Badge variant={analysis.status === 'complete' ? 'default' : analysis.status === 'failed' ? 'destructive' : 'secondary'}>
              {analysis.status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <ActivitySquare className="w-4 h-4 text-primary" /> Risk Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${analysis.riskScore > 80 ? 'text-destructive' : analysis.riskScore > 50 ? 'text-yellow-500' : 'text-green-500'}`}>
                {analysis.riskScore}
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4 text-destructive" /> Critical Vulns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-destructive">{analysis.criticalCount}</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <FileText className="w-4 h-4" /> Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{analysis.componentCount}</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> License Conflicts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-yellow-500">{analysis.licenseConflicts}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Analysis Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 text-sm">
              <div>
                <dt className="font-medium text-muted-foreground">SLSA Level</dt>
                <dd className="mt-1 font-semibold">{analysis.slsaLevel || "N/A"}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Provenance Verified</dt>
                <dd className="mt-1 font-semibold">{analysis.provenanceVerified ? "Yes" : "No"}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">SBOM Format</dt>
                <dd className="mt-1 font-semibold">{analysis.sbomFormat || "N/A"}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">SBOM Version</dt>
                <dd className="mt-1 font-semibold">{analysis.sbomVersion || "N/A"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </WorkbenchLayout>
  );
}
