import { Calendar, Tag } from "lucide-react";

const NEWS_ITEMS = [
  {
    date: "June 2025",
    category: "Regulation",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "UAE PDPL Enforcement Guidelines Updated — What SMBs Need to Know",
    summary: "The UAE Data Office has released updated enforcement guidelines under the Personal Data Protection Law. Organizations processing personal data of UAE residents must review their data inventories, consent mechanisms, and breach notification procedures.",
    tags: ["UAE PDPL", "Privacy", "Compliance"]
  },
  {
    date: "May 2025",
    category: "Framework",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "NIST CSF 2.0 — Key Changes and What They Mean for GCC Organizations",
    summary: "NIST released version 2.0 of its Cybersecurity Framework, adding a new 'Govern' function and expanding guidance on supply chain risk. GCC organizations using NIST as a baseline should review the updated controls.",
    tags: ["NIST CSF", "Framework", "Supply Chain"]
  },
  {
    date: "May 2025",
    category: "Threat Intel",
    categoryColor: "bg-red-100 text-red-700",
    title: "Middle East Ransomware Attacks Up 40% — SMBs Are Primary Targets",
    summary: "New threat intelligence reports indicate a significant increase in ransomware targeting SMBs across the UAE, Saudi Arabia, and Qatar. Attackers are exploiting unpatched systems and weak MFA implementations.",
    tags: ["Ransomware", "Threat Intel", "Middle East"]
  },
  {
    date: "April 2025",
    category: "Regulation",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Saudi Arabia NCA Releases Updated Essential Cybersecurity Controls",
    summary: "The National Cybersecurity Authority (NCA) of Saudi Arabia has updated its Essential Cybersecurity Controls (ECC). Organizations operating in KSA should review the new requirements, particularly around cloud security and third-party risk.",
    tags: ["NCA", "Saudi Arabia", "ECC"]
  },
  {
    date: "April 2025",
    category: "Industry",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Average Cost of a Data Breach in the Middle East Reaches $9.4M",
    summary: "IBM's annual Cost of a Data Breach report shows the Middle East continues to have the second-highest breach costs globally. Healthcare and financial services sectors face the highest exposure.",
    tags: ["Data Breach", "Cost", "Middle East"]
  },
  {
    date: "March 2025",
    category: "Framework",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "ISO 27001:2022 Transition Deadline — Are You Ready?",
    summary: "Organizations certified to ISO 27001:2013 must transition to the 2022 version. The updated standard introduces 11 new controls covering cloud security, threat intelligence, and data masking.",
    tags: ["ISO 27001", "Certification", "Transition"]
  },
  {
    date: "March 2025",
    category: "Best Practice",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "FAIR Methodology Adoption Growing in GCC — Why Risk Quantification Matters",
    summary: "More organizations across the GCC are adopting the FAIR (Factor Analysis of Information Risk) methodology to quantify cyber risk in financial terms. This shift enables better board communication and security investment decisions.",
    tags: ["FAIR", "Risk Quantification", "GCC"]
  },
  {
    date: "February 2025",
    category: "Regulation",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "DIFC and ADGM Data Protection Regulations — Key Differences Explained",
    summary: "Organizations operating in Dubai International Financial Centre (DIFC) or Abu Dhabi Global Market (ADGM) face distinct data protection requirements. This analysis breaks down the key differences and compliance obligations.",
    tags: ["DIFC", "ADGM", "Data Protection"]
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
