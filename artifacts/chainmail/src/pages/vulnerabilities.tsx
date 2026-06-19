import { useParams } from "wouter";
import { useGetVulnerabilities, useListVexStatements, useCreateVexStatement, getGetVulnerabilitiesQueryKey, getListVexStatementsQueryKey } from "@workspace/api-client-react";
import { WorkbenchLayout } from "@/components/workbench-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ShieldAlert, CheckCircle, Search } from "lucide-react";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function VulnerabilitiesPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: vulns, isLoading: isLoadingVulns } = useGetVulnerabilities(id, { query: { enabled: !!id, queryKey: [id, "vulnerabilities"] } });
  const { data: vexStatements, isLoading: isLoadingVex } = useListVexStatements(id, { query: { enabled: !!id, queryKey: [id, "vex-statements"] } });
  const createVex = useCreateVexStatement();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [selectedCve, setSelectedCve] = useState<string>("");
  const [vexStatus, setVexStatus] = useState<string>("not_affected");
  const [justification, setJustification] = useState("");
  const [isVexDialogOpen, setIsVexDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateVex = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCve || !vexStatus) return;

    createVex.mutate(
      { id, data: { cveId: selectedCve, status: vexStatus as any, justification } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: getGetVulnerabilitiesQueryKey(id) });
          queryClient.invalidateQueries({ queryKey: getListVexStatementsQueryKey(id) });
          setIsVexDialogOpen(false);
          setJustification("");
          toast({ title: "VEX Statement created", description: "Successfully updated vulnerability status." });
        },
        onError: () => {
          toast({ title: "Error", description: "Failed to create VEX statement.", variant: "destructive" });
        }
      }
    );
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'bg-destructive/20 text-destructive border-destructive/50';
      case 'HIGH': return 'bg-orange-500/20 text-orange-500 border-orange-500/50';
      case 'MEDIUM': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'LOW': return 'bg-blue-500/20 text-blue-500 border-blue-500/50';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const filteredVulns = vulns?.filter(v => 
    v.cveId.toLowerCase().includes(searchQuery.toLowerCase()) || 
    v.packageName.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  if (isLoadingVulns || isLoadingVex) {
    return (
      <WorkbenchLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </WorkbenchLayout>
    );
  }

  return (
    <WorkbenchLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Vulnerabilities</h1>
            <p className="text-muted-foreground mt-1">Review CVEs and manage VEX statements.</p>
          </div>
          <Dialog open={isVexDialogOpen} onOpenChange={setIsVexDialogOpen}>
            <DialogTrigger asChild>
              <Button data-testid="btn-new-vex"><ShieldAlert className="w-4 h-4 mr-2" /> New VEX Statement</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create VEX Statement</DialogTitle>
                <DialogDescription>Generate a Vulnerability Exploitability eXchange statement.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateVex} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>CVE ID</Label>
                  <Select value={selectedCve} onValueChange={setSelectedCve}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select CVE" />
                    </SelectTrigger>
                    <SelectContent>
                      {vulns?.map(v => (
                        <SelectItem key={v.cveId} value={v.cveId}>{v.cveId} ({v.packageName})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={vexStatus} onValueChange={setVexStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="not_affected">Not Affected</SelectItem>
                      <SelectItem value="affected">Affected</SelectItem>
                      <SelectItem value="fixed">Fixed</SelectItem>
                      <SelectItem value="under_investigation">Under Investigation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Justification</Label>
                  <Textarea 
                    placeholder="Provide reasoning for the status..."
                    value={justification}
                    onChange={(e) => setJustification(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={createVex.isPending || !selectedCve}>
                  {createVex.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Save Statement
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Discovered Vulnerabilities</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search CVE or package..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CVE / Title</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>CVSS</TableHead>
                    <TableHead>VEX Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVulns.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No vulnerabilities found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredVulns.map((v) => (
                      <TableRow key={v.id}>
                        <TableCell>
                          <div className="font-medium">{v.cveId}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-xs" title={v.title}>{v.title}</div>
                        </TableCell>
                        <TableCell>
                          <div>{v.packageName}</div>
                          <div className="text-xs text-muted-foreground">{v.packageVersion}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getSeverityColor(v.severity)}>
                            {v.severity}
                          </Badge>
                        </TableCell>
                        <TableCell>{v.cvssScore.toFixed(1)}</TableCell>
                        <TableCell>
                          {v.vexStatus === 'not_affected' ? (
                            <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Not Affected</Badge>
                          ) : v.vexStatus === 'fixed' ? (
                            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Fixed</Badge>
                          ) : v.vexStatus === 'under_investigation' ? (
                            <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">Investigating</Badge>
                          ) : (
                            <Badge variant="destructive">Affected</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {vexStatements && vexStatements.length > 0 && (
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle>VEX Statements</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>CVE</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Justification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vexStatements.map((vex) => (
                      <TableRow key={vex.id}>
                        <TableCell className="font-medium">{vex.cveId}</TableCell>
                        <TableCell>
                           {vex.status === 'not_affected' ? (
                            <Badge variant="secondary" className="bg-green-500/10 text-green-500">Not Affected</Badge>
                          ) : (
                            <Badge variant="outline">{vex.status}</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-sm">{vex.justification || "N/A"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </WorkbenchLayout>
  );
}
