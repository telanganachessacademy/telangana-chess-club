"use client";

import { Award, Star, Trophy, CheckCircle2, Linkedin, Twitter, Share2, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Tejavath Naresh",
      role: "Head Coach & Founder",
      title: "Head Coach & Founder",
      rating: "2200 ELO",
      image: "/naresh.jpg",
      achievements: ["FIDE Arbiter", "FIDE Rated Player", "15+ Years Experience"],
      color: "amber",
    },
    {
      name: "Tejavath Aruna",
      role: "Senior Coach",
      title: "Senior Coach",
      rating: "2450 ELO",
      image: "/coach.png",
      achievements: ["FIDE Rated Player", "Women's Title Holder", "12+ Years Experience"],
      color: "emerald",
    },
    {
      name: "Ranghanathan K S",
      role: "Junior Coach",
      title: "Junior Coach",
      rating: "2400 ELO",
      image: "/coach.png",
      achievements: ["International FIDE Rated", "Online Coaching Expert", "8+ Years Experience"],
      color: "blue",
    },
    {
      name: "Kethavath Lokesh",
      role: "Assistant Coach",
      title: "Assistant Coach",
      rating: "2300 ELO",
      image: "/coach.png",
      achievements: ["International FIDE Rated", "Rapid Chess Expert", "6+ Years Experience"],
      color: "purple",
    },
  ];

  const getColors = (color: string) => {
    switch(color) {
      case "amber": return { text: "text-amber-600", bg: "bg-amber-600" };
      case "emerald": return { text: "text-emerald-600", bg: "bg-emerald-600" };
      case "blue": return { text: "text-blue-600", bg: "bg-blue-600" };
      case "purple": return { text: "text-indigo-600", bg: "bg-indigo-600" };
      default: return { text: "text-amber-600", bg: "bg-amber-600" };
    }
  };

  return (
    <section id="team" className="py-24 bg-slate-50/70 border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-950 text-xs font-black uppercase tracking-widest shadow-sm">
            <Medal className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Grandmasters</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500">Mentors</span>
          </h2>
          
          <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-semibold">
            Our faculty consists of FIDE-rated professionals and champions who don't just teach chess—they live it.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const colors = getColors(member.color);
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl shadow-md"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-white text-slate-900 text-[10px] font-black rounded-full uppercase tracking-widest shadow-sm">
                      {member.role}
                    </span>
                  </div>

                  {/* Social Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-700 hover:text-white hover:bg-amber-600 transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-700 hover:text-white hover:bg-sky-500 transition-colors">
                      <Twitter className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 transition-transform duration-300">
                    <h3 className="text-xl font-black text-white mb-1">{member.name}</h3>
                    <p className="text-xs font-bold text-amber-300 mb-3 uppercase tracking-wider">{member.title}</p>
                    
                    {/* Rating Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/20 border border-amber-400/40 rounded-lg text-amber-300 text-xs font-black mb-3">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      {member.rating}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-1.5 pt-3 border-t border-white/20">
                      {member.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-200 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1.5 w-full ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/coaches" className="inline-flex items-center text-slate-800 hover:text-amber-700 font-black transition-colors group text-xs uppercase tracking-wider bg-white border border-slate-200 px-6 py-3 rounded-xl shadow-sm">
            See All Coaches <Share2 className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-amber-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}