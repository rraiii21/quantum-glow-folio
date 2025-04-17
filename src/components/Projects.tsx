
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack e-commerce platform with real-time inventory management and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Data Visualizer",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    tags: ["TypeScript", "D3.js", "Next.js", "TailwindCSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI Content Assistant",
    description: "Natural language processing tool that helps content creators improve their writing.",
    tags: ["Python", "React", "Flask", "TensorFlow"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 animate-fade-in">
          <Folder className="h-6 w-6 text-primary" />
          Projects
        </h2>
        <div className="h-1 w-20 bg-primary mb-10 rounded animate-fade-in"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="ghost" size="icon" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center animate-fade-in">
          <Button asChild variant="outline" className="rounded-full px-6">
            <a href="#" target="_blank" rel="noopener noreferrer">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
