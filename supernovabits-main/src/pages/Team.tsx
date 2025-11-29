// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import souri from "@/assets/faculty/souri.jpg";
// import kk from "@/assets/faculty/kk.jpg";
// import rushi from "@/assets/core/President_.jpg";
// import sachi from "@/assets/core/sachi.jpg";
// import naman from "@/assets/core/Gen sec.jpg";
// import anindy from "@/assets/core/Treasurer_Anindy.jpg";
// import pratham from "@/assets/heads/pratham.jpg";
// import chaitanya from "@/assets/heads/ChaitanyaDahiya_Head.jpg";
// import manasi from "@/assets/heads/Manasi Bagga_MgmtHead.jpg";
// import chhavi from "@/assets/heads/head.jpeg";
// import kaveri from "@/assets/heads/IMG-20251117-WA0002.jpg";
// import priya from "@/assets/Events/Priyadarshini_Events.jpg";
// import shayna from "@/assets/Events/Shayna_events.jpg";
// import shriya from "@/assets/Events/shriya_events_.jpg";
// import shalini from "@/assets/Creative/shalini.jpg";
// import meher from "@/assets/Creative/meher.jpg";
// import sonal from "@/assets/Creative/sonal_pic.jpeg";
// import kahini from "@/assets/Management/kahini.jpg";
// import abhai from "@/assets/Management/abhai.jpg";
// import prisha from "@/assets/Management/prisha.jpg";
// import sai from "@/assets/Management/sai.jpg";
// import tanvi from "@/assets/Management/Tanvi Verma_mgmtExecutive.jpeg";


// interface TeamMember {
//   name: string;
//   role: string;
//   funFact: string;
//   image: string;
// }

// interface TeamSection {
//   title: string;
//   members: TeamMember[];
//   cardSize?: "large" | "small";
// }

// const Team = () => {
//   const [hoveredMember, setHoveredMember] = useState<string | null>(null);

//   const teamSections: TeamSection[] = [
//     {
//       title: "Faculty in Charge",
//       cardSize: "large",
//       members: [
//         {
//           name: "Souri Banerjee",
//           role: "Director of BPDC",
//           funFact: "Pioneered multiple research collaborations in astrophysics.",
//           image: souri,
//         },
//         {
//           name: "Dr. KK Singh",
//           role: "Faculty Incharge",
//           funFact: "Discovered 3 new variable stars during PhD research.",
//           image: kk,
//         },
//       ],
//     },
//     {
//       title: "Core Team",
//       cardSize: "large",
//       members: [
//         {
//           name: "Rushirajsinh Solanki",
//           role: "President",
//           funFact: "Has photographed over 50 deep-sky objects!",
//           image: rushi,
//         },
//         {
//           name: "Sachi Patel",
//           role: "Vice President",
//           funFact: "Can name all 88 constellations from memory.",
//           image: sachi,
//         },
//         {
//           name: "Naman Chawla",
//           role: "General Secretary",
//           funFact: "Has attended 15 international astronomy conferences.",
//           image: naman,
//         },
//         {
//           name: "Anindy Sharma",
//           role: "Treasurer",
//           funFact: "Helped secure funding for our first telescope!",
//           image: anindy,
//         },
//       ],
//     },
//     {
//       title: "Heads",
//       cardSize: "large",
//       members: [
//         {
//           name: "Chaitanya Dahiya",
//           role: "Managemnent Head",
//           funFact: "Built a satellite tracker from scratch.",
//           image: chaitanya,
//         },
//         {
//           name: "Manasi Bagga",
//           role: "Marketing Head",
//           funFact: "Designed our logo inspired by cosmic ripples.",
//           image: manasi,
//         },
//         {
//           name: "Chhavi",
//           role: "Creative Head",
//           funFact: "Published a paper on exoplanet detection at 19.",
//           image: chhavi,
//         },
//         {
//           name: "Kaveri Pathak",
//           role: "Events Head",
//           funFact: "Inspired over 1000 students through astronomy workshops.",
//           image: kaveri,
//         },
//         {
//           name: "Pratham Chanchlani",
//           role: "Technical Head",
//           funFact: "Created a mobile app for real-time ISS tracking.",
//           image: pratham,
//         },
//       ],
//     },
//     {
//       title: "Executives",
//       cardSize: "small",
//       members: [
//         { name: "Priyadarshini Mandelia", role: "Events Executive", funFact: "Can explain black holes to anyone!", image: priya },
//         { name: "Shayna Singh", role: "Events Executive", funFact: "Built a planetarium app at 17.", image: shayna },
//         { name: "Shriya Khivasara", role: "Events Executive", funFact: "Organized 20+ stargazing events.", image: shriya },
//         { name: "Saanvi Dutta", role: "Creative Executive", funFact: "Designed posters for NASA competitions.", image: meher },
//         { name: "Shalini Reddy", role: "Creative Executive", funFact: "Grew our following to 10k in 6 months!", image: shalini },
//         { name: "Sonal", role: "Creative Executive", funFact: "Never missed a single club meeting.", image: sonal },
//         { name: "Abhai Anilkumar", role: "Management Executive", funFact: "Won national astrophotography competition.", image: abhai },
//         { name: "T. Sai Harika", role: "Management Executive", funFact: "Taught 500+ students about telescopes.", image: sai },
//         { name: "Tanvi Verma", role: "Management Executive", funFact: "Can set up a telescope in under 5 minutes.", image: tanvi },
//         { name: "Kahini Desai", role: "Management Executive", funFact: "Raised ₹2 lakhs for new equipment!", image: kahini },
//         { name: "Prisha", role: "Management Executive", funFact: "Working on asteroid detection project.", image: prisha },
//         { name: "Sritajana", role: "Documentation Executive", funFact: "Maintains our 5-year activity database.", image: "/placeholder.svg" },
//         { name: "Kamya Chandebhamar", role: "Marketing Executive", funFact: "Created viral astronomy meme series.", image: "/placeholder.svg" },
//         { name: "Kokku Sravant", role: "Member Relations Executive", funFact: "Knows every member's favorite constellation.", image: "/placeholder.svg" },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen px-4 py-12">
//       <div className="container mx-auto">

//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             The passionate individuals behind Supernova Astronomy Club, dedicated to making space exploration accessible to everyone.
//           </p>
//         </div>

//         {teamSections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="mb-20">

//             <h2 className="text-3xl font-bold text-center mb-10 animate-fade-in">
//               {section.title}
//             </h2>

//             <div
//               className={`grid gap-8 mb-12 ${
//                 section.cardSize === "small"
//                   ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//                   : section.title === "Faculty in Charge"
//                   ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
//                   : section.title === "Core Team"
//                   ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
//                   : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//               }`}
//             >
//               {section.members.map((member, index) => (
//                 <Card
//                   key={`${sectionIndex}-${index}`}
//                   className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group animate-fade-in-up cursor-pointer"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                   onMouseEnter={() => setHoveredMember(`${sectionIndex}-${index}`)}
//                   onMouseLeave={() => setHoveredMember(null)}
//                 >
//                   <CardContent className="p-0">

//                     {/* Image */}
//                     <div className="relative bg-secondary overflow-hidden aspect-square">
//                       <img
//                         src={member.image}
//                         alt={`${member.name} - ${member.role}`}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                       />

//                       {/* Fun Fact Hover */}
//                       <div
//                         className={`absolute inset-0 bg-primary/95 flex items-center justify-center p-4 transition-opacity duration-300 ${
//                           hoveredMember === `${sectionIndex}-${index}`
//                             ? "opacity-100"
//                             : "opacity-0"
//                         }`}
//                       >
//                         <div className="text-center">
//                           <p className="font-semibold text-primary-foreground mb-2 text-sm">
//                             Fun Fact
//                           </p>
//                           <p className="text-primary-foreground text-sm">
//                             {member.funFact}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Name + Role Only */}
//                     <div className={section.cardSize === "small" ? "p-4" : "p-6"}>
//                       <h3 className="font-semibold mb-1 text-xl">
//                         {member.name}
//                       </h3>
//                       <p className="text-primary font-medium text-sm">
//                         {member.role}
//                       </p>
//                     </div>

//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Team;

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import souri from "@/assets/faculty/souri.jpg";
import kk from "@/assets/faculty/kk.jpg";

import rushi from "@/assets/core/President_.jpg";
import sachi from "@/assets/core/sachi.jpg";
import naman from "@/assets/core/Gen sec.jpg";
import anindy from "@/assets/core/Treasurer_Anindy.jpg";

import pratham from "@/assets/heads/pratham.jpg";
import chaitanya from "@/assets/heads/chaitanya.jpg";
import manasi from "@/assets/heads/Manasi Bagga_MgmtHead.jpg";
import chhavi from "@/assets/heads/head.jpeg";
import kaveri from "@/assets/heads/IMG-20251117-WA0002.jpg";

import priya from "@/assets/Events/Priyadarshini_Events.jpg";
import shayna from "@/assets/Events/Shayna_events.jpg";
import shriya from "@/assets/Events/shriya_events_.jpg";

import shalini from "@/assets/Creative/shalini.jpg";
import meher from "@/assets/Creative/meher.jpg";
import sonal from "@/assets/Creative/sonal_pic.jpeg";

import kahini from "@/assets/Management/kahini.jpg";
import abhai from "@/assets/Management/abhai.jpg";
import prisha from "@/assets/Management/prisha.jpg";
import sai from "@/assets/Management/sai.jpg";
import tanvi from "@/assets/Management/Tanvi Verma_mgmtExecutive.jpeg";

import kamya from "@/assets/Marketing/Kamya_Executive.webp";
import sritajana from "@/assets/Marketing/srijatana.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
  cardSize?: "large" | "small";
}

const Team = () => {
  const teamSections: TeamSection[] = [
    {
      title: "Faculty in Charge",
      cardSize: "large",
      members: [
        {
          name: "Souri Banerjee",
          role: "Director of BPDC",
          image: souri,
        },
        {
          name: "Dr. KK Singh",
          role: "Faculty Incharge",
          image: kk,
        },
      ],
    },
    {
      title: "Core Team",
      cardSize: "large",
      members: [
        { name: "Rushirajsinh Solanki", role: "President", image: rushi },
        { name: "Sachi Patel", role: "Vice President", image: sachi },
        { name: "Naman Chawla", role: "General Secretary", image: naman },
        { name: "Anindy Sharma", role: "Treasurer", image: anindy },
      ],
    },
    {
      title: "Heads",
      cardSize: "large",
      members: [
        { name: "Chaitanya Dahiya", role: "Management Head", image: chaitanya },
        { name: "Manasi Bagga", role: "Marketing Head", image: manasi },
        { name: "Chhavi", role: "Creative Head", image: chhavi },
        { name: "Kaveri Pathak", role: "Events Head", image: kaveri },
        { name: "Pratham Chanchlani", role: "Technical Head", image: pratham },
      ],
    },
    {
      title: "Executives",
      cardSize: "small",
      members: [
        { name: "Priyadarshini Mandelia", role: "Events Executive", image: priya },
        { name: "Shayna Singh", role: "Events Executive", image: shayna },
        { name: "Shriya Khivasara", role: "Events Executive", image: shriya },
        { name: "Shalini Reddy", role: "Creative Executive", image: shalini },
        { name: "Sonal", role: "Creative Executive", image: sonal },
        { name: "Abhai Anilkumar", role: "Management Executive", image: abhai },
        { name: "T. Sai Harika", role: "Management Executive", image: sai },
        { name: "Tanvi Verma", role: "Management Executive", image: tanvi },
        { name: "Kahini Desai", role: "Management Executive", image: kahini },
        { name: "Prisha", role: "Management Executive", image: prisha },
        { name: "Sritajana", role: "Marketing Executive", image: sritajana },
        { name: "Kamya Chandebhamar", role: "Marketing Executive", image: kamya },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Supernova Astronomy Club.
          </p>
        </div>

        {/* Sections */}
        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
              {section.title}
            </h2>

           <div
              className={`grid gap-8 mb-12 ${
                section.cardSize === "small"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : section.title === "Faculty in Charge"
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                  : section.title === "Core Team"
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                  : section.title === "Heads"
                  ? "grid-cols-1 md:grid-cols-6 max-w-6xl mx-auto [&>*:nth-child(-n+3)]:md:col-span-2 [&>*:nth-child(4)]:md:col-start-2 [&>*:nth-child(4)]:md:col-span-2 [&>*:nth-child(5)]:md:col-span-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
              >
              {section.members.map((member, index) => (
                <Card
                  key={`${sectionIndex}-${index}`}
                  className="bg-card border-border transition-all duration-200 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="bg-secondary overflow-hidden aspect-square">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className={section.cardSize === "small" ? "p-4" : "p-6"}>
                      <h3 className="font-semibold mb-1 text-xl">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Team;
