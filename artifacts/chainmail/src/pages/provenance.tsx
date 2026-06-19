import { useParams } from "wouter";
import { useGetProvenance } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ShieldCheck, Check, X, CircleDashed } from "lucide-react";

export default function ProvenancePage() {
  const params = useParams();
  const id = params.id as string;
  const { data: provenance, isLoading } = useGetProvenance(id, { query: { enabled: !!id, queryKey: [id, "provenance"] } });

  if (isLoading) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  if (!provenance) {
    return (
      <WorkbenchLayout>
        <div className="text-center py-12 text-muted-foreground">Provenance data not found.</div>
      </WorkbenchLayout>
    );
  }

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Provenance & SLSA</h1>
          <p className="text-muted-foreground mt-1">Verify build origins and cryptographic signatures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-border/50 bg-card flex flex-row items-center p-6 gap-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${provenance.signed ? 'bg-green-500/10 text-green-500' : 'bg-destructive/10 text-destructive'}`}>
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-1">Signature Status</div>
              <div className="text-2xl font-bold">
                {provenance.signed ? "Verified Signature" : "Unsigned Artifact"}
              </div>
              {provenance.signingTool && (
                <div className="text-sm text-muted-foreground mt-1">Via {provenance.signingTool}</div>
              )}
            </div>
          </Card>
          
          <Card className="border-border/50 bg-card flex flex-row items-center p-6 gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-2xl font-black">
              L{provenance.slsaLevel}
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-1">SLSA Compliance</div>
              <div className="text-2xl font-bold">
                Level {provenance.slsaLevel} Achieved
              </div>
              <div className="text-sm text-muted-foreground mt-1">Supply chain levels for software artifacts</div>
            </div>
          </Card>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Attestations</CardTitle>
            <CardDescription>Cryptographic claims about the software.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {provenance.attestations.map((att, i) => (
                <div key={i} className="flex items-start justify-between p-4 border rounded-md border-border/50 bg-muted/20">
                  <div>
                    <div className="font-semibold text-foreground">{att.type}</div>
                    <div className="text-sm text-muted-foreground mt-1">{att.detail}</div>
                  </div>
                  <Badge variant={att.verified ? "default" : "destructive"} className={att.verified ? "bg-green-500 text-white hover:bg-green-600" : ""}>
                    {att.verified ? "Verified" : "Missing/Invalid"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Implementation Path</CardTitle>
            <CardDescription>Steps to improve your provenance posture.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {provenance.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${
                      step.status === 'complete' ? 'bg-primary text-primary-foreground border-primary' :
                      step.status === 'incomplete' ? 'border-primary text-primary' :
                      'border-muted text-muted-foreground'
                    }`}>
                      {step.status === 'complete' ? <Check className="w-4 h-4" /> : 
                       step.status === 'incomplete' ? <CircleDashed className="w-4 h-4" /> :
                       <X className="w-4 h-4" />}
                    </div>
                    {i !== provenance.steps.length - 1 && (
                      <div className="w-0.5 h-full bg-border my-1"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="font-semibold text-foreground text-lg">{step.step}</div>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{step.guidance}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </WorkbenchLayout>
  );
}
