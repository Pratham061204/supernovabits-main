import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Supernova Transparentbg.png";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Supernova Astronomy Club Logo"
              className="h-12 w-12 transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-semibold tracking-wide hidden sm:block">
              SUPERNOVA
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                activeClassName="text-foreground after:scale-x-100"
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <NavLink to="/contact">Join the Club</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                  activeClassName="text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                asChild
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Join the Club
                </NavLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
