import { Instagram, Linkedin, Mail } from "lucide-react";
import { NavLink } from "./NavLink";
import logo from "@/assets/Supernova Transparentbg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Supernova Logo" className="h-10 w-10" />
              <span className="text-lg font-semibold">SUPERNOVA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Exploring the night sky, together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Events
              </NavLink>
              <NavLink
                to="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </NavLink>
              <NavLink
                to="/team"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Team
              </NavLink>
              <NavLink
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/company/supernova-the-astronomy-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/supernova_bpdc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:supernova.club@dubai.bits-pilani.ac.in"
                className="p-2 bg-secondary hover:bg-primary transition-colors rounded-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <a
              href="mailto:supernova.club@dubai.bits-pilani.ac.in"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              supernova.club@dubai.bits-pilani.ac.in
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
