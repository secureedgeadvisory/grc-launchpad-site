import {
  Shield, Brain, DollarSign, Link2, Globe, Sparkles, ShieldCheck,
  ClipboardCheck, BarChart3, FileText, Search, Users,
  Calendar, ArrowRight, CheckCircle, Lock,
  AlertTriangle, Eye,
  Layers, Target, Award
} from "lucide-react";

interface PlatformPageProps {
  onNavigate: (page: string) => void;
}

/* ─── Section 2: Pain Points ─── */
const PAIN_POINTS = [
  {
    stat: "$2,000/mo",
    title: "Enterprise GRC tools price out SMBs",
    desc: "You're left choosing between expensive platforms and unmanageable spreadsheets.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    stat: "78%",
    title: "of SMBs have no formal risk assessment",
    desc: "They discover gaps only when an auditor or attacker finds them first.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    stat: "Zero",
    title: "Visibility with spreadsheet GRC",
    desc: "No audit trail, no dollar values, no board visibility. Risks hide until they become incidents.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
];

/* ─── Section 3: Differentiators ─── */
const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "AEGIS AI Engine",
    desc: "Generates policies, quantifies risks with FAIR, analyzes evidence, and auto-closes tasks. 75% automation.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: DollarSign,
    title: "FAIR Risk Quantification",
    desc: "Every risk has a dollar value — Annual Loss Expectancy calculated from TEF, vulnerability, and loss magnitudes.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Link2,
    title: "3-Stage Control Lifecycle",
    desc: "Implement → Evidence → Review. Step-by-step guides, file upload, AI analysis, approval workflow with locking.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "Built for UAE & GCC",
    desc: "NESA, ISO 27001, NIST 800-53 with cross-framework bidirectional mapping. More frameworks coming.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Lock,
    title: "Immutable Audit Trail",
    desc: "Every action logged. Field-level change tracking. CSV export for auditors. Zero tampering.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Auditor-Ready Reports",
    desc: "Board reports, risk reports, compliance reports, evidence packages — all exportable as PDF.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

/* ─── Section 4: Steps ─── */
const STEPS = [
  {
    icon: ClipboardCheck,
    title: "1. Assess",
    desc: "Select your framework (NESA, ISO 27001, or NIST 800-53). Answer domain-by-domain questions. AEGIS maps your gaps and cross-framework overlaps.",
  },
  {
    icon: Sparkles,
    title: "2. AEGIS Launches",
    desc: "AI generates FAIR-quantified risks (ALE in dollars), framework-specific policies, grouped control tasks with step-by-step guides, and due dates scaled to your timeline.",
  },
  {
    icon: FileText,
    title: "3. Policies",
    desc: "Review AI-generated policies. Submit for approval. Admin approves with tracked ref numbers. Published policies lock and become audit evidence.",
  },
  {
    icon: AlertTriangle,
    title: "4. Risk Register",
    desc: "Every gap is a quantified risk. Full FAIR breakdown (TEF, vulnerability, LEF, ALE). Governed changes require approval. Risks auto-close when controls are completed.",
  },
  {
    icon: Shield,
    title: "5. Controls",
    desc: "3-stage lifecycle: Implement (rich guides) \u2192 Evidence (upload + AI analysis, min 5/10 to proceed) \u2192 Review (approval + locking). 98 controls covered.",
  },
  {
    icon: BarChart3,
    title: "6. Dashboard",
    desc: "Compliance %, certification readiness, risk heat maps, cross-framework cards, 6 report types (PDF), evidence package export. Board-ready in one click.",
  },
];

/* ─── Section 7: Roadmap ─── */
const ROADMAP = [
  {
    quarter: "Q2 2026",
    items: ["Additional frameworks (CIS, GDPR, SOC 2, PCI DSS)", "Email notifications", "Vendor management module", "Mobile responsive", "AEGIS Genie Bot (AI assistant)"],
    color: "bg-cyan-500",
  },
  {
    quarter: "Q3 2026",
    items: ["Operational GRC mode (continuous monitoring)", "Network scanner agent", "Cloud integrations (AWS/Azure)", "Stripe billing", "Multi-project support"],
    color: "bg-blue-500",
  },
];

/* ─── Section 8: Pricing ─── */
const BETA_FEATURES = [
  "3 frameworks (NESA, ISO 27001, NIST 800-53)",
  "AI-powered policy generation",
  "FAIR risk quantification",
  "Evidence management & AI analysis",
  "Approval workflows",
  "Immutable audit trail",
  "Board-ready reports",
  "Unlimited users during beta",
];

export default function PlatformPage({ onNavigate }: PlatformPageProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* ════════════════════════════ SECTION 1: HERO ════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0f2044] text-white py-24 px-4 relative overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#1a56db]/30 border border-[#1a56db]/50 rounded-full px-5 py-2 text-sm text-[#06b6d4] mb-8">
            <Sparkles size={14} />
            <span>Beta Access — Free During Early Access</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop Managing Compliance<br />
            <span className="text-[#06b6d4]">in Spreadsheets</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Powered by <span className="text-[#06b6d4] font-semibold">AEGIS</span> — our AI engine that automates 75% of compliance work.
            Quantify risk in dollars. Generate policies with AI. Deliver board-ready reports — in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:info@secureedgeadvisory.com?subject=SecureEdge%20GRC%20Beta%20Access%20Request&body=Hi%2C%20I%20would%20like%20to%20request%20beta%20access%20to%20SecureEdge%20GRC%20Platform."
              className="px-8 py-4 bg-[#06b6d4] hover:bg-cyan-400 text-[#0f2044] font-bold rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 inline-flex items-center justify-center gap-2"
            >
              Request Beta Access <ArrowRight size={18} />
            </a>
            <button
              onClick={() => onNavigate("assessment")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20 inline-flex items-center justify-center gap-2"
            >
              <Eye size={18} /> See How It Works
            </button>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="/pitch-deck.html"
              target="_blank"
              className="px-6 py-2.5 text-sm font-semibold rounded-xl transition-colors border border-white/30 hover:border-[#06b6d4] text-white/80 hover:text-[#06b6d4] inline-flex items-center justify-center gap-2"
            >
              <FileText size={15} /> Why SecureEdge GRC
            </a>
            <a
              href="/feature-workflows.html"
              target="_blank"
              className="px-6 py-2.5 text-sm font-semibold rounded-xl transition-colors border border-white/30 hover:border-[#06b6d4] text-white/80 hover:text-[#06b6d4] inline-flex items-center justify-center gap-2"
            >
              <Layers size={15} /> See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Trust badges bar */}
      <section className="bg-[#0a1830] py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="text-gray-500 text-xs font-medium whitespace-nowrap">Frameworks supported:</span>
          {["NESA UAE", "ISO 27001:2022", "NIST 800-53", "FAIR Methodology", "CIS v8 (Coming)", "GDPR (Coming)", "SOC 2 (Coming)", "PCI DSS (Coming)"].map(f => (
            <span key={f} className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════ SECTION 2: THE PROBLEM ════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044] mb-3">GRC Is Broken for SMBs</h2>
            <p className="text-gray-600 text-lg">The tools exist — they're just not built for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((p, i) => (
              <div
                key={i}
                className={`${p.bg} rounded-2xl p-8 border ${p.border} text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`text-4xl sm:text-5xl font-bold ${p.color} mb-3`}>{p.stat}</div>
                <h3 className="font-semibold text-[#0f2044] mb-2 text-lg">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 3: WHY SECUREEDGE ════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044] mb-3">We Built What Doesn't Exist Yet</h2>
            <p className="text-gray-600 text-lg">An AI-native GRC platform that does the work, so your team can focus on decisions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`${d.bg} rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <d.icon className={d.color} size={26} />
                </div>
                <h3 className="font-bold text-[#0f2044] mb-2 text-lg">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 4: HOW IT WORKS ════════════════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0f2044] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">From Zero to Board-Ready in 6 Steps</h2>
            <p className="text-gray-400 text-lg">A clear path from assessment to executive reporting</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center relative">
                {/* Horizontal connector to next step (not on 3rd or 6th) */}
                {i % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 z-0" />
                )}
                <div className="w-20 h-20 bg-gradient-to-br from-[#1a56db] to-[#06b6d4] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/25 relative z-10">
                  <s.icon size={32} className="text-white" />
                </div>
                <div className="text-[#06b6d4] text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 5: FEATURE SHOWCASE ════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044] mb-3">See It In Action</h2>
            <p className="text-gray-600 text-lg">Real platform modules. Real capabilities. Built and ready.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ── Card 1: Dashboard ── */}
            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0f2044] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-gray-500 text-xs ml-2">dashboard.secureedge-grc.com</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-[#1a56db]/30 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">72</div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-wider">Score</div>
                  </div>
                  <div className="bg-emerald-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400">L3</div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-wider">Maturity</div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-red-400">$847K</div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-wider">ALE</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded-lg p-2 flex items-center gap-2">
                    <AlertTriangle size={12} className="text-amber-400" />
                    <span className="text-xs text-gray-300">23 Open Risks</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 flex items-center gap-2">
                    <Layers size={12} className="text-cyan-400" />
                    <span className="text-xs text-gray-300">3 Frameworks</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0f2044] mb-1">Role-Based Dashboard</h3>
                <p className="text-gray-600 text-sm">Five tailored views for Owners, Admins, Members, Viewers, and Auditors. Everyone sees exactly what they need.</p>
              </div>
            </div>

            {/* ── Card 2: Risk Register ── */}
            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0f2044] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-gray-500 text-xs ml-2">risks.secureedge-grc.com</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { ref: "RSK-ACC-001", title: "No MFA Enforced", pri: "CRITICAL", ale: "$124K", status: "OPEN", priColor: "bg-red-500" },
                    { ref: "RSK-DAT-003", title: "Unencrypted PII Storage", pri: "HIGH", ale: "$89K", status: "IN_TREATMENT", priColor: "bg-orange-500" },
                    { ref: "RSK-NET-002", title: "Unpatched Firewalls", pri: "HIGH", ale: "$67K", status: "OPEN", priColor: "bg-orange-500" },
                    { ref: "RSK-VEN-001", title: "No Vendor Risk Assessment", pri: "MEDIUM", ale: "$34K", status: "ACCEPTED", priColor: "bg-amber-500" },
                  ].map((r, i) => (
                    <div key={i} className="bg-white/5 rounded-lg px-3 py-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[10px] text-cyan-400 font-mono shrink-0">{r.ref}</span>
                        <span className="text-xs text-gray-300 truncate">{r.title}</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className={`${r.priColor} text-[8px] text-white px-1.5 py-0.5 rounded font-bold`}>{r.pri}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{r.ale}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0f2044] mb-1">Risk Register</h3>
                <p className="text-gray-600 text-sm">Every risk quantified with FAIR. Governed changes, approval workflows, and full audit trail on every modification.</p>
              </div>
            </div>

            {/* ── Card 3: FAIR Analysis ── */}
            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0f2044] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-gray-500 text-xs ml-2">fair-analysis</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-purple-500/20 rounded-lg p-3">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">TEF</div>
                    <div className="text-xl font-bold text-purple-400">0.35</div>
                    <div className="text-[8px] text-gray-500">Threat Events/Year</div>
                  </div>
                  <div className="bg-amber-500/20 rounded-lg p-3">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Vulnerability</div>
                    <div className="text-xl font-bold text-amber-400">80%</div>
                    <div className="text-[8px] text-gray-500">Control Weakness</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">LEF</div>
                    <div className="text-xl font-bold text-blue-400">0.28</div>
                    <div className="text-[8px] text-gray-500">Loss Events/Year</div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">ALE</div>
                    <div className="text-xl font-bold text-red-400">$69.9K</div>
                    <div className="text-[8px] text-gray-500">Annual Loss</div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg px-3 py-2">
                  <span className="text-[10px] text-gray-500 font-mono">ALE = TEF(0.35) x Vuln(0.80) x Loss($249K) = $69,900</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0f2044] mb-1">FAIR Risk Quantification</h3>
                <p className="text-gray-600 text-sm">Every risk broken down into TEF, Vulnerability, LEF, and dollar-value ALE. Transparent methodology scaled by industry and org size.</p>
              </div>
            </div>

            {/* ── Card 4: AI Policy Generator ── */}
            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0f2044] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-gray-500 text-xs ml-2">ai-policy-generator</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={16} className="text-purple-400 animate-pulse" />
                  <span className="text-sm text-gray-300">Generating Access Control Policy...</span>
                </div>
                <div className="mb-3">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" style={{ width: "72%" }} />
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">Financial Services | ISO 27001 A.9</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 space-y-2">
                  <div className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">Generated Output</div>
                  <div className="text-[11px] text-gray-400 leading-relaxed">
                    <span className="text-white font-medium">1. Purpose:</span> This policy establishes requirements for logical access control across all information systems...
                  </div>
                  <div className="text-[11px] text-gray-400 leading-relaxed">
                    <span className="text-white font-medium">2. MFA Requirement:</span> All privileged and remote access shall require multi-factor authentication...
                  </div>
                  <div className="text-[11px] text-gray-500">...</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0f2044] mb-1">AI Policy Generator</h3>
                <p className="text-gray-600 text-sm">Claude AI generates complete, industry-tailored policies mapped to your selected frameworks. Draft to Published in minutes.</p>
              </div>
            </div>

            {/* ── Card 5: Compliance Tracker ── */}
            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0f2044] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-gray-500 text-xs ml-2">compliance-tracker</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "NESA UAE", pct: 100, color: "from-emerald-500 to-emerald-400" },
                    { name: "ISO 27001:2022", pct: 69, color: "from-blue-500 to-blue-400" },
                    { name: "NIST 800-53", pct: 51, color: "from-amber-500 to-amber-400" },
                    { name: "CIS Controls v8", pct: 56, color: "from-cyan-500 to-cyan-400" },
                  ].map((fw, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-300 font-medium">{fw.name}</span>
                        <span className="text-xs text-gray-400 font-mono">{fw.pct}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${fw.color} rounded-full`}
                          style={{ width: `${fw.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0f2044] mb-1">Compliance Tracker</h3>
                <p className="text-gray-600 text-sm">Track compliance across 8 frameworks simultaneously. Per-control status, confidence levels, and evidence linking.</p>
              </div>
            </div>

            {/* ── Card 6: Board Report ── */}
            <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#0f2044] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-gray-500 text-xs ml-2">board-report</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={12} className="text-cyan-400" />
                    <span className="text-xs text-white font-semibold">Executive Summary</span>
                    <span className="ml-auto bg-emerald-500/20 text-emerald-400 text-[8px] px-2 py-0.5 rounded-full font-bold">AI GENERATED</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">Organization shows Level 3 maturity with total ALE of $847K across 23 active risks. Key areas requiring attention: Access Control ($124K) and Data Protection ($89K)...</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { label: "ALE Trend", values: [60, 75, 85, 70, 55], color: "text-cyan-400" },
                  ].map((_, ci) => (
                    <div key={ci} className="col-span-2 bg-white/5 rounded-lg p-2">
                      <div className="text-[8px] text-gray-500 uppercase tracking-wider mb-2">ALE Trend ($K)</div>
                      <div className="flex items-end gap-1 h-10">
                        {[180, 210, 195, 160, 130].map((v, vi) => (
                          <div
                            key={vi}
                            className="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t"
                            style={{ height: `${(v / 210) * 100}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="bg-white/5 rounded-lg p-2 flex flex-col items-center justify-center">
                    <Award size={16} className="text-amber-400 mb-1" />
                    <div className="text-lg font-bold text-white">L3</div>
                    <div className="text-[8px] text-gray-500">Maturity</div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0f2044] mb-1">Board Reports</h3>
                <p className="text-gray-600 text-sm">AI-generated executive summaries, ALE trends, compliance percentages, and risk portfolio overview. One-click generation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 6: FULL FEATURE LIST ════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044] mb-3">Everything You Need. Nothing You Don't.</h2>
            <p className="text-gray-600 text-lg">72 pages, 40+ APIs, 98 control guides — built, deployed, and live</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Assessment & AI */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-blue-100 rounded-lg p-2"><Target size={18} className="text-blue-600" /></div>
                <h3 className="font-bold text-[#0f2044]">Assessment & AI</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "3 frameworks at launch (NESA, ISO 27001, NIST 800-53)",
                  "Domain-by-domain assessment flow",
                  "FAIR risk quantification (ALE in dollars)",
                  "Org-size priority thresholds",
                  "Cross-framework bidirectional mapping",
                  "Reassessment with risk reconciliation",
                  "Certification timeline scaling",
                  "AEGIS AI engine (75% automation)",
                  "AI policy generation (framework-specific)",
                  "AI evidence analyzer (score + auditor readiness)",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-blue-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Risk & Policies */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-emerald-100 rounded-lg p-2"><Shield size={18} className="text-emerald-600" /></div>
                <h3 className="font-bold text-[#0f2044]">Risk & Policies</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Risk register with full FAIR breakdown",
                  "Governed risk changes (approval required)",
                  "Auto-risk closure on control completion",
                  "Self-healing risk consistency checks",
                  "Policy lifecycle (Draft \u2192 Review \u2192 Published)",
                  "AI-generated auditor-ready policies",
                  "Policy approval with ref tracking",
                  "PDF export for all policies",
                  "Linked controls on risk detail",
                  "Domain hierarchy tree view",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Controls & Evidence */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-purple-100 rounded-lg p-2"><Search size={18} className="text-purple-600" /></div>
                <h3 className="font-bold text-[#0f2044]">Controls & Evidence</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "3-stage lifecycle (Implement \u2192 Evidence \u2192 Review)",
                  "98 rich step-by-step control guides",
                  "Evidence upload with DB audit trail",
                  "AI evidence scoring (min 5/10 to proceed)",
                  "Approval workflow with locking",
                  "Completed controls lock (forward-only)",
                  "18 downloadable templates (Excel/DOCX)",
                  "Compliance % dashboard (real-time)",
                  "Cross-framework compliance cards",
                  "Certification readiness indicator",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-purple-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Platform & Operations */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-amber-100 rounded-lg p-2"><Users size={18} className="text-amber-600" /></div>
                <h3 className="font-bold text-[#0f2044]">Platform & Operations</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Immutable audit trail (every action logged)",
                  "Field-level change tracking (old \u2192 new)",
                  "CSV export for auditors",
                  "5 roles (Owner, Admin, Member, Viewer, Auditor)",
                  "Access matrix with permission table",
                  "People & teams management",
                  "3-step onboarding (Company \u2192 Environment \u2192 Team)",
                  "6 report types with PDF export",
                  "Board reports with AI summaries",
                  "Compliance calendar (22 periodic reviews)",
                  "Audit findings with remediation workflow",
                  "Framework reference library",
                  "Email notifications (task, approval, overdue)",
                  "Auto-computed certification status",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 7: ROADMAP ════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044] mb-3">What's Coming Next</h2>
            <p className="text-gray-600 text-lg">We ship fast. Here's what's in the pipeline.</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-10">
              {ROADMAP.map((r, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className={`${r.color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg relative z-10`}>
                    <Calendar size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0f2044] text-lg mb-2">{r.quarter}</h3>
                    <div className="flex flex-wrap gap-2">
                      {r.items.map((item, j) => (
                        <span key={j} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg border border-gray-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 8: PRICING ════════════════════════════ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044] mb-3">Simple Pricing</h2>
            <p className="text-gray-600 text-lg">Full platform access during beta. No strings attached.</p>
          </div>
          <div className="bg-[#0f2044] text-white border-2 border-[#06b6d4] shadow-xl shadow-cyan-500/10 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#06b6d4] text-[#0f2044] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Early Access
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="font-bold text-2xl text-white mb-1">Early Access — Free</h3>
              <p className="text-gray-400 text-sm">Full platform access during beta. No credit card required.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {BETA_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle size={14} className="text-[#06b6d4] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:info@secureedgeadvisory.com?subject=SecureEdge%20GRC%20Beta%20Access%20Request"
              className="block w-full py-3 rounded-xl font-semibold text-sm text-center bg-[#06b6d4] hover:bg-cyan-400 text-[#0f2044] transition-all"
            >
              Request Beta Access
            </a>
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-6 py-3">
              <Globe size={16} className="text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">NGOs receive complimentary access. No exceptions.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SOCIAL PROOF ════════════════════════════ */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0f2044] mb-2">Built Different. On Purpose.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "74", label: "App Routes Built", sub: "Full platform, not a prototype" },
              { value: "36", label: "Database Models", sub: "Enterprise-grade data architecture" },
              { value: "35+", label: "API Endpoints", sub: "Every action is programmable" },
              { value: "8", label: "Frameworks", sub: "ISO, NIST, NESA, GDPR, SOX, PCI, CIS, PDPL" },
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="text-4xl sm:text-5xl font-bold text-[#1a56db] mb-1 group-hover:text-[#06b6d4] transition-colors">{s.value}</div>
                <div className="text-sm font-semibold text-[#0f2044] mb-1">{s.label}</div>
                <div className="text-xs text-gray-500">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#0f2044] flex items-center justify-center">
                  <Shield size={28} className="text-[#06b6d4]" />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "We built SecureEdge GRC because SMBs in the UAE and GCC deserve the same caliber of governance tools
                  that Fortune 500 companies use — without the Fortune 500 price tag. AI doesn't replace your judgment.
                  It eliminates the busywork so you can focus on what matters: reducing real risk."
                </p>
                <div className="mt-3">
                  <span className="font-bold text-[#0f2044]">Partha</span>
                  <span className="text-gray-500 text-sm"> · Founder, SecureEdge Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 9: CTA ════════════════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0f2044] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to See Your Real Risk Exposure?</h2>
          <p className="text-gray-300 text-lg mb-8">Start with a free assessment. Upgrade when you're ready.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => onNavigate("assessment")}
              className="px-8 py-4 bg-[#06b6d4] hover:bg-cyan-400 text-[#0f2044] font-bold rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 inline-flex items-center justify-center gap-2"
            >
              Start Free Assessment <ArrowRight size={18} />
            </button>
            <a
              href="mailto:info@secureedgeadvisory.com?subject=GRC Platform Access Request"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20 inline-flex items-center justify-center gap-2"
            >
              <Lock size={18} /> Request Platform Access
            </a>
          </div>
          <p className="text-gray-500 text-sm">No credit card · No sales calls · 25 minutes to your first report</p>
        </div>
      </section>
    </div>
  );
}
