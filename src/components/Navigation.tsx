import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Close mobile menu and scroll to top when route changes
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "my work", path: "/projects" },
    { name: "creative", path: "/creative" },
    { name: "contact", path: "/contact" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () =>
      window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[188px] py-12 sm:py-10 md:py-10 lg:py-12 transition-transform duration-300 ${
          isVisible || isOpen
            ? "translate-y-0"
            : "-translate-y-full"
        } ${isOpen ? "md:translate-y-0" : ""}`}
      >
        <div
          className={`absolute inset-0 bg-[#261E35] md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-[#c4a9ff]/10 md:border-none -z-10 ${isOpen ? "md:bg-transparent" : ""}`}
        />
        <div
          className={`flex items-center justify-between relative z-10 ${isOpen ? "md:flex" : ""}`}
        >
          {/* Logo/Name */}
          <Link
            to="/"
            className="font-['Outfit',sans-serif] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#ede6f7] tracking-[2px] uppercase hover:text-[#C4A9FF] active:text-[#C4A9FF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Inge Westerhoff
          </Link>

          {/* Mobile hamburger menu button - only visible on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#C4A9FF] active:text-[#C4A9FF] active:scale-95 transition-all z-[10002]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            ) : (
              <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
            )}
          </button>

          {/* Desktop Navigation - only visible on desktop/tablet */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-['Outfit',sans-serif] text-[16px] lg:text-[20px] leading-[27.5px] transition-colors ${
                  location.pathname === item.path
                    ? "text-[#C4A9FF]"
                    : "text-[#ede6f7] hover:text-[#C4A9FF] active:text-[#C4A9FF]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Fullscreen Menu - only visible on mobile when open - positioned as sibling to avoid transform context issues */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#261E35] z-[10001] flex flex-col items-center justify-center">
          {/* Close button in top right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 text-white hover:text-[#C4A9FF] transition-colors"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>

          <nav className="flex flex-col gap-10 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-['Outfit',sans-serif] text-[32px] transition-colors ${
                  location.pathname === item.path
                    ? "text-[#C4A9FF]"
                    : "text-white hover:text-[#C4A9FF]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}