
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 text-center text-muted-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} DevPortfolio. All Rights Reserved.</p>
          </div>
          
          <div className="flex items-center">
            <p>Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> and React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
