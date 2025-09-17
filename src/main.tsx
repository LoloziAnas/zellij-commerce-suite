import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Main.tsx is executing - app should load");

createRoot(document.getElementById("root")!).render(<App />);
