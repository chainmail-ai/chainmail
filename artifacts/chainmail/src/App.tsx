import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/components/theme-provider";

import Home from "@/pages/home";
import Workbench from "@/pages/workbench";
import Analysis from "@/pages/analysis";
import SbomPage from "@/pages/sbom";
import VulnerabilitiesPage from "@/pages/vulnerabilities";
import LicensesPage from "@/pages/licenses";
import LicenseTreePage from "@/pages/license-tree";
import RiskPage from "@/pages/risk";
import ProvenancePage from "@/pages/provenance";
import ReadinessPage from "@/pages/readiness";
import DiffPage from "@/pages/diff";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/workbench" component={Workbench} />
      <Route path="/workbench/:id" component={Analysis} />
      <Route path="/workbench/:id/sbom" component={SbomPage} />
      <Route path="/workbench/:id/vulnerabilities" component={VulnerabilitiesPage} />
      <Route path="/workbench/:id/licenses" component={LicensesPage} />
      <Route path="/workbench/:id/license-tree" component={LicenseTreePage} />
      <Route path="/workbench/:id/risk" component={RiskPage} />
      <Route path="/workbench/:id/provenance" component={ProvenancePage} />
      <Route path="/workbench/:id/readiness" component={ReadinessPage} />
      <Route path="/workbench/:id/diff" component={DiffPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="chainmail-theme">
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
