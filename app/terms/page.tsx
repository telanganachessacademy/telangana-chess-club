"use client";

import { FileText, Shield, CreditCard, CheckCircle, Scale } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const termsSection = [
  {
    id: "general",
    title: "General Governance & Terms",
    icon: FileText,
    content: [
      "Telangana Chess Club reserves all right to change, deny, or reschedule any class batch (both online and offline) in the best interest of student progression.",
      "Governing Law (Jurisdiction): This Agreement shall be governed by and construed in accordance with the laws of Telangana (Hyderabad jurisdiction), India.",
      "Class Termination: Sessions may be terminated mutually once the agreed training package period has ended.",
      "Intellectual Property: Telangana Chess Club retains proprietary ownership over its proprietary curriculum, workbook materials, and training assets.",
    ],
  },
  {
    id: "refunds",
    title: "Refunds & Cancellation Policy",
    icon: CreditCard,
    content: [
      "No refunds or cancellations once course fees are paid and classroom/tournament slots are booked.",
      "Attendance is mandatory for booked training sessions to ensure steady rating progression.",
      "In case of emergency absence, students may request makeup sessions subject to coach availability.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    icon: Shield,
    content: [
      "We collect and process personal data in accordance with applicable Indian IT laws and privacy standards.",
      "Student information is strictly confidential and never sold to third-party advertisers.",
      "Photos and videos of tournament victories or classroom moments may be used for club announcements unless explicitly opted out in writing.",
      "We implement 256-bit SSL encryption across all digital payment portals.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700 text-white border-0 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
            <Scale className="w-3.5 h-3.5 mr-1.5 text-amber-300" />
            Legal Governance
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Telangana Chess Club <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500">Terms & Privacy Policy</span>
          </h1>
          <p className="text-slate-700 text-sm sm:text-base font-semibold">
            Clear guidelines ensuring transparency, fairness, and safety across all Telangana Chess Club programs.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-8">
          {termsSection.map(({ id, title, icon: Icon, content }) => (
            <div key={id} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">{title}</h2>
              </div>

              <ul className="space-y-3">
                {content.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
