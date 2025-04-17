
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            section.classList.add("animate-fade-in");
            section.style.opacity = "1";
          }, delay);
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn("opacity-0", className)}
      style={{ transitionDuration: "0.5s" }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
