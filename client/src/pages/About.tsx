import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Users, Trophy, History } from "lucide-react";
import heroImage from "@assets/generated_images/appliance_repair_technician_hero_image.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Repairing Homes, <br/>Building Trust.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2010, Mr. Fix-It Appliance Repair Inc. has been the go-to solution for homeowners. We believe in honest work, transparent pricing, and getting the job done right.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-background to-transparent hidden lg:block"></div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
             <img src={heroImage} alt="Our Team" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              It started with a single van and a toolbox. Our founder, John "Mr. Fix-It" Doe, saw a need for reliable appliance repair that didn't leave customers waiting for days.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we have a fleet of 15 vehicles and a team of certified technicians, but our core mission remains the same: treat every home like it's our own.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Certified and background-checked technicians.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">Voted #1 Service Provider three years in a row.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <History className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold">15+ Years</h4>
                  <p className="text-sm text-muted-foreground">Serving our local community with pride.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-display">15k+</div>
              <div className="text-primary-foreground/80">Repairs Completed</div>
            </div>
             <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-display">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
             <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-display">24h</div>
              <div className="text-primary-foreground/80">Avg. Response Time</div>
            </div>
             <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-display">50+</div>
              <div className="text-primary-foreground/80">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-display font-bold mb-6">Ready to work with the best?</h2>
           <Button size="xl" className="shadow-lg" asChild>
             <Link href="/book">Schedule Your Service</Link>
           </Button>
         </div>
      </section>
    </div>
  );
}
