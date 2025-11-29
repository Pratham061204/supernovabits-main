// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { NavLink } from "@/components/NavLink";
// import { Calendar, MapPin, Clock, Users } from "lucide-react";

// interface Event {
//   id: number;
//   title: string;
//   date: string;
//   time: string;
//   location: string;
//   description: string;
//   details: string;
//   capacity: string;
//   featured?: boolean;
// }

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

//   const upcomingEvents: Event[] = [
//     {
//       id: 1,
//       title: "Mohammed Bin Rashid Space Centre Visit",
//       date: "Date TBD",
//       time: "To be announced",
//       location: "Mohammed Bin Rashid Space Centre",
//       description:
//         "A guided tour and Q&A with researchers at a space tracking facility.",
//       details:
//         "Join us for an exclusive behind-the-scenes tour of an ISS tracking facility. Meet with aerospace engineers and researchers, learn about real-time satellite tracking, and discover how the ISS orbits Earth. This rare opportunity includes hands-on demonstrations and a Q&A session with space experts. Limited spots available!",
//       capacity: "25 members",
//       featured: false,
//     },
//     {
//       id: 2,
//       title: "Stargazing",
//       date: "Date TBD",
//       time: "To be announced",
//       location: "Al Qudra",
//       description: "Telescopes, constellations, and astrophotography tips.",
//       details:
//         "Our signature monthly event! Bring your curiosity as we set up high-powered telescopes to observe planets, nebulae, and distant galaxies. Learn to identify constellations, understand celestial navigation, and capture stunning astrophotography. Our experienced members will guide you through telescope operation and share fascinating facts about the objects you're viewing.",
//       capacity: "100 participants",
//       featured: false,
//     },
  
//   ];

//   const pastEvents = [
//     {
//       title: "ISRO Scientist Talk – Dr. P. V. Venkitakrishnan",
//       date: "November 2024",
//       description: "A technical and inspiring session by Dr. P. V. Venkitakrishnan from ISRO, where he shared insights into satellite engineering, material science, and India’s advancements in space missions.",
//     },
//     {
//       title: "National Hackathon",
//       date: "October 2025",
//       description: "Supernova Club hosted a national-level space hackathon as part of World Space Week, attracting students from all seven emirates and showcasing ground-breaking innovation and problem-solving in space and AI domains",
//     },
//     {
//       title: "Blue Origin Talk",
//       date: "October 2024",
//       description: "A special interaction with experts from Blue Origin discussing reusable rockets, commercial spaceflight, and future opportunities in the private space industry.",
//     },
//     {
//       title: "Stargazing Event at Al Qudra Lake",
//       date: "March 2025",
//       description: "A guided stargazing session at Al Qudra Lake where participants observed Jupiter, its moons, star clusters, and explored the night sky through telescopes under clear desert skies.",
//     },
//     {
//       title: "NASA Scientist Talk – Dr. Antony Jeevarajan",
//       date: "November 2023",
//       description: "An insightful session by NASA’s Dr. Antony Jeevarajan, providing perspectives on human spaceflight, biomedical challenges in space, and career pathways in international space research.",
//     },
//     {
//       title: "Nambi Narayanan Talk",
//       date: "March 2023",
//       description: "A prestigious session with Padma Bhushan Nambi Narayanan, sharing his journey in developing India’s early cryogenic rocket engines and lessons in resilience and innovation.",
//     },
    
//   ];

//   return (
//     <div className="min-h-screen px-4 py-12">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             From stargazing nights to hackathons, join us in exploring the cosmos
//             and pushing the boundaries of space technology.
//           </p>
//         </div>

//         {/* Featured Events */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {upcomingEvents.map((event, index) => (
//               <Card
//                 key={event.id}
//                 className={`bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer animate-fade-in-up ${
//                   event.featured ? "md:col-span-2 lg:col-span-1" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//                 onClick={() => setSelectedEvent(event)}
//               >
//                 <CardHeader>
//                   {event.featured && (
//                     <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2 w-fit">
//                       Featured Event
//                     </div>
//                   )}
//                   <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <Calendar className="h-4 w-4 text-primary" />
//                     <span>{event.date}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <Clock className="h-4 w-4 text-primary" />
//                     <span>{event.time}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <MapPin className="h-4 w-4 text-primary" />
//                     <span>{event.location}</span>
//                   </div>
//                   <p className="text-muted-foreground pt-2">{event.description}</p>
//                   <Button
//                     variant="outline"
//                     className="w-full border-primary hover:bg-primary/10 mt-4"
//                   >
//                     View Details
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* Past Events */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold mb-8">Past Events</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {pastEvents.map((event, index) => (
//               <Card
//                 key={index}
//                 className="bg-secondary border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 <CardContent className="p-6">
//                   <div className="flex items-start justify-between mb-2">
//                     <h3 className="font-semibold text-lg">{event.title}</h3>
//                     <span className="text-sm text-muted-foreground">{event.date}</span>
//                   </div>
//                   <p className="text-muted-foreground">{event.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="text-center">
//           <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
//             <CardContent className="p-12">
//               <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
//               <h2 className="text-3xl font-bold mb-4">Join Upcoming Events</h2>
//               <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//                 Be part of our cosmic community. Register now to receive updates
//                 about upcoming events and exclusive opportunities.
//               </p>
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground"
//               >
//                 <NavLink to="/contact">Get Notified</NavLink>
//               </Button>
//             </CardContent>
//           </Card>
//         </section>
//       </div>

//       {/* Event Details Modal */}
//       <Dialog
//         open={!!selectedEvent}
//         onOpenChange={() => setSelectedEvent(null)}
//       >
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-2xl">{selectedEvent?.title}</DialogTitle>
//             <DialogDescription className="space-y-4 pt-4">
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Calendar className="h-4 w-4 text-primary" />
//                   <span>{selectedEvent?.date}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Clock className="h-4 w-4 text-primary" />
//                   <span>{selectedEvent?.time}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-4 w-4 text-primary" />
//                   <span>{selectedEvent?.location}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users className="h-4 w-4 text-primary" />
//                   <span>{selectedEvent?.capacity}</span>
//                 </div>
//               </div>
//               <p className="text-foreground leading-relaxed pt-2">
//                 {selectedEvent?.details}
//               </p>
//               <Button
//                 asChild
//                 className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//               >
//                 <NavLink to="/contact">Register Interest</NavLink>
//               </Button>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Events;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NavLink } from "@/components/NavLink";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  details: string;
  capacity: string;
  featured?: boolean;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Mohammed Bin Rashid Space Centre Visit",
      date: "Date TBD",
      time: "To be announced",
      location: "Mohammed Bin Rashid Space Centre",
      description:
        "A guided tour and Q&A with researchers at a space tracking facility. Meet with aerospace engineers and researchers, learn about real-time satellite tracking.",
      details: "",
      capacity: "25 members",
      featured: false,
    },
    {
      id: 2,
      title: "Community Stargazing Night",
      date: "Date TBD",
      time: "TBD",
      location: "Al Qudra",
      description: "Telescopes, constellations, and astrophotography tips.Our signature event! Bring your curiosity as we set up high-powered telescopes to observe planets, nebulae, and distant galaxies. Learn to identify constellations, understand celestial navigation, and capture stunning astrophotography. Our experienced members will guide you through telescope operation and share fascinating facts about the objects you're viewing.",
      details:
        "Our signature Date TBD event! Bring your curiosity as we set up high-powered telescopes to observe planets, nebulae, and distant galaxies. Learn to identify constellations, understand celestial navigation, and capture stunning astrophotography. Our experienced members will guide you through telescope operation and share fascinating facts about the objects you're viewing. Weather permitting, we'll also have a campfire session with hot chocolate and space stories. Perfect for beginners and experienced astronomers alike!",
      capacity: "Open to all",
      featured: false,
    },
  ];

const pastEvents = [
    {
      title: "ISRO Scientist Talk – Dr. P. V. Venkitakrishnan",
      date: "November 2024",
      description: "A technical and inspiring session by Dr. P. V. Venkitakrishnan from ISRO, where he shared insights into satellite engineering, material science, and India’s advancements in space missions.",
    },
    {
      title: "National Hackathon",
      date: "October 2025",
      description: "Supernova Club hosted a national-level space hackathon as part of World Space Week, attracting students from all seven emirates and showcasing ground-breaking innovation and problem-solving in space and AI domains",
    },
    {
      title: "Blue Origin Talk",
      date: "October 2024",
      description: "A special interaction with experts from Blue Origin discussing reusable rockets, commercial spaceflight, and future opportunities in the private space industry.",
    },
    {
      title: "Stargazing Event at Al Qudra Lake",
      date: "March 2025",
      description: "A guided stargazing session at Al Qudra Lake where participants observed Jupiter, its moons, star clusters, and explored the night sky through telescopes under clear desert skies.",
    },
    {
      title: "NASA Scientist Talk – Dr. Antony Jeevarajan",
      date: "November 2023",
      description: "An insightful session by NASA’s Dr. Antony Jeevarajan, providing perspectives on human spaceflight, biomedical challenges in space, and career pathways in international space research.",
    },
    {
      title: "Nambi Narayanan Talk",
      date: "March 2023",
      description: "A prestigious session with Padma Bhushan Nambi Narayanan, sharing his journey in developing India’s early cryogenic rocket engines and lessons in resilience and innovation.",
    },
    
  ];

 
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From stargazing nights to hackathons, join us in exploring the cosmos
            and pushing the boundaries of space technology.
          </p>
        </div>

        {/* Featured Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted-foreground pt-2">{event.description}</p>
                  {event.id === 1 ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary hover:bg-primary/10 mt-4"
                    >
                      <a
                        href="https://forms.gle/MyhYDT6urFWWS1EMA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register Interest
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-primary opacity-50 cursor-not-allowed mt-4"
                      disabled
                    >
                      Registration link coming soon
                    </Button>
                  )}

                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-secondary border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        {/* <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-12">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Join Upcoming Events</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of our cosmic community. Register now to receive updates
                about upcoming events and exclusive opportunities.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <NavLink to="/contact">Get Notified</NavLink>
              </Button>
            </CardContent>
          </Card>
        </section> */}
      </div>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedEvent?.title}</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{selectedEvent?.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{selectedEvent?.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{selectedEvent?.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{selectedEvent?.capacity}</span>
                </div>
              </div>
              <p className="text-foreground leading-relaxed pt-2">
                {selectedEvent?.details}
              </p>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <NavLink to="/contact">Register Interest</NavLink>
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
