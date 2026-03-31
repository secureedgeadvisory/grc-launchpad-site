import { Shield, BarChart3, FileText, Lock, Globe, Zap, AlertTriangle, CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const FRAMEWORKS = [
  { name: "NESA UAE", abbr: "NESA", color: "from-red-500 to-red-600", desc: "UAE National Cybersecurity" },
  { name: "ISO 27001", abbr: "ISO", color: "from-blue-500 to-blue-600", desc: "Information Security" },
  { name: "NIST 800-53", abbr: "NIST", color: "from-indigo-500 to-indigo-600", desc: "Security Controls" },
  { name: "FAIR", abbr: "FAIR", color: "from-emerald-500 to-emerald-600", desc: "Risk Quantification" },
  { name: "CIS v8", abbr: "CIS", color: "from-amber-500 to-amber-600", desc: "Critical Controls" },
  { name: "GDPR", abbr: "GDPR", color: "from-purple-500 to-purple-600", desc: "Data Protection" },
  { name: "SOX", abbr: "SOX", color: "from-cyan-500 to-cyan-600", desc: "Financial Compliance" },
  { name: "UAE PDPL", abbr: "PDPL", color: "from-rose-500 to-rose-600", desc: "Privacy Law" },
];

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
      {/* Hero with visual dashboard */}
      <section className="bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0f2044] text-white pt-16 pb-8 px-4 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1a56db]/30 border border-[#1a56db]/50 rounded-full px-4 py-1.5 text-sm text-[#06b6d4] mb-6">
                <Shield size={14} />
                <span>Free assessment · No registration · Privacy by design</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Enterprise GRC.<br />
                <span className="text-[#06b6d4]">Zero Complexity.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                AI-powered governance, risk & compliance for UAE & GCC organizations.
                Start with a free assessment — upgrade to the full platform when you're ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={() => onNavigate("assessment")}
                  className="px-7 py-3.5 bg-[#06b6d4] hover:bg-cyan-400 text-[#0f2044] font-bold rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                >
                  Start Free Assessment →
                </button>
                <button
                  onClick={() => onNavigate("secureedge")}
                  className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20"
                >
                  About SecureEdge
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Powered by <span className="text-[#06b6d4] font-semibold">AEGIS</span> — our AI engine that automates 75% of compliance work
              </p>
            </div>

            {/* Right: Visual dashboard mockup */}
            <div className="relative hidden lg:block">
              <div className="bg-[#0a1830] rounded-2xl border border-white/10 shadow-2xl shadow-black/30 p-5 relative">
                {/* Browser dots */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="text-[10px] text-gray-600 ml-2">SecureEdge GRC Dashboard</span>
                </div>

                {/* Mock KPIs */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <CheckCircle size={14} className="text-emerald-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">87%</div>
                    <div className="text-[8px] text-gray-500 uppercase">Compliance</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <DollarSign size={14} className="text-red-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">$247K</div>
                    <div className="text-[8px] text-gray-500 uppercase">Total ALE</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <TrendingUp size={14} className="text-cyan-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">18/25</div>
                    <div className="text-[8px] text-gray-500 uppercase">Controls</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Users size={14} className="text-purple-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">5</div>
                    <div className="text-[8px] text-gray-500 uppercase">Roles</div>
                  </div>
                </div>

                {/* Mock framework bars */}
                <div className="space-y-2 mb-4">
                  {[
                    { name: "NESA UAE", pct: 87, color: "from-emerald-500 to-emerald-400" },
                    { name: "ISO 27001", pct: 64, color: "from-blue-500 to-blue-400" },
                    { name: "NIST 800-53", pct: 52, color: "from-amber-500 to-amber-400" },
                  ].map(fw => (
                    <div key={fw.name}>
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] text-gray-400 font-medium">{fw.name}</span>
                        <span className="text-[10px] text-gray-500 font-mono">{fw.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${fw.color} rounded-full`} style={{ width: `${fw.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mock risk rows */}
                <div className="space-y-1.5">
                  {[
                    { ref: "RSK-001", title: "Access control gap", pri: "Critical", ale: "$89K", c: "bg-red-500" },
                    { ref: "RSK-002", title: "Unencrypted data", pri: "High", ale: "$67K", c: "bg-orange-500" },
                    { ref: "RSK-003", title: "No vendor assessment", pri: "Medium", ale: "$34K", c: "bg-amber-500" },
                  ].map(r => (
                    <div key={r.ref} className="bg-white/5 rounded px-3 py-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-cyan-400 font-mono">{r.ref}</span>
                        <span className="text-[10px] text-gray-300">{r.title}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`${r.c} text-[7px] text-white px-1.5 py-0.5 rounded font-bold`}>{r.pri}</span>
                        <span className="text-[9px] text-gray-400 font-mono">{r.ale}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Glow effect */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#06b6d4]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#1a56db]/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework logos bar */}
      <section className="bg-[#0a1830] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Frameworks we cover</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {FRAMEWORKS.map(fw => (
              <div key={fw.abbr} className="flex flex-col items-center gap-2 group cursor-default">
                <div className={`w-14 h-14 bg-gradient-to-br ${fw.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-sm font-black text-white tracking-tight">{fw.abbr}</span>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-semibold text-white">{fw.name}</div>
                  <div className="text-[8px] text-gray-500">{fw.desc}</div>
                </div>
              </div>
            ))}
          </div>
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
