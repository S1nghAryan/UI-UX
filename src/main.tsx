
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

function removeFigmaMakeBadge() {
  if (window.location.pathname !== "/") {
    return;
  }

  const root = document.getElementById("root");
  const elements = Array.from(document.body.querySelectorAll<HTMLElement>("body *"));

  for (const element of elements) {
    const text = element.textContent?.replace(/\s+/g, " ").trim();

    if (!text || !text.includes("Created with Figma Make") || !text.includes("Remix")) {
      continue;
    }

    let target: HTMLElement | null = element;

    while (target?.parentElement && target.parentElement !== document.body) {
      const style = window.getComputedStyle(target);

      if (style.position === "fixed" || style.position === "sticky") {
        break;
      }

      if (root && target.contains(root)) {
        target = element;
        break;
      }

      target = target.parentElement;
    }

    if (!target || target === root || (root && target.contains(root))) {
      continue;
    }

    target.remove();
  }
}

removeFigmaMakeBadge();
new MutationObserver(removeFigmaMakeBadge).observe(document.body, {
  childList: true,
  subtree: true,
});

createRoot(document.getElementById("root")!).render(<App />);
  
