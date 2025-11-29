import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import StarfieldBackground from "./StarfieldBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StarfieldBackground />
      <Navigation />
      <main className="relative z-10 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
