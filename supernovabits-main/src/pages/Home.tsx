import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Telescope, Users, Rocket, Calendar, ArrowRight } from "lucide-react";
import logo from "@/assets/Supernova Transparentbg.png";
import img1 from "@/assets/home_page/1.jpg";
import img2 from "@/assets/home_page/2.jpg"; 
import img3 from "@/assets/home_page/3.jpg";
import img4 from "@/assets/home_page/4.jpg"; 
import img5 from "@/assets/home_page/5.jpg"; 
import img6 from "@/assets/home_page/6.jpg"; 
import img7 from "@/assets/home_page/7.jpg"; 

const Home = () => {
  const activities = [
    {
      icon: <Telescope className="h-8 w-8" />,
      title: "Stargazing Nights",
      description:
        "Join us for monthly telescope sessions under the stars. Learn constellations and astrophotography.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Talks & Workshops",
      description:
        "Expert-led sessions on astronomy, space missions, and cosmic phenomena. Expand your knowledge.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Space Tech & Hackathons",
      description:
        "Build projects with space data, compete in challenges, and innovate with fellow space enthusiasts.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Radial gradient glow */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-40 pointer-events-none" />
        
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <img
            src={logo}
            alt="Supernova Logo"
            className="h-32 w-32 mx-auto mb-8 animate-scale-in"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            SUPERNOVA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 tracking-wide">
            Astronomy Club
          </p>
          <p className="text-lg md:text-xl text-accent mb-12 max-w-2xl mx-auto">
            Exploring the night sky, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px]"
            >
              <NavLink to="/events">
                Upcoming Events
                <Calendar className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10 min-w-[200px]"
            >
              <NavLink to="/contact">
                Join the Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What We Do
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From observing celestial objects to building space-tech projects, we
            bring together passionate astronomers and space enthusiasts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Moments from Our Journey
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Capturing the cosmos and our community in action.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Image 1 */}
            <div className="aspect-square rounded-lg border border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden">
              <img
                src={img2}
                alt="Gallery-1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Image 2 */}
            <div className="aspect-square rounded-lg border border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden">
              <img
                src={img4}
                alt="Gallery-3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Image 3 */}
            <div className="aspect-square rounded-lg border border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden">
              <img
                src={img5}
                alt="Gallery-3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Image 4 */}
            <div className="aspect-square rounded-lg border border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden">
              <img
                src={img7}
                alt="Gallery-5"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10"
            >
              <NavLink to="/events">View All Events</NavLink>
            </Button>
          </div>
        </div>
      </section>


      {/* CTA Section
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Explore the Universe?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join Supernova and connect with fellow space enthusiasts.
                Participate in stargazing nights, workshops, and hackathons.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <NavLink to="/contact">Get Started Today</NavLink>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
