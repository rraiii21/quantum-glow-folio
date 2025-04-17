
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 pt-20 pb-10">
      <div className="w-full max-w-4xl">
        <p className="text-primary font-mono mb-3 animate-fade-in">Hello, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-in">
          <span className="text-foreground">Developer</span>
          <span className="text-gradient block mt-2">Portfolio</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          I build exceptional, accessible and user-friendly digital experiences.
          Focusing on clean code and modern technologies to create impactful solutions.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <Button asChild className="rounded-full px-6 py-6 bg-primary hover:bg-primary/90">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-6 py-6">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
