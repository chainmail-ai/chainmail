import { createRoot } from "react-dom/client";
import App from "./App";
import Figures from "./Figures";
import "./index.css";

const path = window.location.pathname;
const isFig = path.includes("/fig");
const Root = isFig ? Figures : App;

createRoot(document.getElementById("root")!).render(<Root />);
