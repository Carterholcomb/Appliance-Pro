import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import fridgeImage from "@assets/generated_images/refrigerator_repair_close_up.png";
import washerDryerImage from "@assets/generated_images/modern_washer_and_dryer_set_repair.png";

export default function Services() {
  const services = [
    {
      title: "Refrigerator Repair",
      description: "Is your fridge not cooling? Leaking water? We fix compressors, thermostats, door seals, and ice makers.",
      image: fridgeImage,
      features: ["Temperature Issues", "Water Leaks", "Ice Maker Repair", "Compressor Replacement"]
    },
    {
      title: "Washer & Dryer Repair",
      description: "Stop the leaks and loud noises. We repair spin cycles, drainage issues, and electronic controls for laundry sets.",
      image: washerDryerImage,
      features: ["No Heat / No Spin", "Water Drainage", "Loud Noises", "Leak Repair"]
    },
    {
      title: "Oven & Stove Repair",
      description: "Gas or electric, we handle it all. From uneven heating to broken igniters and door hinges.",
      image: null,
      features: ["Uneven Heating", "Broken Igniters", "Door Repairs", "Control Board Issues"]
    },
    {
      title: "Dishwasher Repair",
      description: "Dishes coming out dirty? We repair pumps, spray arms, and drainage systems.",
      image: null,
      features: ["Not Draining", "Poor Cleaning", "Leaking", "Door Latch Issues"]
    },
    {
      title: "Microwave Repair",
      description: "Built-in or countertop, we can fix heating issues, turntables, and control panels.",
      image: null,
      features: ["Not Heating", "Turntable Broken", "Sparking", "Keypad Issues"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="bg-secondary/30 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive repair solutions for all your home appliances. We service all major brands and models in Tampa Bay.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-muted relative overflow-hidden">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold font-display">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/book">Book Repair</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Don't see your problem listed?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We likely fix it! Give us a call to discuss your specific appliance issue.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white" asChild>
              <a href="tel:813-862-5547">
                Call (813) 862-5547
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
