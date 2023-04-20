import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/common/ErrorBoundary";
import HmsIntegration from "./components/navs/DashboardContext";
import AuthContext from "./context/auth/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback="loading" />
      <Suspense fallback="loading">
        <HmsIntegration>
            <AuthContext>
                  <App />
            </AuthContext>
        </HmsIntegration>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode> 
);
