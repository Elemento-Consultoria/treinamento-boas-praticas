import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gestora from "./pages/Gestora";
import Limpeza from "./pages/Limpeza";
import Panificacao from "./pages/Panificacao";
import GuiaAnexos from "./pages/GuiaAnexos";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gestora" component={Gestora} />
      <Route path="/limpeza" component={Limpeza} />
      <Route path="/panificacao" component={Panificacao} />
      <Route path="/guia-anexos" component={GuiaAnexos} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
