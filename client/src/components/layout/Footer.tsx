import { Wrench, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display font-bold text-xl leading-none text-foreground block">Mr. Fix-It</span>
                <span className="text-xs tracking-widest uppercase">Appliance Repair</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner for reliable, fast, and professional appliance repairs. We bring life back to your machines.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-foreground text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Book Online</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-foreground text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Refrigerator Repair</li>
              <li>Washing Machine Repair</li>
              <li>Dryer Repair</li>
              <li>Oven & Stove Repair</li>
              <li>Dishwasher Repair</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-foreground text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Repair Street, Suite 100<br />Cityville, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>service@mrfixit.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Mon-Fri: 8am - 6pm<br />Sat: 9am - 4pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Mr. Fix-It Appliance Repair Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
