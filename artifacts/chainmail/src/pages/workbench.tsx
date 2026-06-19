import { useGetDashboard, useListAnalyses, useCreateAnalysis, getListAnalysesQueryKey, getGetDashboardQueryKey } from "@workspace/api-client-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2, Plus, ArrowRight, Shield, AlertTriangle, FileKey } from "lucide-react";
import { format } from "date-fns";

export default function Workbench() {
  const { data: dashboard, isLoading: isLoadingDashboard } = useGetDashboard();
  const { data: analyses, isLoading: isLoadingAnalyses } = useListAnalyses();
  const createAnalysis = useCreateAnalysis();
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  const [repoUrl, setRepoUrl] = useState("");
  const [branch, setBranch] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl) return;

    createAnalysis.mutate(
      { data: { repoUrl, branch: branch || undefined } },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: getListAnalysesQueryKey() });
          queryClient.invalidateQueries({ queryKey: getGetDashboardQueryKey() });
          setLocation(`/workbench/${data.id}`);
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Workbench</h1>
            <p className="text-muted-foreground mt-1">Manage your supply chain security analyses.</p>
          </div>
          <Link href="/">
            <Button variant="outline" data-testid="btn-back-home">Back to Home</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-border/50 bg-card hover:border-primary/50 transition-colors" data-testid="card-total-analyses">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4" /> Total Analyses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {isLoadingDashboard ? <Loader2 className="w-6 h-6 animate-spin" /> : dashboard?.totalAnalyses || 0}
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card hover:border-primary/50 transition-colors" data-testid="card-critical-vulns">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive" /> Critical Vulns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">
                {isLoadingDashboard ? <Loader2 className="w-6 h-6 animate-spin" /> : dashboard?.criticalVulnerabilities || 0}
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card hover:border-primary/50 transition-colors" data-testid="card-license-conflicts">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <FileKey className="w-4 h-4" /> License Conflicts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-500">
                {isLoadingDashboard ? <Loader2 className="w-6 h-6 animate-spin" /> : dashboard?.licenseConflicts || 0}
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card hover:border-primary/50 transition-colors" data-testid="card-avg-risk">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                Average Risk Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {isLoadingDashboard ? <Loader2 className="w-6 h-6 animate-spin" /> : dashboard?.averageRiskScore?.toFixed(1) || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>New Analysis</CardTitle>
            <CardDescription>Enter a repository URL to start a new security analysis.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="flex gap-4">
              <Input
                placeholder="https://github.com/owner/repo"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="flex-1"
                data-testid="input-repo-url"
                required
              />
              <Input
                placeholder="Branch (optional)"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-48"
                data-testid="input-branch"
              />
              <Button type="submit" disabled={createAnalysis.isPending || !repoUrl} data-testid="btn-run-analysis">
                {createAnalysis.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                Analyze
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Recent Analyses</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingAnalyses ? (
              <div className="flex justify-center p-8"><Loader2 className="w-8 h-8 animate-spin text-muted-foreground" /></div>
            ) : analyses && analyses.length > 0 ? (
              <div className="border rounded-md">
                <Table data-testid="table-recent-analyses">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Repository</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Risk Score</TableHead>
                      <TableHead>Critical Vulns</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analyses.map((analysis) => (
                      <TableRow key={analysis.id}>
                        <TableCell className="font-medium">{analysis.repo}</TableCell>
                        <TableCell>
                          <Badge variant={analysis.status === 'complete' ? 'default' : analysis.status === 'failed' ? 'destructive' : 'secondary'}>
                            {analysis.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`font-bold ${analysis.riskScore > 80 ? 'text-destructive' : analysis.riskScore > 50 ? 'text-yellow-500' : 'text-green-500'}`}>
                            {analysis.riskScore}
                          </span>
                        </TableCell>
                        <TableCell>
                          {analysis.criticalCount > 0 ? (
                            <Badge variant="destructive">{analysis.criticalCount}</Badge>
                          ) : (
                            <span className="text-muted-foreground">0</span>
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {format(new Date(analysis.createdAt), "MMM d, yyyy")}
                        </TableCell>
                        <TableCell className="text-right">
                          <Link href={`/workbench/${analysis.id}`}>
                            <Button size="sm" variant="ghost" data-testid={`btn-view-${analysis.id}`}>
                              View <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center p-8 text-muted-foreground">
                No analyses found. Run your first analysis above.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
