import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const storageKey = "renovar-theme";

function readPreference(): Theme | null {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  const hasChoice = useRef(readPreference() !== null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#071322" : "#ffffff",
    );
  }, [theme]);

  useEffect(() => {
    const device = window.matchMedia("(prefers-color-scheme: dark)");
    function followDevice() {
      if (!hasChoice.current) setTheme(device.matches ? "dark" : "light");
    }
    function followOtherTab(event: StorageEvent) {
      if (event.key !== storageKey && event.key !== null) return;
      const preference = readPreference();
      hasChoice.current = preference !== null;
      setTheme(preference ?? (device.matches ? "dark" : "light"));
    }
    device.addEventListener("change", followDevice);
    window.addEventListener("storage", followOtherTab);
    followDevice();
    return () => {
      device.removeEventListener("change", followDevice);
      window.removeEventListener("storage", followOtherTab);
    };
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    hasChoice.current = true;
    setTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Keep the chosen theme for this visit if storage is blocked.
    }
  }

  const label = theme === "light" ? "Ativar modo escuro" : "Ativar modo claro";
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === "light" ? (
        <Sun size={19} aria-hidden="true" />
      ) : (
        <Moon size={19} aria-hidden="true" />
      )}
      <span aria-hidden="true">{theme === "light" ? "Claro" : "Escuro"}</span>
    </button>
  );
}
