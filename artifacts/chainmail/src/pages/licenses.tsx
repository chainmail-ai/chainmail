import { useParams } from "wouter";
import { useGetLicenseReport } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2, AlertTriangle, FileKey } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";

export default function LicensesPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: report, isLoading } = useGetLicenseReport(id, { query: { enabled: !!id, queryKey: [id, "licenses"] } });

  if (isLoading) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  if (!report) {
    return (
      <WorkbenchLayout>
        <div className="text-center py-12 text-muted-foreground">License report not found.</div>
      </WorkbenchLayout>
    );
  }

  const COLORS = {
    permissive: 'hsl(var(--chart-2))', // Greenish/Cyan
    weak_copyleft: 'hsl(var(--chart-5))', // Yellow
    strong_copyleft: 'hsl(var(--destructive))', // Red
    unknown: 'hsl(var(--muted-foreground))'
  };

  const chartData = report.distribution.map(d => ({
    name: d.license,
    value: d.count,
    category: d.category
  }));

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">License Compliance</h1>
          <p className="text-muted-foreground mt-1">Audit dependency licenses and detect conflicts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-border/50 bg-card md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overall Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-full ${report.compatibility === 'clean' ? 'bg-green-500/10 text-green-500' : report.compatibility === 'warnings' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-destructive/10 text-destructive'}`}>
                  {report.compatibility === 'clean' ? <FileKey className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                </div>
                <div>
                  <div className="text-3xl font-bold capitalize">
                    {report.compatibility}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {report.conflicts.length} conflict(s) found
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">License Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-48">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.category] || COLORS.unknown} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">No license data</div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Conflicts</CardTitle>
              <CardDescription>Licenses incompatible with your project.</CardDescription>
            </CardHeader>
            <CardContent>
              {report.conflicts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground border rounded-md border-dashed">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  No conflicts detected.
                </div>
              ) : (
                <div className="space-y-4">
                  {report.conflicts.map(conflict => (
                    <div key={conflict.id} className="p-4 border rounded-md border-destructive/20 bg-destructive/5 flex gap-4">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">{conflict.packageName} <span className="text-muted-foreground font-normal">v{conflict.packageVersion}</span></div>
                        <div className="text-sm mt-1 mb-2">
                          <span className="font-medium text-destructive">Conflict:</span> {conflict.conflictType} ({conflict.license})
                        </div>
                        <p className="text-sm text-muted-foreground">{conflict.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Distribution Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>License</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {report.distribution.map((dist, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{dist.license}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            dist.category === 'strong_copyleft' ? 'text-destructive border-destructive/50' :
                            dist.category === 'permissive' ? 'text-green-500 border-green-500/50' :
                            'text-yellow-500 border-yellow-500/50'
                          }>
                            {dist.category.replace('_', ' ')}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{dist.count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </WorkbenchLayout>
  );
}

// Temporary mock for CheckCircle2 since it wasn't imported in the snippet above but used
import { CheckCircle2 } from "lucide-react";
