"use client";

import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Award, VideoIcon, BellIcon, Phone, Crown, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-5.jpg",
    "/hero.jpeg",
  ];

  const meetingLinks = [
    { label: "TCA MEETING", icon: VideoIcon, bg: "from-amber-600 to-orange-700", href: "https://meet.google.com/isn-hyzm-bdk" },
    { label: "START CALL", icon: Play, bg: "from-slate-800 to-slate-950", href: "https://meet.jit.si/TelanganaChessClub" },
    { label: "G-MEET", icon: Play, bg: "from-emerald-600 to-teal-800", href: "https://meet.google.com/nhx-mfzc-fsi" },
    { label: "BCA MEETING", icon: Sparkles, bg: "from-blue-700 to-indigo-800", href: "https://meet.google.com/mwk-zhcq-fts" },
    { label: "HCI MEETING", icon: BellIcon, bg: "from-purple-700 to-violet-900", href: "https://meet.google.com/azx-brjh-ccv" },
    { label: "COACH NARESH DESK", icon: Phone, bg: "from-amber-700 to-amber-900", href: "https://meet.google.com/aoq-xcnz-mwx" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white bg-hero-aura overflow-hidden font-sans pt-36 pb-20">

      {/* Dynamic Background Subtle Ambient Lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[55%] h-[55%] bg-emerald-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-amber-200/30 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-teal-100/20 rounded-full blur-[160px]" />
        
        {/* Subtle Decorative Chess Pieces Watermark */}
        <div className="absolute top-20 right-10 opacity-[0.05] text-emerald-950 text-9xl font-serif pointer-events-none select-none">
          ♔
        </div>
        <div className="absolute bottom-20 left-10 opacity-[0.05] text-amber-900 text-9xl font-serif pointer-events-none select-none">
          ♘
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">

            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://wa.me/919864646481" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-950 text-xs font-black tracking-wide uppercase shadow-md hover:bg-amber-100 transition-all hover:scale-105"
              >
                <Crown className="w-4 h-4 text-amber-600" />
                <span>Whatsapp Official: +91 98 64 64 64 81</span>
              </a>

              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-950 text-xs font-black uppercase tracking-wider shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                FIDE Recognized Academy
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl sm:text-4xl md:text-4xl font-black tracking-tight text-slate-950 leading-[1.02]">
                TELANGANA CHESS{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500">
                  CLUB
                </span>
              </h1>
              <p className="text-slate-700 text-base sm:text-xl font-semibold max-w-xl leading-relaxed">
                Transforming minds and championing grandmasters. Experience world-class FIDE certified coaching, live interactive classrooms, and competitive state tournaments.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white font-black px-8 h-15 rounded-full text-xs sm:text-sm shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 border-0 justify-center uppercase tracking-wider">
                <Link href="/events" className="flex items-center justify-center text-center">
                  <Trophy className="w-5 h-5 mr-2 shrink-0 text-amber-300" />
                  <span>TOURNAMENTS & EVENTS</span>
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-black px-8 h-15 rounded-full text-xs sm:text-sm shadow-2xl shadow-slate-950/20 transition-all hover:scale-105 active:scale-95 border-2 border-emerald-500/40 justify-center uppercase tracking-wider">
                <Link href="https://app.chesslang.com" target="_blank" className="flex items-center justify-center text-center">
                  <Users className="w-5 h-5 mr-2 shrink-0 text-emerald-400" />
                  <span>ONLINE CLASSROOM</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 text-emerald-400" />
                </Link>
              </Button>
            </div>

            {/* DIRECT MEETING PORTALS */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <p className="text-slate-950 text-xs font-black uppercase tracking-[0.2em]">Direct Virtual Meeting Rooms</p>
                <span className="text-[11px] text-emerald-900 font-black bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                  Live Active
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {meetingLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} target="_blank" className="group">
                    <div className={`relative overflow-hidden flex items-center gap-2.5 p-4 bg-gradient-to-r ${link.bg} text-white rounded-2xl transition-all shadow-md hover:shadow-xl hover:scale-[1.04] active:scale-95 border border-white/20`}>
                      <link.icon className="w-4 h-4 shrink-0 relative z-10 text-amber-300" />
                      <span className="font-black text-xs uppercase tracking-wider relative z-10 truncate">{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t-2 border-slate-200">
              <div className="flex flex-col p-4 bg-white rounded-3xl border-2 border-slate-200/90 hover:border-emerald-500 transition-all shadow-sm hover:shadow-lg">
                <span className="text-3xl sm:text-4xl font-black text-emerald-800">120+</span>
                <span className="text-xs text-slate-600 font-black uppercase tracking-wider mt-0.5">Tournaments Hosted</span>
              </div>
              <div className="flex flex-col p-4 bg-white rounded-3xl border-2 border-slate-200/90 hover:border-amber-500 transition-all shadow-sm hover:shadow-lg">
                <span className="text-3xl sm:text-4xl font-black text-amber-800">600+</span>
                <span className="text-xs text-slate-600 font-black uppercase tracking-wider mt-0.5">Active Students</span>
              </div>
              <div className="flex flex-col p-4 bg-white rounded-3xl border-2 border-slate-200/90 hover:border-teal-500 transition-all shadow-sm hover:shadow-lg">
                <span className="text-3xl sm:text-4xl font-black text-teal-800">60+</span>
                <span className="text-xs text-slate-600 font-black uppercase tracking-wider mt-0.5">State Champions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-amber-500/30 blur-2xl animate-pulse"></div>

              <div className="relative w-full h-full rounded-[3.2rem] overflow-hidden border-4 border-emerald-400 shadow-2xl z-10 bg-slate-950">
                {heroImages.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="Telangana Chess Club Academy Training"
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                    priority={index === 0}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>

                {/* Floating Achievement Banner */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/98 backdrop-blur-xl border-2 border-emerald-400 p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 shadow-2xl">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-3 rounded-xl text-white shadow-lg shrink-0">
                      <Award className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-slate-950 font-black text-base sm:text-lg leading-tight uppercase tracking-tight">JOIN TELANGANA'S BEST</p>
                      <p className="text-emerald-700 text-[11px] font-black uppercase tracking-widest mt-0.5">FIDE Certified Grandmasters & Mentors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
