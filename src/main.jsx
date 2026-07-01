import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/common/ThemeProvider";

import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TooltipProvider>
          <AuthProvider>
            <App />

            <Toaster
              richColors
              position="top-right"
              closeButton
            />
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);