import { useParams } from "wouter";
import { useGetRiskScore } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function RiskPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: risk, isLoading } = useGetRiskScore(id, { query: { enabled: !!id, queryKey: [id, "risk"] } });

  if (isLoading) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  if (!risk) {
    return (
      <WorkbenchLayout>
        <div className="text-center py-12 text-muted-foreground">Risk data not found.</div>
      </WorkbenchLayout>
    );
  }

  const gradeColors = {
    A: 'text-green-500 bg-green-500/10 border-green-500/20',
    B: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    C: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    D: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    F: 'text-destructive bg-destructive/10 border-destructive/20',
  };

  const getGradeColor = (grade: string) => gradeColors[grade as keyof typeof gradeColors] || gradeColors.C;

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Risk Score</h1>
          <p className="text-muted-foreground mt-1">Holistic evaluation of supply chain risk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={`border-2 md:col-span-1 flex flex-col items-center justify-center p-6 text-center ${getGradeColor(risk.grade)}`}>
            <div className="text-8xl font-black mb-2">{risk.grade}</div>
            <div className="text-xl font-bold opacity-80 mb-4">Grade</div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">{risk.overallScore}</span>
              <span className="text-sm opacity-70">/ 100 points</span>
            </div>
          </Card>

          <Card className="border-border/50 bg-card md:col-span-2">
            <CardHeader>
              <CardTitle>Dimensions</CardTitle>
              <CardDescription>Breakdown of factors contributing to the final score.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {risk.dimensions.map((dim, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-foreground flex items-center gap-2">
                      {dim.status === 'critical' ? <AlertTriangle className="w-4 h-4 text-destructive" /> : 
                       dim.status === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-500" /> : 
                       <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      {dim.name}
                    </span>
                    <span className="text-muted-foreground">{dim.score}/100</span>
                  </div>
                  <Progress 
                    value={dim.score} 
                    className="h-2"
                    indicatorClassName={
                      dim.status === 'critical' ? 'bg-destructive' : 
                      dim.status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'
                    }
                  />
                  <p className="text-xs text-muted-foreground">{dim.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Actionable Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {risk.recommendations.map((rec, i) => (
                <li key={i} className="flex gap-3 items-start p-3 rounded-md bg-muted/30 border border-border/50">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm text-foreground/90 leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </WorkbenchLayout>
  );
}
