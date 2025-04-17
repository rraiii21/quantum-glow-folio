
import { Check, Terminal, Code, User } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript/TypeScript", 
    "React & Next.js", 
    "Node.js",
    "TailwindCSS",
    "REST & GraphQL APIs",
    "Database Design"
  ];

  return (
    <section id="about" className="section-container">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <User className="h-6 w-6 text-primary" />
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary mb-6 rounded"></div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate full-stack developer with a knack for creating elegant solutions 
                to complex problems. My journey in software development began over 3 years ago.
              </p>
              <p>
                I enjoy building applications that are not only functional but also intuitive and accessible.
                Clean code, modern frameworks, and user-centered design are at the core of my development philosophy.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
                or sharing my knowledge through blog posts and community events.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card dark:glass-card-dark p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" /> 
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-secondary/50 font-mono text-sm">
                <div className="flex items-start gap-2">
                  <Code className="h-4 w-4 mt-0.5 text-primary" />
                  <pre>
                    <code>
{`// Passionate about clean code
function solveProblems() {
  return "Elegant Solutions";
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
