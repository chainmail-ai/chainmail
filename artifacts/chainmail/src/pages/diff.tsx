import { useParams } from "wouter";
import { useListAnalyses, useCreateDiff } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, GitCompare, PlusCircle, MinusCircle, RefreshCw, AlertTriangle } from "lucide-react";
import React from "react";
import { format } from "date-fns";

export default function DiffPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: analyses, isLoading: isLoadingAnalyses } = useListAnalyses();
  const createDiff = useCreateDiff();

  const [targetAnalysisId, setTargetAnalysisId] = React.useState<string>("");
  const [diffResult, setDiffResult] = React.useState<any>(null);

  const handleCompare = () => {
    if (!targetAnalysisId) return;
    
    createDiff.mutate(
      { data: { baseAnalysisId: id, headAnalysisId: targetAnalysisId } },
      {
        onSuccess: (data) => {
          setDiffResult(data);
        }
      }
    );
  };

  if (isLoadingAnalyses) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  // Filter out current analysis and failed ones
  const availableTargets = analyses?.filter(a => a.id !== id && a.status === 'complete') || [];

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">SBOM Diff</h1>
          <p className="text-muted-foreground mt-1">Compare this analysis against a previous version.</p>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Select Target</CardTitle>
            <CardDescription>Choose another analysis of this repository to compare against.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-end">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Target Analysis</label>
                <Select value={targetAnalysisId} onValueChange={setTargetAnalysisId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select previous analysis..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTargets.map(a => (
                      <SelectItem key={a.id} value={a.id}>
                        {format(new Date(a.scannedAt), "MMM d, yyyy HH:mm")} - {a.version || (a.commitSha ? a.commitSha.substring(0,7) : 'Unknown')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleCompare} disabled={!targetAnalysisId || createDiff.isPending}>
                {createDiff.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <GitCompare className="w-4 h-4 mr-2" />}
                Compare
              </Button>
            </div>
          </CardContent>
        </Card>

        {diffResult && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2"><PlusCircle className="w-4 h-4 text-green-500"/> Added</div>
                  <div className="text-3xl font-bold text-green-500">{diffResult.added.length}</div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2"><MinusCircle className="w-4 h-4 text-destructive"/> Removed</div>
                  <div className="text-3xl font-bold text-destructive">{diffResult.removed.length}</div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2"><RefreshCw className="w-4 h-4 text-blue-500"/> Updated</div>
                  <div className="text-3xl font-bold text-blue-500">{diffResult.updated.length}</div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-orange-500"/> Risk Delta</div>
                  <div className="text-3xl font-bold">{diffResult.riskDelta > 0 ? `+${diffResult.riskDelta}` : diffResult.riskDelta}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card">
                <CardHeader>
                  <CardTitle className="text-green-500 flex items-center gap-2"><PlusCircle className="w-5 h-5"/> Added Components</CardTitle>
                </CardHeader>
                <CardContent>
                  {diffResult.added.length === 0 ? (
                    <div className="text-muted-foreground text-sm text-center py-4">No components added.</div>
                  ) : (
                    <ul className="space-y-2">
                      {diffResult.added.map((comp: any) => (
                        <li key={comp.id} className="flex justify-between items-center p-2 rounded bg-green-500/10 border border-green-500/20">
                          <span className="font-medium">{comp.name}</span>
                          <Badge variant="outline" className="text-green-500 border-green-500/30">v{comp.version}</Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2"><MinusCircle className="w-5 h-5"/> Removed Components</CardTitle>
                </CardHeader>
                <CardContent>
                  {diffResult.removed.length === 0 ? (
                    <div className="text-muted-foreground text-sm text-center py-4">No components removed.</div>
                  ) : (
                    <ul className="space-y-2">
                      {diffResult.removed.map((comp: any) => (
                        <li key={comp.id} className="flex justify-between items-center p-2 rounded bg-destructive/10 border border-destructive/20">
                          <span className="font-medium line-through opacity-70">{comp.name}</span>
                          <Badge variant="outline" className="text-destructive border-destructive/30">v{comp.version}</Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>

            {diffResult.updated.length > 0 && (
              <Card className="border-border/50 bg-card">
                <CardHeader>
                  <CardTitle className="text-blue-500 flex items-center gap-2"><RefreshCw className="w-5 h-5"/> Version Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {diffResult.updated.map((update: any, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded border border-border/50 bg-muted/20">
                        <div className="font-medium flex-1">{update.component.name}</div>
                        <div className="flex items-center gap-3 font-mono text-sm">
                          <span className="text-muted-foreground line-through">v{update.oldVersion}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="text-blue-500 font-bold">v{update.component.version}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        )}
      </div>
    </WorkbenchLayout>
  );
}
