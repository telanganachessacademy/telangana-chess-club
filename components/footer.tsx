import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  ArrowRight,
  Award,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Courses", href: "/courses" },
    { name: "Online Coaching", href: "/online-coaching" },
    { name: "Tournaments & Events", href: "/events" },
    { name: "FIDE Rated Coaches", href: "/coaches" },
    {
      name: "Chess Classroom",
      href: "https://app.chesslang.com",
      isExternal: true,
    },
  ];

  const resources = [
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Blog & Articles", href: "/blogs" },
    { name: "Quick Fee Payment", href: "/quick-pay" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Contact Desk", href: "/contact" },
  ];

  const networkLinks = [
    {
      name: "Telangana Chess Academy",
      href: "https://telanganachessacademy.com/",
    },
    {
      name: "Telangana Chess Institute",
      href: "https://telanganachess.com/",
    },
    {
      name: "Telangana Chess School",
      href: "https://www.telanganachessschool.com/",
    },
    {
      name: "Telangana Chess School",
      href: "https://www.telanganachessachool.com/",
    },
    {
      name: "Telangana Chess Foundation",
      href: "https://telanganachess.com/",
    },
    {
      name: "Telangana Sports Academy",
      href: "https://telanganasportsacademy.com/",
    },
    {
      name: "Telangana Chess Centre",
      href: "https://www.telanganachesscentre.com/",
    },
    {
      name: "Bharat Chess Academy",
      href: "https://www.bharatchessacademy.com/",
    },
    {
      name: "Bharat Chess School",
      href: "https://bharatchess.com/",
    },
    {
      name: "Bharat Chess School",
      href: "https://www.bharatchessschool.com/",
    },
    {
      name: "Bharat Chess Institute",
      href: "http://www.bharatchessinstitute.com/",
    },
    {
      name: "Bharat Sports Academy",
      href: "https://bharatsportsacademy.com/",
    },
    {
      name: "Hyderabad Chess Institute",
      href: "https://www.hyderabadchessinstitute.com/",
    },
    {
      name: "Hyderabad Chess Club",
      href: "https://www.telanganachessclub.com/",
    },
    {
      name: "Live Student Classroom",
      href: "https://app.chesslang.com/app",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/telanganachessclub",
      label: "Facebook",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-[#04060a] text-slate-300 font-sans border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1: Brand & Bio */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-emerald-400 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 p-0.5">
                  <Image
                    src="/logo.jpg"
                    alt="Telangana Chess Club Seal"
                    width={60}
                    height={60}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>

              <span className="text-xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                Telangana Chess Club
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              Empowering mind sports & strategic thinking through
              FIDE-certified grandmaster training, interactive online
              classrooms, and competitive state tournaments.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                FIDE Certified Academy
              </span>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Quick Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.isExternal ? "_blank" : "_self"}
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources & Information */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Explore & Pay
            </h3>

            <ul className="space-y-3 text-sm">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Our Network */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400"></span>
              Our Network
            </h3>

            <div className="space-y-2.5">
              {networkLinks.map((link, index) => (
                <a
                  key={`${link.name}-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-violet-300 transition-colors flex items-center gap-2 group font-medium text-sm"
                >
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-violet-400 transition-colors shrink-0" />

                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Academy */}
        <div className="border-t border-slate-800/80 pt-10 mb-10">
          <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Contact Academy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Email */}
            <a
              href="mailto:telanganachessclub@gmail.com"
              className="flex items-start gap-3 p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-amber-500/30 transition-all group"
            >
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Official Email
                </p>

                <p className="text-slate-200 font-semibold truncate hover:text-amber-300">
                  telanganachessclub@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919864646481"
              className="flex items-start gap-3 p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all group"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Admissions Helpline
                </p>

                <p className="text-slate-200 font-semibold hover:text-emerald-300">
                  +91 9864646481
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-3 p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <MapPin className="w-4 h-4" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Main Campus
                </p>

                <p className="text-slate-200 font-medium">
                  Road No 2, Alkapuri, Kothapet, Hyderabad, Telangana 500035
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4 font-medium">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-bold">
              Telangana Chess Club
            </span>
            . All rights reserved. www.telanganachessclub.com
          </p>

          <div className="flex items-center space-x-6 text-slate-400">
            <Link
              href="/terms"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </Link>

            <span>•</span>

            <Link
              href="/contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Support Desk
            </Link>

            <span>•</span>

            <a
              href="https://www.telanganachessclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors font-bold text-amber-400"
            >
              www.telanganachessclub.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
