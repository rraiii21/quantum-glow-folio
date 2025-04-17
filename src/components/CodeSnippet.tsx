
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
}

const CodeSnippet = ({ code, language = "jsx", fileName, className }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      {fileName && (
        <div className="bg-secondary/80 px-4 py-2 text-sm font-mono border-b border-border flex items-center justify-between">
          <span>{fileName}</span>
          <span className="text-xs text-muted-foreground">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-secondary/50 text-sm font-mono">
          <code>{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-70 hover:opacity-100"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default CodeSnippet;
