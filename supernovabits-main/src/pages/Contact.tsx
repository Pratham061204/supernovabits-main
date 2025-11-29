// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Textarea } from "@/components/ui/textarea";
// // import { useToast } from "@/hooks/use-toast";
// // import { Mail, Linkedin, Instagram, MapPin } from "lucide-react";

// // const Contact = () => {
// //   const { toast } = useToast();
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);

// //     // Validate form
// //     if (!formData.name || !formData.email || !formData.message) {
// //       toast({
// //         title: "Error",
// //         description: "Please fill in all fields.",
// //         variant: "destructive",
// //       });
// //       setIsSubmitting(false);
// //       return;
// //     }

// //     // Email validation
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(formData.email)) {
// //       toast({
// //         title: "Error",
// //         description: "Please enter a valid email address.",
// //         variant: "destructive",
// //       });
// //       setIsSubmitting(false);
// //       return;
// //     }

// //     // TODO: Replace with actual form submission endpoint
// //     // For now, using mailto as fallback
// //     const mailtoLink = `mailto:supernova.club@example.com?subject=Message from ${encodeURIComponent(
// //       formData.name
// //     )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(
// //       formData.email
// //     )}`;

// //     window.location.href = mailtoLink;

// //     toast({
// //       title: "Success!",
// //       description: "Your message has been sent. We'll get back to you soon!",
// //     });

// //     // Reset form
// //     setFormData({ name: "", email: "", message: "" });
// //     setIsSubmitting(false);
// //   };

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   return (
// //     <div className="min-h-screen px-4 py-12">
// //       <div className="container mx-auto max-w-6xl">
// //         {/* Header */}
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //             Have questions? Want to join the club? We'd love to hear from you!
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //           {/* Contact Form */}
// //           <Card className="bg-card border-border animate-fade-in-up">
// //             <CardContent className="p-4 sm:p-8">
// //               <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div>
// //                   <Label htmlFor="name">Name</Label>
// //                   <Input
// //                     id="name"
// //                     name="name"
// //                     type="text"
// //                     placeholder="Your full name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     required
// //                     className="mt-2"
// //                   />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="email">Email</Label>
// //                   <Input
// //                     id="email"
// //                     name="email"
// //                     type="email"
// //                     placeholder="your.email@example.com"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                     className="mt-2"
// //                   />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="message">Message</Label>
// //                   <Textarea
// //                     id="message"
// //                     name="message"
// //                     placeholder="Tell us about yourself or ask us anything..."
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     required
// //                     className="mt-2 min-h-[150px]"
// //                   />
// //                 </div>
// //                 <Button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
// //                 >
// //                   {isSubmitting ? "Sending..." : "Send Message"}
// //                 </Button>
// //               </form>
// //               <p className="text-xs text-muted-foreground mt-4">
// //                 Note: This will open your email client. To connect a real form
// //                 backend, integrate with a service like Formspree or EmailJS.
// //               </p>
// //             </CardContent>
// //           </Card>

// //           {/* Contact Info */}
// //           <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
// //             {/* Email */}
// //             <Card className="bg-card border-border hover:border-primary transition-all duration-300">
// //               <CardContent className="p-4 sm:p-6">
// //                 <div className="flex items-start gap-4">
// //                   <div className="p-3 bg-primary/20 rounded-lg">
// //                     <Mail className="h-6 w-6 text-primary" />
// //                   </div>
// //                   <div className="min-w-0 flex-1">
// //                     <h3 className="font-semibold mb-2">Email Us</h3>
// //                     <a
// //                       href="mailto:supernova.club@example.com"
// //                       className="text-muted-foreground hover:text-primary transition-colors break-all text-sm sm:text-base"
// //                     >
// //                       supernova.club@example.com
// //                     </a>
// //                     <p className="text-sm text-muted-foreground mt-1">
// //                       We typically respond within 24-48 hours
// //                     </p>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Social Media */}
// //             <Card className="bg-card border-border hover:border-primary transition-all duration-300">
// //               <CardContent className="p-4 sm:p-6">
// //                 <h3 className="font-semibold mb-4">Follow Us</h3>
// //                 <div className="flex gap-4">
// //                   <a
// //                     href="https://linkedin.com"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
// //                   >
// //                     <Linkedin size={20} />
// //                     <span className="text-sm">LinkedIn</span>
// //                   </a>
// //                   <a
// //                     href="https://instagram.com"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
// //                   >
// //                     <Instagram size={20} />
// //                     <span className="text-sm">Instagram</span>
// //                   </a>
// //                 </div>
// //                 <p className="text-sm text-muted-foreground mt-4">
// //                   Stay updated with our latest events, photos, and cosmic
// //                   discoveries!
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             {/* Location */}
// //             <Card className="bg-card border-border hover:border-primary transition-all duration-300">
// //               <CardContent className="p-4 sm:p-6">
// //                 <div className="flex items-start gap-4">
// //                   <div className="p-3 bg-primary/20 rounded-lg">
// //                     <MapPin className="h-6 w-6 text-primary" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold mb-2">Visit Us</h3>
// //                     <p className="text-muted-foreground">
// //                       Campus Observatory
// //                       <br />
// //                       University Campus
// //                       <br />
// //                       Building XX, Room XXX
// //                     </p>
// //                     <p className="text-sm text-muted-foreground mt-2">
// //                       Open during events and by appointment
// //                     </p>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>

            
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { Mail, Linkedin, Instagram, MapPin } from "lucide-react";

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Validate form
//     if (!formData.name || !formData.email || !formData.message) {
//       toast({
//         title: "Error",
//         description: "Please fill in all fields.",
//         variant: "destructive",
//       });
//       setIsSubmitting(false);
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast({
//         title: "Error",
//         description: "Please enter a valid email address.",
//         variant: "destructive",
//       });
//       setIsSubmitting(false);
//       return;
//     }

//     // For now, using mailto as fallback
//     const mailtoLink = `mailto:supernova.club@dubai.bits-pilani.ac.in?subject=Message from ${encodeURIComponent(
//       formData.name
//     )}&body=${encodeURIComponent(
//       formData.message
//     )}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;

//     window.location.href = mailtoLink;

//     toast({
//       title: "Success!",
//       description: "Your message has been prepared in your email app.",
//     });

//     // Reset form
//     setFormData({ name: "", email: "", message: "" });
//     setIsSubmitting(false);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <div className="min-h-screen px-4 py-12">
//       <div className="container mx-auto max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Have questions? Want to join the club? We'd love to hear from you!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <Card className="bg-card border-border animate-fade-in-up">
//             <CardContent className="p-4 sm:p-8">
//               <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="mt-2"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="your.email@example.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="mt-2"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="message">Message</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Tell us about yourself or ask us anything..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="mt-2 min-h-[150px]"
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//               <p className="text-xs text-muted-foreground mt-4">
//                 Note: This opens your email client with a pre-filled email to{" "}
//                 <span className="font-medium">
//                   supernova.club@dubai.bits-pilani.ac.in
//                 </span>
//                 . For a real backend form, integrate a service like Formspree or
//                 EmailJS.
//               </p>
//             </CardContent>
//           </Card>

//           {/* Contact Info */}
//           <div
//             className="space-y-6 animate-fade-in-up"
//             style={{ animationDelay: "100ms" }}
//           >
//             {/* Email */}
//             <Card className="bg-card border-border hover:border-primary transition-all duration-300">
//               <CardContent className="p-4 sm:p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-primary/20 rounded-lg">
//                     <Mail className="h-6 w-6 text-primary" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="font-semibold mb-2">Email Us</h3>
//                     <a
//                       href="mailto:supernova.club@dubai.bits-pilani.ac.in"
//                       className="text-muted-foreground hover:text-primary transition-colors break-all text-sm sm:text-base"
//                     >
//                       supernova.club@dubai.bits-pilani.ac.in
//                     </a>
//                     <p className="text-sm text-muted-foreground mt-1">

//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Social Media */}
//             <Card className="bg-card border-border hover:border-primary transition-all duration-300">
//               <CardContent className="p-4 sm:p-6">
//                 <h3 className="font-semibold mb-4">Follow Us</h3>
//                 <div className="flex gap-4 flex-wrap">
//                   <a
//                     href="https://www.linkedin.com/company/supernova-the-astronomy-club/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
//                   >
//                     <Linkedin size={20} />
//                     <span className="text-sm">LinkedIn</span>
//                   </a>
//                   <a
//                     href="https://www.instagram.com/supernova_bpdc?igsh=aXNwanlydzl5NHlt"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
//                   >
//                     <Instagram size={20} />
//                     <span className="text-sm">Instagram</span>
//                   </a>
//                 </div>
//                 <p className="text-sm text-muted-foreground mt-4">
//                   Stay updated with our latest events, photos, and cosmic
//                   discoveries!
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Location */}
//             <Card className="bg-card border-border hover:border-primary transition-all duration-300">
//               <CardContent className="p-4 sm:p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-primary/20 rounded-lg">
//                     <MapPin className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-2">Visit Us</h3>
//                     <p className="text-muted-foreground">
//                       Supernova Astronomy Club
//                       <br />
//                       BITS Pilani, Dubai Campus
//                       <br />
//                       Dubai International Academic City, Dubai, UAE
//                     </p>
//                     <p className="text-sm text-muted-foreground mt-2">
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const mailtoLink = `mailto:supernova.club@dubai.bits-pilani.ac.in?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      formData.message
    )}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Success!",
      description: "Your message has been prepared in your email app.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to join the club? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <Card className="bg-card border-border animate-fade-in-up">
            <CardContent className="p-4 sm:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about yourself or ask us anything..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

            
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>

            {/* Email */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a
                      href="mailto:supernova.club@dubai.bits-pilani.ac.in"
                      className="text-muted-foreground hover:text-primary transition-colors break-all text-sm sm:text-base"
                    >
                      supernova.club@dubai.bits-pilani.ac.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://www.linkedin.com/company/supernova-the-astronomy-club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
                  >
                    <Linkedin size={20} />
                    <span className="text-sm">LinkedIn</span>
                  </a>

                  <a
                    href="https://www.instagram.com/supernova_bpdc?igsh=aXNwanlydzl5NHlt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
                  >
                    <Instagram size={20} />
                    <span className="text-sm">Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Location WITH HOVER TOOLTIP + CLICK TO GOOGLE MAPS */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-4 sm:p-6">

                <div className="flex items-start gap-4 relative">

                  {/* Icon Click + Hover Tooltip */}
                  <div className="relative group">

                    {/* On click → opens Google Maps */}
                    <a
                      href="https://maps.app.goo.gl/afX1bheeNjkuXsAZ6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-3 bg-primary/20 rounded-lg cursor-pointer">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </a>

                    {/* Hover Tooltip */}
                    <div
                      className="
                        absolute left-14 top-0
                        w-max bg-primary text-primary-foreground
                        text-xs sm:text-sm p-3 rounded-lg shadow-lg
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-200 z-20
                      "
                    >
                      BITS Pilani Dubai Campus <br />
                      Dubai International Academic City <br />
                      Dubai, UAE
                    </div>

                  </div>
                      
                  {/* Address (also clickable) */}
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>

                    <a
                      href="https://maps.app.goo.gl/afX1bheeNjkuXsAZ6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      Supernova Astronomy Club <br />
                      BITS Pilani, Dubai Campus <br />
                      Dubai International Academic City, Dubai, UAE
                    </a>
                  </div>

                </div>

              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
