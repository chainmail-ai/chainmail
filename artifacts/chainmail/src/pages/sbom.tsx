import { useParams } from "wouter";
import { useGetSbomSummary } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2, Package, Layers, AlertCircle, FileKey } from "lucide-react";
import { format } from "date-fns";

export default function SbomPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: sbom, isLoading } = useGetSbomSummary(id, { query: { enabled: !!id, queryKey: [id, "sbom"] } });

  if (isLoading) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  if (!sbom) {
    return (
      <WorkbenchLayout>
        <div className="text-center py-12 text-muted-foreground">SBOM data not found.</div>
      </WorkbenchLayout>
    );
  }

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">SBOM Health</h1>
          <p className="text-muted-foreground mt-1">Software Bill of Materials and dependency analysis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Package className="w-4 h-4" /> Total Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{sbom.totalComponents}</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Layers className="w-4 h-4" /> Direct / Transitive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {sbom.directDependencies} <span className="text-muted-foreground text-sm font-normal">/ {sbom.transitiveDependencies}</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" /> Stale Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${sbom.staleComponents > 0 ? 'text-yellow-500' : 'text-green-500'}`}>
                {sbom.staleComponents}
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <FileKey className="w-4 h-4" /> Unique Licenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{sbom.uniqueLicenses}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>License</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Vulns</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sbom.components.map((comp) => (
                    <TableRow key={comp.id}>
                      <TableCell className="font-medium">{comp.name}</TableCell>
                      <TableCell>{comp.version}</TableCell>
                      <TableCell>{comp.license}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{comp.isDirect ? "Direct" : "Transitive"}</Badge>
                      </TableCell>
                      <TableCell>
                        {comp.vulnerabilityCount > 0 ? (
                          <Badge variant="destructive">{comp.vulnerabilityCount}</Badge>
                        ) : (
                          <span className="text-muted-foreground">0</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {comp.isStale ? (
                          <Badge variant="secondary" className="text-yellow-500 bg-yellow-500/10">Stale</Badge>
                        ) : (
                          <Badge variant="secondary" className="text-green-500 bg-green-500/10">Up to date</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </WorkbenchLayout>
  );
}
