"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ExternalLink, Crown, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
  isHighlight?: boolean;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "HOME", href: "/" },
    { name: "CLASSROOM", href: "https://app.chesslang.com", isExternal: true },
    { name: "EVENTS", href: "/events" },
    { name: "COURSES", href: "/courses" },
    { name: "OUR COACHES", href: "/coaches" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 font-sans transition-all duration-300">
      
      {/* --- TOP ANNOUNCEMENT BAR --- */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-auto bg-slate-950 text-white py-2 border-b border-slate-800"}`}>
        <div className="container mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-between items-center text-xs font-semibold">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-3 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider shadow-sm">
              <Crown className="w-3.5 h-3.5 text-amber-400" /> FIDE Certified Club
            </span>
            <a href="tel:+919864646481" className="flex items-center hover:text-emerald-400 transition-colors font-bold">
              <Phone className="w-3 h-3 mr-1.5 text-amber-400" /> +91 9864646481
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="mailto:telanganachessclub@gmail.com" className="hidden sm:flex items-center hover:text-emerald-400 transition-colors font-bold">
              <Mail className="w-3 h-3 mr-1.5 text-emerald-400" /> telanganachessclub@gmail.com
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-3 font-black text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Admissions Open 2026
            </span>
            <span className="text-slate-700">•</span>
            <Link href="/quick-pay" className="hover:text-amber-300 transition-colors flex items-center gap-1 font-black text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/40">
              <Sparkles className="w-3 h-3 text-amber-400" /> Quick Fee Payment
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN GLASS NAVIGATION BAR --- */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white/98 backdrop-blur-2xl shadow-xl shadow-slate-950/10 border-b border-slate-200 py-3" : "bg-white/90 backdrop-blur-xl py-4 border-b border-slate-200"}`}>
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full p-0.5 bg-gradient-to-tr from-emerald-500 via-teal-500 to-amber-500 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                <Image
                  src="/logo.jpg"
                  alt="Telangana Chess Club Logo"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-black text-slate-950 tracking-tight whitespace-nowrap group-hover:text-emerald-600 transition-colors uppercase">
                Telangana Chess Club
              </span>
              <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase -mt-0.5 hidden sm:block">
                FIDE Certified Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.isExternal) {
                return (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-all flex items-center gap-1 border border-transparent"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "text-slate-800 hover:text-emerald-700 hover:bg-emerald-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <div 
        className={`fixed inset-x-0 top-[115px] bg-white/98 backdrop-blur-2xl border-t border-slate-200 shadow-2xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 space-y-2 overflow-y-auto max-h-[75vh]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                pathname === item.href
                  ? "bg-amber-50 text-amber-900 border border-amber-200"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              <span>{item.name}</span>
              {item.isExternal ? <ExternalLink className="w-4 h-4 text-amber-600 opacity-80" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
            </Link>
          ))}
          
          <div className="pt-5 mt-4 border-t border-slate-200 grid grid-cols-2 gap-3">
             <a href="tel:+919864646481" className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-colors">
                <Phone className="w-4 h-4 mb-1 text-amber-600" />
                <span>Call Desk</span>
             </a>
             <a href="mailto:telanganachessclub@gmail.com" className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                <Mail className="w-4 h-4 mb-1 text-emerald-600" />
                <span>Email Desk</span>
             </a>
          </div>
        </div>
      </div>
    </header>
  );
}
