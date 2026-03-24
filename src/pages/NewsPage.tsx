import { Calendar, Tag } from "lucide-react";

const NEWS_ITEMS = [
  {
    date: "March 2026",
    category: "Regulation",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "UAE PDPL Enforcement Intensifies — First Major Fines Expected in Q2 2026",
    summary: "The UAE Data Office has signaled that enforcement actions under the Personal Data Protection Law will escalate in Q2 2026. Organizations that have not completed data inventories, appointed DPOs, or implemented breach notification procedures face significant penalties.",
    tags: ["UAE PDPL", "Privacy", "Enforcement"]
  },
  {
    date: "March 2026",
    category: "Threat Intel",
    categoryColor: "bg-red-100 text-red-700",
    title: "Ransomware Attacks on GCC SMBs Up 47% in Q1 2026",
    summary: "New threat intelligence reports highlight a sharp increase in ransomware targeting small and mid-sized businesses across the Gulf region, with average ransom demands exceeding $250K. Unpatched systems and weak MFA remain the top entry points.",
    tags: ["Ransomware", "Threat Intel", "Middle East"]
  },
  {
    date: "March 2026",
    category: "Framework",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "ISO 27001:2022 Transition Deadline Passed — What Non-Compliant Organizations Face",
    summary: "Organizations that missed the October 2025 transition deadline from ISO 27001:2013 to the 2022 version now face certification gaps. Auditors are flagging non-compliance with the 11 new controls covering cloud security, threat intelligence, and data masking.",
    tags: ["ISO 27001", "Certification", "Audit"]
  },
  {
    date: "March 2026",
    category: "Regulation",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "NESA Releases Updated Standards for Cloud Service Providers",
    summary: "The UAE National Electronic Security Authority has expanded its scope beyond critical infrastructure to include cloud service providers operating in the UAE. New requirements focus on data residency, shared responsibility documentation, and incident reporting.",
    tags: ["NESA", "Cloud", "UAE"]
  },
  {
    date: "February 2026",
    category: "Industry",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Average Cost of a Data Breach in the Middle East Reaches $9.8M",
    summary: "The latest IBM Cost of a Data Breach study shows Middle East breach costs continuing to climb, now averaging $9.8M — second highest globally. Healthcare and financial services remain the most impacted sectors.",
    tags: ["Data Breach", "Cost", "Middle East"]
  },
  {
    date: "February 2026",
    category: "Framework",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "NIST CSF 2.0 Adoption Accelerating Across GCC Organizations",
    summary: "GCC organizations are rapidly adopting NIST Cybersecurity Framework 2.0, particularly the new Govern function. The framework's emphasis on supply chain risk and board-level governance is resonating with regional regulators.",
    tags: ["NIST CSF", "Framework", "GCC"]
  },
  {
    date: "February 2026",
    category: "Best Practice",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "FAIR Methodology Gains Traction in GCC Board Rooms",
    summary: "More CISOs across the Gulf region are adopting FAIR quantitative risk analysis to communicate cyber risk in financial terms. The shift from qualitative heat maps to dollar-value ALE reporting is enabling better board engagement and security investment decisions.",
    tags: ["FAIR", "Risk Quantification", "Board Reporting"]
  },
  {
    date: "January 2026",
    category: "Regulation",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Saudi Arabia NCA Updates Essential Cybersecurity Controls with AI Governance Requirements",
    summary: "The National Cybersecurity Authority of Saudi Arabia has updated its ECC framework to include AI governance requirements. Organizations deploying AI systems must now demonstrate risk assessments, transparency measures, and human oversight controls.",
    tags: ["NCA", "Saudi Arabia", "AI Governance"]
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#0f2044] mb-2">GRC News & Insights</h1>
          <p className="text-gray-600">Weekly updates on GRC, cybersecurity regulations, and compliance across the UAE, GCC, and beyond</p>
          <p className="text-xs text-gray-400 mt-2">Updated weekly by SecureEdge Advisory</p>
        </div>

        <div className="space-y-5">
          {NEWS_ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                </div>
              </div>
              <h2 className="text-lg font-bold text-[#0f2044] mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {item.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 rounded-full px-2.5 py-1">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-10 bg-[#0f2044] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Stay Informed</h2>
          <p className="text-gray-300 mb-6">Get weekly GRC and cybersecurity updates relevant to UAE and GCC organizations delivered to your inbox.</p>
          <a
            href="mailto:info@secureedgeadvisory.com?subject=GRC Newsletter Subscription"
            className="inline-flex items-center gap-2 bg-[#06b6d4] hover:bg-cyan-400 text-[#0f2044] font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Subscribe to GRC Weekly
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 SecureEdge Advisory · GRC Launchpad™ · info@secureedgeadvisory.com
        </p>
      </div>
    </div>
  );
}
