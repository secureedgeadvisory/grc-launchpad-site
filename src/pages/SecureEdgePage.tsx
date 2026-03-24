import { Shield, CheckCircle, ArrowRight, Users, BarChart3, FileText, AlertTriangle, Lock, BookOpen, Cloud, Package, ClipboardCheck } from "lucide-react";

interface SecureEdgePageProps {
  onNavigate: (page: string) => void;
}

const VCISO_SERVICES = [
  {
    category: "Strategy & Governance",
    icon: Shield,
    color: "bg-blue-50 text-blue-600",
    items: [
      "Security strategy ownership and roadmap development",
      "Information security policy framework creation",
      "Security budget planning and vendor selection guidance",
      "Board and executive-level security reporting",
      "Security maturity tracking and improvement planning",
      "Regulatory change monitoring and impact assessment"
    ]
  },
  {
    category: "Risk & Compliance",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600",
    items: [
      "FAIR-based quantitative risk program management",
      "Multi-framework compliance management (ISO 27001, NESA, GDPR, SOX)",
      "Internal audit management and coordination",
      "External audit preparation and auditor liaison",
      "Risk register ownership and quarterly reviews",
      "Compliance obligations register maintenance"
    ]
  },
  {
    category: "Security Operations",
    icon: AlertTriangle,
    color: "bg-amber-50 text-amber-600",
    items: [
      "Security architecture review and recommendations",
      "Incident response planning, playbooks, and tabletop exercises",
      "Business continuity and disaster recovery oversight",
      "Vulnerability management program oversight",
      "SIEM, EDR, and SOC strategy and vendor selection",
      "Cloud security posture management"
    ]
  },
  {
    category: "People & Partners",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
    items: [
      "Third-party risk management (TPRM) program",
      "Security awareness program design and oversight",
      "Identity and access management strategy",
      "Data protection and privacy program management",
      "Internal security team mentoring and upskilling",
      "Vendor security assessment and selection"
    ]
  }
];

const ENGAGEMENTS = [
  { title: "Incident Response Readiness", desc: "Develop IR playbooks, conduct tabletop exercises, and ensure your team is ready to respond effectively to a security incident.", icon: AlertTriangle },
  { title: "Third-Party Risk Program Design", desc: "Build a risk-tiered TPRM program from scratch — vendor questionnaires, assessment workflows, and ongoing monitoring.", icon: Users },
  { title: "Audit Preparation & Liaison", desc: "Prepare your organization for ISO 27001, SOC 2, or regulatory audits. We manage the process and liaise with auditors on your behalf.", icon: ClipboardCheck },
  { title: "Security Awareness Program", desc: "Design and launch a security awareness program including phishing simulations, training content, and culture measurement.", icon: BookOpen },
  { title: "Cloud Security Assessment", desc: "Review your cloud environment (AWS, Azure, GCP) for misconfigurations, IAM gaps, and compliance with cloud security benchmarks.", icon: Cloud },
  { title: "FAIR Risk Quantification Workshop", desc: "A structured workshop to quantify your top 5 cyber risks in financial terms using the FAIR methodology — ready for board presentation.", icon: BarChart3 },
  { title: "Data Protection & Privacy Program", desc: "Build your GDPR/UAE PDPL compliance program — data inventory, DPIAs, DPAs, breach notification procedures, and DPO support.", icon: Lock },
  { title: "Security Architecture Review", desc: "Review your current security architecture against best practices and provide a prioritized improvement roadmap.", icon: Shield },
  { title: "Business Continuity & DR Planning", desc: "Develop BCP and DRP documentation, define RTO/RPO, and conduct tabletop exercises to validate your recovery capability.", icon: Package },
];

const FRAMEWORKS_EXPERTISE = [
  "ISO 27001", "ISO 27701", "ISO 22301", "NIST CSF", "NIST SP 800-53",
  "NESA UAE", "UAE PDPL", "GDPR", "SOX ITGC", "PCI DSS",
  "COBIT 2019", "CIS v8", "FAIR", "SAMA", "NCA KSA",
  "CSA CCM", "MITRE ATT&CK", "ServiceNow VRM", "AWS Security", "Azure Security"
];

export default function SecureEdgePage({ onNavigate }: SecureEdgePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2044] to-[#1a3a6e] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-[#1a56db] rounded-xl p-3">
              <Shield size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">SecureEdge Advisory</h1>
          <p className="text-[#06b6d4] text-xl font-medium mb-6">Virtual CISO & GRC Consulting for UAE/GCC SMBs</p>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We provide senior-level cybersecurity leadership and GRC expertise to organizations that need
            a CISO's strategic guidance without the full-time headcount cost.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f2044] mb-6 text-center">About SecureEdge Advisory</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 text-lg mb-4">
              SecureEdge Advisory was founded by seasoned security professionals with over 25 years of hands-on experience
              securing enterprises across the Middle East, Europe, and Asia-Pacific.
            </p>
            <p className="text-gray-700 mb-4">
              We specialize in helping SMBs across the UAE and GCC build robust, audit-ready security programs —
              without the complexity and cost of enterprise consulting firms. Our approach combines deep regional
              regulatory knowledge with proven global frameworks and AI-powered delivery efficiency.
            </p>
            <p className="text-gray-700 mb-6">
              Our vCISO model gives you a dedicated security leader who owns your security program, reports to your
              board, manages your compliance obligations, and builds your security culture — at a fraction of the
              cost of a full-time hire.
            </p>
            <div>
              <h3 className="font-semibold text-[#0f2044] mb-3">Framework & Domain Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {FRAMEWORKS_EXPERTISE.map(f => (
                  <span key={f} className="bg-[#0f2044] text-white text-xs px-3 py-1 rounded-full">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f2044] mb-3">Our Services</h2>
            <p className="text-gray-600">Two clear service tiers designed for SMBs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tier 1 */}
            <div className="bg-white rounded-2xl border-2 border-[#06b6d4] shadow-lg p-8">
              <div className="bg-[#06b6d4]/10 rounded-xl p-3 w-fit mb-4">
                <FileText className="text-[#06b6d4]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f2044] mb-1">GRC Starter Assessment</h3>
              <p className="text-[#06b6d4] font-semibold mb-4">One-time engagement</p>
              <p className="text-gray-600 mb-6">
                Your starting point. A comprehensive gap analysis that tells you exactly where you stand
                against applicable frameworks — with a clear roadmap to get audit-ready.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "10-domain security gap analysis",
                  "FAIR-based risk quantification (ALE in dollar terms)",
                  "Maturity scoring against ISO 27001, NESA, GDPR, SOX",
                  "Prioritized 30/60/90-day remediation roadmap",
                  "Executive-ready pre-audit report",
                  "Framework compliance alignment matrix",
                  "1-hour findings walkthrough with your team"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-[#06b6d4] shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic">Ideal for: Organizations preparing for their first audit, new compliance requirements, or post-incident review.</p>
            </div>

            {/* Tier 2 */}
            <div className="bg-[#0f2044] rounded-2xl shadow-lg p-8 text-white">
              <div className="bg-[#1a56db] rounded-xl p-3 w-fit mb-4">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">vCISO — Virtual CISO</h3>
              <p className="text-[#06b6d4] font-semibold mb-4">Monthly retainer</p>
              <p className="text-gray-300 mb-6">
                A dedicated virtual Chief Information Security Officer who owns your security program,
                manages compliance, and reports to your board — without the full-time cost.
              </p>
              <div className="space-y-4 mb-6">
                {VCISO_SERVICES.map((s, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-1">
                      <s.icon size={14} className="text-[#06b6d4]" />
                      <span className="text-sm font-semibold text-[#06b6d4]">{s.category}</span>
                    </div>
                    <ul className="space-y-1 pl-5">
                      {s.items.slice(0, 3).map((item, j) => (
                        <li key={j} className="text-xs text-gray-300 flex items-start gap-1.5">
                          <span className="text-[#06b6d4] mt-0.5">›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 italic">Ideal for: SMBs that need ongoing security leadership, compliance management, and board-level reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Engagements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f2044] mb-3">Specialized Engagements</h2>
            <p className="text-gray-600">Targeted advisory services for specific security challenges</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ENGAGEMENTS.map((e, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <e.icon className="text-[#1a56db] mb-3" size={22} />
                <h3 className="font-semibold text-[#0f2044] mb-2 text-sm">{e.title}</h3>
                <p className="text-gray-600 text-xs">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NGO */}
      <section className="py-12 px-4 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-3">🌍</div>
          <h2 className="text-2xl font-bold text-[#0f2044] mb-3">NGO & Non-Profit Program</h2>
          <p className="text-gray-700 mb-4">
            Non-profit organizations and NGOs receive complimentary GRC advisory services.
            We believe every organization — regardless of budget — deserves to operate securely.
          </p>
          <a
            href="mailto:info@secureedgeadvisory.com?subject=NGO Advisory Program"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Apply for NGO Program <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1a56db] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">
            Start with the free GRC Launchpad assessment to understand your current posture,
            then let's talk about how SecureEdge Advisory can help you close the gaps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("assessment")}
              className="px-8 py-4 bg-white text-[#1a56db] font-bold rounded-xl text-lg hover:bg-blue-50 transition-colors"
            >
              Start Free Assessment
            </button>
            <a
              href="mailto:info@secureedgeadvisory.com?subject=vCISO Enquiry"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/30"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
