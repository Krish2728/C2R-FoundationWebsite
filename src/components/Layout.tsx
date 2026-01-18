import { Outlet, Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Heart, ChevronDown, Users, Target, Briefcase, Award, MapPin, Compass } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { useState } from 'react';
import { getImageUrl } from '@/lib/images';
import { Toaster } from '@/components/ui/sonner';

export function Layout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Programs', path: '/programs' },
    { label: 'Mentorship', path: '/mentorship' },
    { label: 'SEPF', path: '/sepf' },
    { label: 'Get Involved', path: '/get-involved' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Donate', path: '/donate' },
    { label: 'Login', path: '/login' },
  ];

  const aboutDropdownItems = [
    { label: 'Who We Are', path: '/about/who-we-are', icon: Users, description: 'Our mission and founding story' },
    { label: 'Vision & Mission', path: '/about/vision-mission', icon: Target, description: 'Our guiding principles' },
    { label: 'Our Team', path: '/about/our-team', icon: Briefcase, description: 'Meet the people behind C2R' },
    { label: 'Our Working Model', path: '/about/working-model', icon: Award, description: 'How we create impact' },
    { label: 'Our Values', path: '/about/our-values', icon: Compass, description: 'What drives us forward' },
    { label: 'Journey', path: '/about/journey', icon: MapPin, description: 'Our story and milestones' },
  ];

  const handleNavigation = (path: string, hash?: string) => {
    navigate({ to: path as any });
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src={getImageUrl('/assets/generated/c2r-logo-transparent.dim_200x200.png')} alt="C2R Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">Connect2Roots</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary">
                About Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-2">
                {aboutDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild className="cursor-pointer">
                    <Link
                      to={item.path}
                      className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-accent"
                    >
                      <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-sm">{item.label}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: 'text-primary' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <nav className="flex flex-col gap-6 pt-8">
                <div className="flex flex-col gap-3">
                  <span className="text-base font-semibold text-foreground px-2">About Us</span>
                  <div className="flex flex-col gap-1">
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-start gap-3 rounded-md p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                        activeProps={{ className: 'bg-accent text-primary' }}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-4 w-4 mt-0.5 shrink-0" />
                        <div className="flex flex-col gap-0.5">
                          <span>{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                      activeProps={{ className: 'bg-accent text-primary' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={getImageUrl('/assets/generated/c2r-logo-transparent.dim_200x200.png')} alt="C2R Logo" className="h-8 w-8" />
                <span className="font-bold text-lg">Connect2Roots</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering communities through career mentorship and social impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about/who-we-are" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/mentorship" className="text-muted-foreground hover:text-primary transition-colors">
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link to="/sepf" className="text-muted-foreground hover:text-primary transition-colors">
                    C2R SEPF
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                    Become a Mentor
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/get-involved', 'partnerships')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Corporate Partnerships
                  </button>
                </li>
                <li>
                  <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-3 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiX className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiLinkedin className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiInstagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Email: info@connect2roots.org
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © 2025. Built with <Heart className="h-4 w-4 text-c2r-accent fill-c2r-accent" /> using{' '}
              <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
