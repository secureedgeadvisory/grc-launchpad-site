import {
  Shield, Brain, CheckCircle, Clock, Zap, BarChart3,
  Users, FileText, ArrowRight, Mail, Eye
} from "lucide-react";

interface VCISOPageProps {
  onNavigate: (page: string) => void;
}

const COMPARISON = [
  { capability: "Policy drafting", traditional: "2 weeks", aegis: "15 seconds" },
  { capability: "Evidence review", traditional: "Hours per control", aegis: "Instant scoring" },
  { capability: "Risk quantification", traditional: "Quarterly", aegis: "Real-time FAIR" },
  { capability: "Vendor assessment", traditional: "Months", aegis: "Self-service portal" },
  { capability: "Board reporting", traditional: "Days of prep", aegis: "One click" },
  { capability: "Compliance monitoring", traditional: "Manual spot checks", aegis: "Continuous" },
  { capability: "Audit preparation", traditional: "6-8 weeks", aegis: "Always audit-ready" },
  { capability: "Framework mapping", traditional: "Consultants + weeks", aegis: "Automatic" },
];

const TIERS = [
  {
    name: "AEGIS Essentials",
    price: "Free",
    priceNote: "Forever",
    highlight: false,
    features: [
      "LaunchPad assessment (13 domains, 68 controls)",
      "Automated GRC roadmap generation",
      "Basic AEGIS monitoring and scoring",
      "Maturity baseline by domain",
      "Framework alignment matrix",
      "Risk exposure summary (ALE)",
    ],
    cta: "Start with Essentials",
  },
  {
    name: "AEGIS Professional",
    price: "Custom",
    priceNote: "Per month",
    highlight: true,
    features: [
      "Full operational GRC platform",
      "CertEdge for 1 framework",
      "AEGIS evidence analysis and scoring",
      "Policy generation and lifecycle",
      "FAIR risk register with ALE",
      "Quarterly board reports",
      "Immutable audit trail",
      "Control task management with guides",
    ],
    cta: "Contact for Pricing",
  },
  {
    name: "AEGIS Enterprise",
    price: "Custom",
    priceNote: "Annual contract",
    highlight: false,
    features: [
      "Multi-framework certification",
      "TrustEdge vendor portal",
      "ImpactEdge BCP module",
      "MergeEdge M&A due diligence",
      "Dedicated connector setup",
      "AEGIS Autopilot mode",
      "Custom integrations",
      "Priority support",
    ],
    cta: "Contact for Enterprise",
  },
];

function scrollToContact() {
  document.getElementById("vciso-contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function VCISOPage({ onNavigate }: VCISOPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f1a3a] to-[#0a0f1e]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-sm text-purple-400 mb-8">
            <Brain size={14} />
            <span>Powered by AEGIS AI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Virtual CISO —<br />
            <span className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
              Powered by AEGIS
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            What if your CISO was an AI that never sleeps, never misses a deadline,
            and costs less than a single audit?
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
            Not a chatbot. Not an assistant. An operator that runs your compliance program
            while you run your business.
          </p>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#3b82f6] hover:to-[#8b5cf6] text-white font-bold rounded-xl text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/20"
          >
            Start with AEGIS Essentials — Free Forever
          </button>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 px-4 bg-[#0d1322] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">The Difference</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Traditional CISO vs. AEGIS vCISO
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A full-time CISO costs $150K-$300K/year. AEGIS delivers more, faster, for a fraction of the cost.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/[0.05] border-b border-white/[0.06]">
              <div className="px-6 py-4 text-sm font-semibold text-gray-400">Capability</div>
              <div className="px-6 py-4 text-sm font-semibold text-gray-400 text-center">Traditional CISO</div>
              <div className="px-6 py-4 text-sm font-semibold text-blue-400 text-center">AEGIS vCISO</div>
            </div>
            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 ${i < COMPARISON.length - 1 ? "border-b border-white/[0.04]" : ""} hover:bg-white/[0.02] transition-colors`}>
                <div className="px-6 py-4 text-sm text-white font-medium">{row.capability}</div>
                <div className="px-6 py-4 text-sm text-gray-500 text-center flex items-center justify-center gap-1.5">
                  <Clock size={13} className="text-gray-600" />
                  {row.traditional}
                </div>
                <div className="px-6 py-4 text-sm text-blue-400 text-center font-medium flex items-center justify-center gap-1.5">
                  <Zap size={13} className="text-blue-400" />
                  {row.aegis}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE TIERS ─── */}
      <section className="py-24 px-4 bg-[#0a0f1e] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-3">Service Tiers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose your level of autonomy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30 relative"
                    : "bg-white/[0.03] border border-white/[0.06]"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-sm text-gray-500">{tier.priceNote}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle size={15} className="text-blue-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:info@secureedgeadvisory.com?subject=${encodeURIComponent(tier.name)} Enquiry`}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    tier.highlight
                      ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white hover:from-[#3b82f6] hover:to-[#8b5cf6]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  {tier.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT AEGIS DOES ─── */}
      <section className="py-24 px-4 bg-[#0d1322] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">AEGIS in Action</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What AEGIS does while you sleep
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "Drafts policies", desc: "Framework-aligned, 6-section structure, ready for review and publication. Not a template — a complete draft tailored to your org." },
              { icon: Eye, title: "Scores evidence", desc: "Upload a screenshot, a config export, a signed document. AEGIS reads it, classifies it, and scores the control it applies to." },
              { icon: BarChart3, title: "Quantifies risk", desc: "FAIR methodology. TEF, LEF, ALE — calculated from your actual control posture. Not a heat map. Dollar values." },
              { icon: Shield, title: "Maps frameworks", desc: "Common control hub. Prove a control once, AEGIS projects compliance across NESA, ISO, SOC 2, NIST simultaneously." },
              { icon: Users, title: "Assesses vendors", desc: "Vendor self-service portal. They fill the questionnaire. AEGIS scores the response. You see the risk tier instantly." },
              { icon: Brain, title: "Generates reports", desc: "Board reports, compliance reports, risk reports. One click. No prep days. Always current." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.05] transition-all">
                <item.icon size={24} className="text-purple-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section id="vciso-contact" className="py-24 px-4 bg-[#0a0f1e] border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to replace your compliance backlog<br />with an AI operator?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Start with AEGIS Essentials — free forever. No credit card. No commitment.
            Take the LaunchPad assessment and see your roadmap in 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("assessment")}
              className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#3b82f6] hover:to-[#8b5cf6] text-white font-bold rounded-xl text-lg transition-all"
            >
              Take Free Assessment
            </button>
            <a
              href="mailto:info@secureedgeadvisory.com?subject=vCISO Enquiry"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-lg transition-colors border border-white/10"
            >
              <Mail size={18} />
              Contact Us for Early Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
