
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light")}
      className="fixed top-6 right-6 z-50 rounded-full w-10 h-10 animate-fade-in hover:bg-secondary/80 animate-glow"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : theme === "dark" ? (
        <Laptop className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
