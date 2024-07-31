import { Home, Info, PricingTable, MessageSquare } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <div>About Page</div>,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <PricingTable className="h-4 w-4" />,
    page: <div>Pricing Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];
