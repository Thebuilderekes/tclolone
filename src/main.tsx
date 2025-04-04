import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppStateProvider } from "./state/AppStateContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </StrictMode>,
);
