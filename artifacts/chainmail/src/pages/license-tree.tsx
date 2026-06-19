import { useParams } from "wouter";
import { useGetLicenseTree } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ChevronRight, FileCode2, AlertCircle } from "lucide-react";

export default function LicenseTreePage() {
  const params = useParams();
  const id = params.id as string;
  const { data: tree, isLoading } = useGetLicenseTree(id, { query: { enabled: !!id, queryKey: [id, "license-tree"] } });

  if (isLoading) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  if (!tree) {
    return (
      <WorkbenchLayout>
        <div className="text-center py-12 text-muted-foreground">License tree not found.</div>
      </WorkbenchLayout>
    );
  }

  const renderNode = (node: any, depth = 0) => {
    return (
      <div key={`${node.name}-${node.version}-${depth}`} className="relative">
        <div 
          className={`flex items-center gap-2 py-2 px-3 hover:bg-muted/50 rounded-md transition-colors ${depth > 0 ? 'ml-6 border-l-2 border-border/50 pl-4' : ''}`}
        >
          {node.children && node.children.length > 0 ? (
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
          ) : (
            <FileCode2 className="w-4 h-4 text-muted-foreground shrink-0 ml-1" />
          )}
          
          <div className="flex flex-1 items-center gap-3 min-w-0">
            <span className="font-medium text-foreground truncate">{node.name}</span>
            <span className="text-xs text-muted-foreground">v{node.version}</span>
            <Badge variant="outline" className={`ml-auto shrink-0 ${
              node.hasConflict ? 'border-destructive text-destructive' :
              node.licenseCategory === 'permissive' ? 'border-green-500/30 text-green-500' :
              'border-yellow-500/30 text-yellow-500'
            }`}>
              {node.license}
            </Badge>
            {node.hasConflict && (
              <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
            )}
          </div>
        </div>
        {node.children && node.children.length > 0 && (
          <div className="mt-1">
            {node.children.map((child: any) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">License Tree</h1>
          <p className="text-muted-foreground mt-1">Recursive visualization of dependencies and their licenses.</p>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Dependency Graph</CardTitle>
            <CardDescription>Expand nodes to see transitive dependencies.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-background/50 border rounded-lg p-4 font-mono text-sm overflow-x-auto">
              {renderNode(tree)}
            </div>
          </CardContent>
        </Card>
      </div>
    </WorkbenchLayout>
  );
}
