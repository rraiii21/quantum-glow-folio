
import { CalendarDays, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to create websites that are accessible to everyone, regardless of disabilities or limitations.",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "Modern State Management in React",
    excerpt: "Comparing different state management solutions in React and when to use each one.",
    date: "Mar 22, 2025",
    readTime: "7 min read",
    link: "#"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies that will shape the way we build for the web in the coming years.",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section-container">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 animate-fade-in">
          <BookOpen className="h-6 w-6 text-primary" />
          Blog
        </h2>
        <div className="h-1 w-20 bg-primary mb-10 rounded animate-fade-in"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-6 pb-0">
                <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                  <a href={post.link}>{post.title}</a>
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col items-start">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{post.date} • {post.readTime}</span>
                </div>
                <Button variant="ghost" className="pl-0 hover:pl-2 transition-all duration-300" asChild>
                  <a href={post.link} className="flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center animate-fade-in">
          <Button asChild variant="outline" className="rounded-full px-6">
            <a href="#">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
