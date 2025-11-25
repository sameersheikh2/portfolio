import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Go to Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="gap-2">
            <a href="https://github.com/sameersheikh2/portfolio/issues" target="_blank" rel="noopener noreferrer">
              Report an issue
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="pt-8 text-sm text-muted-foreground">
          <p>Or try one of these pages:</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <a href="#about" className="text-primary hover:underline">About</a>
            <span>•</span>
            <a href="#skills" className="text-primary hover:underline">Skills</a>
            <span>•</span>
            <a href="#projects" className="text-primary hover:underline">Projects</a>
            <span>•</span>
            <a href="#contact" className="text-primary hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
