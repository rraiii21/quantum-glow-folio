
import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Add a class to the body for scrollbar styling
  useEffect(() => {
    document.body.classList.add("custom-scrollbar");
    return () => {
      document.body.classList.remove("custom-scrollbar");
    };
  }, []);

  return (
    <div className="relative">
      <ThemeToggle />
      <NavBar />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
