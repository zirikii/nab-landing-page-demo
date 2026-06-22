import { createRoot } from "react-dom/client";
import UtilityBar from "./components/UtilityBar.jsx";

const rootEl = document.getElementById("utility-bar-root");
if (rootEl) createRoot(rootEl).render(<UtilityBar />);
