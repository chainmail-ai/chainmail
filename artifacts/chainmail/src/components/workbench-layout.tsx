import { Link, useLocation, useParams } from "wouter";
import {
  LayoutDashboard,
  Shield,
  FileText,
  FileKey,
  Network,
  ActivitySquare,
  BadgeCheck,
  CheckCircle2,
  GitCompare,
  ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkbenchLayoutProps {
  children: React.ReactNode;
}

export function WorkbenchLayout({ children }: WorkbenchLayoutProps) {
  const [location] = useLocation();
  const params = useParams();
  const id = params.id as string;

  const navItems = [
    { name: "Overview", href: `/workbench/${id}`, icon: LayoutDashboard },
    { name: "SBOM Health", href: `/workbench/${id}/sbom`, icon: FileText },
    { name: "Vulnerabilities", href: `/workbench/${id}/vulnerabilities`, icon: Shield },
    { name: "Licenses", href: `/workbench/${id}/licenses`, icon: FileKey },
    { name: "License Tree", href: `/workbench/${id}/license-tree`, icon: Network },
    { name: "Risk Score", href: `/workbench/${id}/risk`, icon: ActivitySquare },
    { name: "Provenance", href: `/workbench/${id}/provenance`, icon: BadgeCheck },
    { name: "2026 Readiness", href: `/workbench/${id}/readiness`, icon: CheckCircle2 },
    { name: "SBOM Diff", href: `/workbench/${id}/diff`, icon: GitCompare },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="w-64 border-r border-border bg-card flex flex-col fixed inset-y-0 z-10">
        <div className="p-4 border-b border-border flex items-center gap-2">
          <Link href="/workbench" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-back-workbench">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <span className="font-bold text-lg tracking-tight truncate" title={id}>Analysis</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex-1 ml-64 flex flex-col min-h-screen relative">
        <main className="flex-1 p-8 container max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
