import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ShieldCheck, Wrench, ArrowRight, Star, Phone } from "lucide-react";
import { Link } from "wouter";
import fridgeImage from "@assets/generated_images/refrigerator_repair_close_up.png";
import ovenImage from "@assets/generated_images/oven_repair_service_image.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-2xl bg-secondary/30 border border-secondary hover:border-primary/30 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display">Same Day Service</h3>
              <p className="text-muted-foreground">We know a broken appliance is an emergency. That's why we offer same-day appointments.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-2xl bg-secondary/30 border border-secondary hover:border-primary/30 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display">Warranty Guaranteed</h3>
              <p className="text-muted-foreground">All our repairs are backed by a comprehensive 90-day parts and labor warranty.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-2xl bg-secondary/30 border border-secondary hover:border-primary/30 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display">Expert Technicians</h3>
              <p className="text-muted-foreground">Our team is fully licensed, insured, and trained to repair all major appliance brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold">What We Repair</h2>
            <p className="text-muted-foreground text-lg">From keeping your food cold to getting your clothes clean, we handle it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fridge */}
            <Card className="overflow-hidden group border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={fridgeImage} alt="Refrigerator Repair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold font-display mb-2">Refrigerator Repair</h3>
                <p className="text-muted-foreground mb-4">Cooling issues, leaks, ice maker problems, and more. We fix all major fridge brands.</p>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Oven */}
            <Card className="overflow-hidden group border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={ovenImage} alt="Oven Repair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold font-display mb-2">Oven & Stove Repair</h3>
                <p className="text-muted-foreground mb-4">Temperature inconsistencies, burner failures, and door issues solved quickly.</p>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

             {/* Washer */}
             <Card className="overflow-hidden group border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden bg-primary/5 flex items-center justify-center relative">
                 <Wrench className="h-16 w-16 text-primary/20" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold font-display mb-2">Washer & Dryer</h3>
                <p className="text-muted-foreground mb-4">Spin cycles, draining issues, heating elements. We get your laundry routine back on track.</p>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline cursor-pointer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Need a Repair? Don't Wait.</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Schedule your appointment online in less than 2 minutes. Our technicians are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" className="text-primary font-bold shadow-xl hover:shadow-2xl" asChild>
              <Link href="/book">Book Service Now</Link>
            </Button>
            
            <Button size="xl" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white" asChild>
              <a href="tel:+15551234567">
                <Phone className="mr-2 h-5 w-5" /> (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Trusted by Your Neighbors</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
               <Star className="fill-current h-6 w-6" />
               <Star className="fill-current h-6 w-6" />
               <Star className="fill-current h-6 w-6" />
               <Star className="fill-current h-6 w-6" />
               <Star className="fill-current h-6 w-6" />
            </div>
            <p className="text-muted-foreground">See what our happy customers have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-2xl bg-secondary/20 border border-secondary hover:border-primary/20 transition-all">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  "Absolutely fantastic service. The technician arrived on time, was polite, and fixed my refrigerator in under an hour. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div>
                    <div className="font-bold">Customer Name</div>
                    <div className="text-xs text-muted-foreground">Local Resident</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
