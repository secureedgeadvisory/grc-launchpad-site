import { useState } from "react";
import { Search, BookOpen } from "lucide-react";

const GLOSSARY_TERMS = [
  { term: "ALE", full: "Annualized Loss Expectancy", def: "A FAIR metric representing the expected financial loss from a risk scenario over a one-year period. Calculated as Loss Event Frequency x Loss Magnitude." },
  { term: "BCP", full: "Business Continuity Plan", def: "A documented plan that outlines how an organization will continue operating during and after a disruption or disaster." },
  { term: "CIS", full: "Center for Internet Security", def: "A non-profit organization that publishes the CIS Controls -- a prioritized set of cybersecurity best practices for defending against common attacks." },
  { term: "COBIT", full: "Control Objectives for Information and Related Technologies", def: "An ISACA framework for IT governance and management, providing a comprehensive set of controls and processes." },
  { term: "FAIR", full: "Factor Analysis of Information Risk", def: "A quantitative risk analysis framework that enables organizations to express cyber risk in financial terms (dollars), rather than subjective red/amber/green ratings." },
  { term: "GDPR", full: "General Data Protection Regulation", def: "EU regulation governing the processing of personal data of EU residents. Applies to any organization processing EU personal data, regardless of location." },
  { term: "GRC", full: "Governance, Risk, and Compliance", def: "An integrated approach to managing an organization's governance, enterprise risk management, and regulatory compliance obligations." },
  { term: "IAM", full: "Identity and Access Management", def: "Frameworks and technologies for managing digital identities and controlling access to systems and data based on roles and policies." },
  { term: "ISO 27001", full: "ISO/IEC 27001", def: "The international standard for Information Security Management Systems (ISMS). Provides a framework for establishing, implementing, and maintaining information security." },
  { term: "LEF", full: "Loss Event Frequency", def: "A FAIR metric representing how often a loss event is expected to occur per year. Calculated as Threat Event Frequency x Vulnerability." },
  { term: "MFA", full: "Multi-Factor Authentication", def: "An authentication method requiring users to provide two or more verification factors to gain access to a system." },
  { term: "NESA", full: "National Electronic Security Authority", def: "UAE's federal authority responsible for cybersecurity. Publishes the UAE Information Assurance (IA) framework." },
  { term: "NIST CSF", full: "NIST Cybersecurity Framework", def: "A voluntary framework developed by the US National Institute of Standards and Technology, organized around five functions: Identify, Protect, Detect, Respond, Recover." },
  { term: "PAM", full: "Privileged Access Management", def: "Security solutions that manage and monitor privileged accounts (admin, root, service accounts) to prevent unauthorized access." },
  { term: "PDPL", full: "Personal Data Protection Law (UAE)", def: "UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. Governs the collection, processing, and storage of personal data in the UAE." },
  { term: "SIEM", full: "Security Information and Event Management", def: "Technology that aggregates and analyzes security event data from across an organization's IT infrastructure to detect threats and support compliance." },
  { term: "SOC 2", full: "Service Organization Control 2", def: "An auditing standard for service organizations that evaluates security, availability, processing integrity, confidentiality, and privacy controls." },
  { term: "TEF", full: "Threat Event Frequency", def: "A FAIR metric representing how often a threat agent is expected to act against an asset per year." },
  { term: "TPRM", full: "Third-Party Risk Management", def: "The process of identifying, assessing, and managing risks associated with vendors, suppliers, and other third parties." },
  { term: "vCISO", full: "Virtual Chief Information Security Officer", def: "A fractional or outsourced CISO who provides senior-level security leadership and strategy to organizations without a full-time CISO." },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");

  const filtered = GLOSSARY_TERMS.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.full.toLowerCase().includes(search.toLowerCase()) ||
    t.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0f1e] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">GRC Glossary</h1>
          <p className="text-gray-400">Plain-English definitions for every acronym and term used in GRC and compliance</p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search terms, acronyms, or definitions..."
            className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-3">
          {filtered.map(t => (
            <div key={t.term} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.05] transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 mt-0.5">
                  {t.term}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{t.full}</h3>
                  <p className="text-gray-400 text-sm">{t.def}</p>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
              <p>No terms found for "{search}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
