import { useParams } from "wouter";
import { useGetReadinessChecklist } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Loader2, CheckCircle2, AlertTriangle, XCircle, Info, ExternalLink } from "lucide-react";
import { format } from "date-fns";

export default function ReadinessPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: readiness, isLoading } = useGetReadinessChecklist(id, { query: { enabled: !!id, queryKey: [id, "readiness"] } });

  if (isLoading) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  if (!readiness) {
    return (
      <WorkbenchLayout>
        <div className="text-center py-12 text-muted-foreground">Readiness data not found.</div>
      </WorkbenchLayout>
    );
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'pass': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'fail': return <XCircle className="w-5 h-5 text-destructive" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default: return <Info className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">2026 Readiness</h1>
            <p className="text-muted-foreground mt-1">Track compliance with upcoming government mandates.</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-muted-foreground mb-1">Mandate Deadline</div>
            <Badge variant="outline" className="text-sm font-mono border-primary/50 text-primary">
              {format(new Date(readiness.mandateDate), "MMMM d, yyyy")}
            </Badge>
          </div>
        </div>

        <Card className="border-border/50 bg-card overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
          <CardContent className="p-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 text-center">
                <div className="text-6xl font-black tracking-tighter text-primary">{readiness.overallReadiness}%</div>
                <div className="text-sm font-medium text-muted-foreground mt-2 uppercase tracking-widest">Overall Progress</div>
              </div>
              <div className="flex-1 w-full space-y-4">
                <Progress value={readiness.overallReadiness} className="h-4" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  {readiness.categories.map(cat => (
                    <div key={cat.name}>
                      <div className="text-muted-foreground mb-1">{cat.name}</div>
                      <div className="font-semibold">{cat.passCount} / {cat.itemCount} Complete</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight mt-8 mb-4">Requirements Checklist</h2>
          {readiness.items.map((item) => (
            <Card key={item.id} className={`border-l-4 border-r-0 border-t-0 border-b-0 shadow-sm ${
              item.status === 'pass' ? 'border-l-green-500' :
              item.status === 'fail' ? 'border-l-destructive' :
              item.status === 'warning' ? 'border-l-yellow-500' :
              'border-l-muted'
            }`}>
              <CardContent className="p-4 flex gap-4">
                <div className="shrink-0 mt-1">
                  {getStatusIcon(item.status)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                        <Badge variant="outline" className="text-xs">{item.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    {item.priority === 'critical' && <Badge variant="destructive">Critical</Badge>}
                  </div>
                  
                  {item.status !== 'pass' && item.status !== 'not_applicable' && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-md border border-border text-sm">
                      <span className="font-semibold text-foreground">Guidance: </span>
                      <span className="text-muted-foreground">{item.guidance}</span>
                      {item.referenceUrl && (
                        <a href={item.referenceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center ml-2 text-primary hover:underline">
                          Read Docs <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </WorkbenchLayout>
  );
}
