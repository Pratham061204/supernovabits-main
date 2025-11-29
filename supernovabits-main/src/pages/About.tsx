import { Card, CardContent } from "@/components/ui/card";
import { Telescope, Lightbulb, Globe, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Telescope className="h-8 w-8" />,
      title: "Curiosity-Driven",
      description:
        "We believe in the power of questions and the pursuit of cosmic knowledge.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "Pushing boundaries through space-tech projects and creative problem-solving.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Community",
      description:
        "Building a welcoming space for all astronomy enthusiasts, from beginners to experts.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "Striving for the highest standards in our observations, research, and events.",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Club Founded",
      description: "Started with 5 passionate members.",
    },
    {
      year: "2024",
      title: "First Hackathon",
      description:
        "Launched the annual Supernova Hackathon with 50+ participants.",
    },
    {
      year: "2024",
      title: "Space Agency Partnership",
      description:
        "Secured partnership with space tracking facility for exclusive visits.",
    },
    {
      year: "2025",
      title: "100+ Members",
      description:
        "Grew to a thriving community of over 100 active astronomy enthusiasts.",
    },
  ];

  const partners = [
    "NASA Space Apps",
    "International Astronomical Union",
    "Space Foundation",
    "University Observatory Network",
    "Astronomical Society",
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Supernova</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a community of space enthusiasts dedicated to exploring the
            cosmos through observation, education, and innovation.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                Supernova Astronomy Club exists to inspire curiosity about the
                universe and provide hands-on opportunities for members to engage
                with astronomy and space science. Through stargazing events,
                educational workshops, hackathons, and facility visits, we foster a
                community where passionate individuals can learn, collaborate, and
                push the boundaries of space exploration together.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What Members Learn */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">What You'll Learn</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Join us and develop skills that span observational astronomy to
            cutting-edge space technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Observational Astronomy
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Telescope operation & maintenance</li>
                  <li>• Constellation identification</li>
                  <li>• Celestial navigation techniques</li>
                  <li>• Sky mapping and star charts</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  CubeSats and spacecraft design
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Satellite Subsystem Design</li>
                  <li>• Mission Planning & Systems Engineering</li>
                  <li>• Orbital Mechanics & Space Environment</li>
                  <li>• Simulation & Modeling of CubeSat Systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Space Data Science
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Working with NASA datasets</li>
                  <li>• Satellite data analysis</li>
                  <li>• Astronomical data visualization</li>
                  <li>• Space mission simulations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-bold text-primary">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <Card className="flex-1 bg-card border-border hover:border-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
};

export default About;
