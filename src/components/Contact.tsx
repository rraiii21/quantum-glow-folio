
import { useState } from "react";
import { Send, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 animate-fade-in">
          <Mail className="h-6 w-6 text-primary" />
          Contact
        </h2>
        <div className="h-1 w-20 bg-primary mb-10 rounded animate-fade-in"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">
              Have a question or want to work together? Feel free to reach out using the contact form
              or through any of my social media profiles.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                hello@devportfolio.com
              </a>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 bg-background/50 border-border"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-full"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
