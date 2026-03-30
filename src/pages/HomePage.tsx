import { Shield, BarChart3, FileText, Lock, Globe, Zap, AlertTriangle } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const FRAMEWORKS = ["ISO 27001", "NIST CSF", "NESA", "UAE PDPL", "GDPR", "SOX", "COBIT", "CIS v8", "FAIR", "ISO 22301", "PDPL"];

const VALUE_PROPS = [
  { icon: BarChart3, title: "FAIR Risk Quantification", desc: "Not just red/amber/green. Get Annualized Loss Expectancy (ALE) in dollar terms — the language CFOs and boards understand.", color: "text-blue-500" },
  { icon: Globe, title: "10 Security Domains", desc: "Governance, Access Control, Data Protection, Network Security, Incident Response, Vendor Risk, Cloud, Awareness, Asset Management, Compliance.", color: "text-cyan-500" },
  { icon: FileText, title: "Pre-Audit Report", desc: "Generate a professional PDF-ready report showing your maturity score, risk exposure, and a prioritized 30/60/90-day remediation roadmap.", color: "text-emerald-500" },
  { icon: Shield, title: "Multi-Framework Alignment", desc: "Every question maps to ISO 27001, NESA, GDPR, SOX, CIS v8, and FAIR — so you know exactly where you stand against each framework.", color: "text-purple-500" },
  { icon: Zap, title: "Instant Results", desc: "Complete the assessment in 20–30 minutes. Get your results immediately — no waiting, no sales calls, no email required.", color: "text-amber-500" },
  { icon: Lock, title: "Zero Data Stored", desc: "Privacy by design. Your answers never leave your browser. No accounts, no tracking, no cookies. Your data is yours alone.", color: "text-red-500" },
];

const PAIN_POINTS = [
  { icon: AlertTriangle, title: "You don't know your real risk exposure", desc: "Most SMBs have never done a formal security assessment. You're flying blind — until an incident or auditor forces the issue." },
  { icon: AlertTriangle, title: "GRC tools cost $500–$2,000/month", desc: "Enterprise GRC platforms are priced for enterprises. SMBs are left with spreadsheets and guesswork." },
  { icon: AlertTriangle, title: "Regulations are accelerating", desc: "UAE PDPL, NESA, GDPR, SOX — the compliance landscape is expanding fast. Non-compliance means fines, reputational damage, and lost contracts." },
  { icon: AlertTriangle, title: "You can't afford a full-time CISO", desc: "A CISO costs $150K–$300K/year. Most SMBs need the expertise without the headcount." },
];

const DOMAINS_PREVIEW = [
  "Security Governance & Policy", "Access Control & Identity", "Data Protection & Privacy",
  "Network & Infrastructure", "Incident Response & BCP", "Third-Party & Vendor Risk",
  "Cloud Security", "Security Awareness", "Asset Management", "Compliance & Audit"
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0f2044] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1a56db]/30 border border-[#1a56db]/50 rounded-full px-4 py-1.5 text-sm text-[#06b6d4] mb-6">
            <Shield size={14} />
            <span>Free · No Registration · Privacy by Design</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Enterprise GRC.<br />
            <span className="text-[#06b6d4]">Zero Complexity.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            AI-powered governance, risk & compliance for UAE & GCC organizations.
            Start with a free assessment — upgrade to the full platform when you're ready.
          </p>
          <p className="text-sm text-[#06b6d4] mb-8">
            NGOs receive complimentary advisory services. No exceptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("assessment")}
              className="px-8 py-4 bg-[#06b6d4] hover:bg-cyan-400 text-[#0f2044] font-bold rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Start Free Assessment →
            </button>
            <button
              onClick={() => onNavigate("secureedge")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20"
            >
              About SecureEdge Advisory
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Powered by <span className="text-[#06b6d4] font-semibold">AEGIS</span> — our AI engine that automates 75% of compliance work
          </p>
        </div>
      </section>

      {/* Framework trust bar */}
      <section className="bg-[#0a1830] py-4 px-4 overflow-x-auto">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="text-gray-500 text-xs font-medium whitespace-nowrap">Aligned to:</span>
          {FRAMEWORKS.map(f => (
            <span key={f} className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f2044] mb-3">The Problem We Solve</h2>
            <p className="text-gray-600">Why most SMBs are exposed — and don't know it</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-red-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-500 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-[#0f2044] mb-1">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f2044] mb-3">What SecureEdge GRC Gives You</h2>
            <p className="text-gray-600">Everything you need to understand and communicate your security posture</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUE_PROPS.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <v.icon className={`${v.color} mb-3`} size={28} />
                <h3 className="font-semibold text-[#0f2044] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-[#0f2044] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-gray-400">From zero to a board-ready risk report in under 30 minutes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Set Up", desc: "Enter your organization name, industry, and size. No account needed." },
              { step: "2", title: "Assess", desc: "Answer 80+ guided questions across 10 security domains." },
              { step: "3", title: "Score", desc: "FAIR engine calculates your maturity level and ALE risk exposure." },
              { step: "4", title: "Report", desc: "Download your pre-audit readiness report with a prioritized roadmap." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[#1a56db] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains preview */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f2044] mb-3">10 Security Domains Covered</h2>
            <p className="text-gray-600">Comprehensive coverage across your entire security program</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {DOMAINS_PREVIEW.map((d, i) => (
              <div key={i} className="bg-[#0f2044] text-white rounded-xl p-4 text-center text-sm font-medium hover:bg-[#1a56db] transition-colors cursor-default">
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why free */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🎁</div>
          <h2 className="text-3xl font-bold text-[#0f2044] mb-4">Why Is This Free?</h2>
          <p className="text-gray-700 text-lg mb-4">
            Security awareness shouldn't be gated behind enterprise pricing. Every organization — regardless of size or budget —
            deserves to understand their risk exposure.
          </p>
          <p className="text-gray-600 mb-4">
            SecureEdge GRC is our way of giving back to the community. The diagnosis is always free.
            If you need help fixing what you find, SecureEdge Advisory is here.
          </p>
          <p className="text-gray-600 mb-6">
            When you're ready for the full platform — risk registers, policy automation, evidence management, and audit trail — request beta access.
          </p>
          <div className="bg-white rounded-xl p-4 border border-emerald-200 inline-block">
            <p className="text-emerald-700 font-semibold">
              🌍 NGOs and non-profit organizations receive complimentary advisory services. No exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1a56db] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Know Your Risk?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Start your free assessment now. No registration. No credit card. No data stored.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("assessment")}
              className="px-8 py-4 bg-white text-[#1a56db] font-bold rounded-xl text-lg hover:bg-blue-50 transition-colors"
            >
              Start Free Assessment →
            </button>
            <a
              href="mailto:info@secureedgeadvisory.com?subject=SecureEdge%20GRC%20Enquiry"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
