import { Calendar, Tag } from "lucide-react";

const NEWS_ITEMS = [
  {
    date: "March 2026",
    category: "Regulation",
    categoryColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    title: "UAE PDPL Enforcement Intensifies -- First Major Fines Expected in Q2 2026",
    summary: "The UAE Data Office has signaled that enforcement actions under the Personal Data Protection Law will escalate in Q2 2026. Organizations that have not completed data inventories, appointed DPOs, or implemented breach notification procedures face significant penalties.",
    tags: ["UAE PDPL", "Privacy", "Enforcement"]
  },
  {
    date: "March 2026",
    category: "Threat Intel",
    categoryColor: "bg-red-500/20 text-red-400 border border-red-500/30",
    title: "Ransomware Attacks on GCC SMBs Up 47% in Q1 2026",
    summary: "New threat intelligence reports highlight a sharp increase in ransomware targeting small and mid-sized businesses across the Gulf region, with average ransom demands exceeding $250K.",
    tags: ["Ransomware", "Threat Intel", "Middle East"]
  },
  {
    date: "March 2026",
    category: "Framework",
    categoryColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    title: "ISO 27001:2022 Transition Deadline Passed -- What Non-Compliant Organizations Face",
    summary: "Organizations that missed the October 2025 transition deadline now face certification gaps. Auditors are flagging non-compliance with the 11 new controls covering cloud security, threat intelligence, and data masking.",
    tags: ["ISO 27001", "Certification", "Audit"]
  },
  {
    date: "March 2026",
    category: "Regulation",
    categoryColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    title: "NESA Releases Updated Standards for Cloud Service Providers",
    summary: "The UAE National Electronic Security Authority has expanded its scope beyond critical infrastructure to include cloud service providers operating in the UAE.",
    tags: ["NESA", "Cloud", "UAE"]
  },
  {
    date: "February 2026",
    category: "Industry",
    categoryColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    title: "Average Cost of a Data Breach in the Middle East Reaches $9.8M",
    summary: "The latest IBM Cost of a Data Breach study shows Middle East breach costs continuing to climb, now averaging $9.8M -- second highest globally.",
    tags: ["Data Breach", "Cost", "Middle East"]
  },
  {
    date: "February 2026",
    category: "Best Practice",
    categoryColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    title: "FAIR Methodology Gains Traction in GCC Board Rooms",
    summary: "More CISOs across the Gulf region are adopting FAIR quantitative risk analysis to communicate cyber risk in financial terms.",
    tags: ["FAIR", "Risk Quantification", "Board Reporting"]
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">GRC News & Insights</h1>
          <p className="text-gray-400">Weekly updates on GRC, cybersecurity regulations, and compliance</p>
        </div>

        <div className="space-y-5">
          {NEWS_ITEMS.map((item, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                </div>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">{item.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{item.summary}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {item.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 rounded-full px-2.5 py-1">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Stay Informed</h2>
          <p className="text-gray-400 mb-6">Get weekly GRC and cybersecurity updates delivered to your inbox.</p>
          <a
            href="mailto:info@secureedgeadvisory.com?subject=GRC Newsletter Subscription"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Subscribe to GRC Weekly
          </a>
        </div>
      </div>
    </div>
  );
}
