import {
  Linkedin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SiteFooterProps {
  customContent?: React.ReactNode;
}

export function SiteFooter({
  customContent,
}: SiteFooterProps = {}) {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 sm:py-14 md:py-16 border-t border-[#312545] bg-gradient-to-b from-[#261E35] to-[#1a1425]">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[188px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Left Column - Info & Links */}
          <div className="flex flex-col space-y-6 sm:space-y-7 md:space-y-8 px-2 sm:px-0">
            {/* Name and Tagline */}
            <div>
              <h2 className="font-['Outfit',sans-serif] font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#c4a9ff] tracking-[2.8px] sm:tracking-[3.2px] md:tracking-[3.6px] lg:tracking-[4px] uppercase leading-tight mb-2 sm:mb-3 drop-shadow-[0_0_20px_rgba(196,169,255,0.3)]">
                Inge Westerhoff
              </h2>
              <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#ede6f7]/80 leading-[22px] sm:leading-[24px] italic">
                UX/UI Designer
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 sm:gap-3">
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="font-['Outfit',sans-serif] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-[#e5daff] hover:text-[#c4a9ff] transition-colors duration-300 w-fit"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className="font-['Outfit',sans-serif] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-[#e5daff] hover:text-[#c4a9ff] transition-colors duration-300 w-fit"
              >
                My Work
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="font-['Outfit',sans-serif] font-bold text-[14px] sm:text-[15px] md:text-[16px] text-[#e5daff] hover:text-[#c4a9ff] transition-colors duration-300 w-fit"
              >
                Contact
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center gap-5 sm:gap-6">
              <a
                href="https://www.linkedin.com/in/inge-westerhoff"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-[#e5daff] hover:text-[#c4a9ff] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-[#c4a9ff]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-300" />
                <Linkedin className="relative h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a
                href="mailto:ingewesterhoff2002@gmail.com"
                className="group relative text-[#e5daff] hover:text-[#c4a9ff] transition-colors duration-300"
                aria-label="Email"
              >
                <div className="absolute inset-0 bg-[#c4a9ff]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-300" />
                <Mail className="relative h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </div>
          </div>

          {/* Right Column - Illustration Placeholder */}
          <div className="flex items-center justify-center px-2 sm:px-0">
            {customContent ? (
              customContent
            ) : (
              <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] aspect-square bg-[#312545]/30 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border border-[#312545]"></div>
            )}
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="flex justify-center pt-6 sm:pt-7 md:pt-8 border-t border-[#312545]">
          <p className="font-['Roboto',sans-serif] text-[13px] sm:text-[14px] text-[#ede6f7]/50 leading-[20px] sm:leading-[21px]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}