import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DatasitePreLaunchDashboard from "../DatasitePreLaunchDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DatasitePreLaunchDashboard />
  </StrictMode>
);
