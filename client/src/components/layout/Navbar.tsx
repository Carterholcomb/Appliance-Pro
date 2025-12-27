import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform duration-300">
            <Wrench className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none text-primary">Mr. Fix-It</span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Appliance Repair</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary font-bold" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
          <Button size="lg" className="shadow-md hover:shadow-lg transition-all" asChild>
            <Link href="/book">Book Service</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className={`text-lg font-medium py-2 border-b border-border/50 ${
                        isActive(link.href) ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/book" onClick={() => setIsOpen(false)}>Book Service</Link>
                  </Button>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href="tel:+15551234567">
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
