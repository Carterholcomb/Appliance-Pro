import heroImage from "@assets/Mr-Fix-It-Brand-Art-06_1766845247245.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-muted/30">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mr. Fix-It Service Van" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
            <Star className="h-3.5 w-3.5 fill-primary" />
            #1 Rated Appliance Repair in Tampa Bay
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground leading-[1.1]">
            Expert Repairs, <br />
            <span className="text-primary">You Can Count On Us.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Certified technicians for all major appliance brands. Same-day service and transparent pricing from your local pros.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="xl" className="text-lg px-8 h-14 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" asChild>
              <Link href="/book">Schedule Service</Link>
            </Button>
            
            <Button size="xl" variant="outline" className="text-lg px-8 h-14 bg-background/50 backdrop-blur hover:bg-background border-primary/20 hover:border-primary" asChild>
              <Link href="/services">
                View Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 text-sm font-medium text-foreground/70">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Available Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <span>813-862-5547</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
