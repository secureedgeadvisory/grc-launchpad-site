import {
  Shield, Brain, ArrowRight, CheckCircle,
  Eye, BarChart3, FileText, Users, Target, Zap,
  Globe, Activity, Mail, Server
} from "lucide-react";

interface PlatformPageProps {
  onNavigate: (page: string) => void;
}

const ARCHITECTURE_LAYERS = [
  {
    layer: "Layer 1",
    name: "Operational GRC",
    desc: "The living, breathing compliance program. Controls, policies, risks, tasks, evidence — all managed in real-time with immutable audit trail.",
    color: "#2563eb",
    items: ["Control lifecycle (6 stages)", "Policy lifecycle (4 stages)", "FAIR risk register", "Task management with guides", "Evidence collection and scoring", "Immutable audit trail"],
  },
  {
    layer: "Layer 2",
    name: "CertEdge Projection",
    desc: "Framework-specific views projected from operational state. Same data, different lens for each framework. Cross-framework credit is automatic.",
    color: "#7c3aed",
    items: ["Framework control mapping", "Compliance gap analysis", "Certification readiness gate", "Cross-framework credit", "Auditor evidence packages", "Board-ready reports"],
  },
  {
    layer: "Layer 3",
    name: "AEGIS Automation",
    desc: "AI operates the system. Policies drafted, evidence scored, risks quantified — without human intervention. Connector-driven continuous monitoring.",
    color: "#059669",
    items: ["Neural evidence analysis", "Auto policy generation", "FAIR risk quantification", "Issue auto-classification", "Task auto-creation", "Connector integrations"],
  },
];

const COMMON_CONTROL_HUB = [
  { domain: "Governance", count: 6, icon: Shield },
  { domain: "Access Control", count: 7, icon: Shield },
  { domain: "People Security", count: 5, icon: Users },
  { domain: "Data & Asset Protection", count: 7, icon: Eye },
  { domain: "Network & Systems", count: 6, icon: Globe },
  { domain: "Incident Management", count: 5, icon: Activity },
  { domain: "Business Continuity", count: 5, icon: Zap },
  { domain: "Supplier Risk", count: 5, icon: Users },
  { domain: "Physical Security", count: 4, icon: Shield },
  { domain: "Compliance & Audit", count: 4, icon: FileText },
  { domain: "Secure Development", count: 5, icon: Target },
  { domain: "Endpoint Security", count: 5, icon: Server },
  { domain: "Privacy", count: 4, icon: Eye },
];

function scrollToContact() {
  document.getElementById("platform-contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function PlatformPage({ onNavigate }: PlatformPageProps) {
  return (
    <div className="min-h-screen">

      {/* ─── HERO (dark) ─── */}
      <section className="relative overflow-hidden bg-[#0a0f1e] pt-24 pb-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f1a3a] to-[#0a0f1e]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[100px]" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-sm font-semibold text-[#2563eb] tracking-[0.2em] uppercase mb-6">Platform Architecture</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
            Three Layers.
            <br />
            <span className="text-[#2563eb]">One Operating System.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            SecureEdge is built as an operating system for compliance — not a tool that records
            your manual work. Three distinct layers, one unified platform.
          </p>
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold rounded-lg text-lg transition-all"
          >
            Request Enterprise Demo
          </button>
        </div>
      </section>


      {/* ─── LAUNCHPAD FLOW (white) ─── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1b2b5e] mb-4 tracking-tight">
              LaunchPad-First Architecture
            </h2>
            <p className="text-lg text-[#1e293b]/70 max-w-xl mx-auto">
              Everything starts with a 15-minute assessment. YES/NO answers across 13 domains.
              From there, AEGIS generates everything.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center mb-12">
            {[
              { label: "LaunchPad", sub: "68 YES/NO", icon: Target },
              { label: "AEGIS Processes", sub: "AI generates", icon: Brain },
              { label: "Controls + Tasks", sub: "With guides", icon: CheckCircle },
              { label: "Policies", sub: "6-section", icon: FileText },
              { label: "Risks", sub: "FAIR quantified", icon: BarChart3 },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="border border-gray-200 rounded-xl p-5 text-center min-w-[130px] hover:border-[#2563eb]/30 hover:shadow-md transition-all">
                  <step.icon size={20} className="text-[#2563eb] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[#1b2b5e]">{step.label}</p>
                  <p className="text-xs text-gray-400">{step.sub}</p>
                </div>
                {i < 4 && <ArrowRight size={16} className="text-gray-300 hidden md:block shrink-0" />}
              </div>
            ))}
          </div>

          <div className="bg-[#1b2b5e]/5 border border-[#1b2b5e]/10 rounded-xl p-6 text-center">
            <p className="text-[#1e293b]">
              <span className="font-bold text-[#1b2b5e]">One assessment.</span>{" "}
              AEGIS generates your full GRC infrastructure — controls, policies, risks, tasks, and evidence templates.
              All mapped to your selected frameworks. All quantified with FAIR.
            </p>
          </div>
        </div>
      </section>


      {/* ─── THREE LAYERS (dark) ─── */}
      <section className="bg-[#0a0f1e] py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] tracking-[0.2em] uppercase mb-4">Architecture</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              The Three Layers
            </h2>
          </div>

          <div className="space-y-6">
            {ARCHITECTURE_LAYERS.map((layer, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 hover:bg-white/[0.05] transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: layer.color }}
                      >
                        {layer.layer}
                      </span>
                      <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{layer.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:w-[420px] shrink-0">
                    {layer.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-300 whitespace-nowrap">
                        <CheckCircle size={13} className="text-[#2563eb] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── COMMON CONTROL HUB (white) ─── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1b2b5e] mb-4 tracking-tight">
              Common Control Hub
            </h2>
            <p className="text-lg text-[#1e293b]/70 max-w-xl mx-auto">
              68 universal controls across 13 security domains. Evidence collected once, compliance projected everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {COMMON_CONTROL_HUB.map((d, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 hover:border-[#2563eb]/30 hover:shadow-md transition-all text-center">
                <d.icon size={20} className="text-[#2563eb] mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-[#1b2b5e] mb-1">{d.domain}</h3>
                <p className="text-xs text-gray-400">{d.count} controls</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Hub-and-spoke architecture. Add a new framework? Only the delta controls are new.
              Cross-framework credit is automatic.
            </p>
          </div>
        </div>
      </section>


      {/* ─── EVIDENCE MESH (dark) ─── */}
      <section className="bg-[#0a0f1e] py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] tracking-[0.2em] uppercase mb-4">Evidence Architecture</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Evidence Mesh
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Structured facts, not file dumps. Every proof point is typed, timestamped, scored, and linked.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Structured Facts, Not Files",
                desc: "Every evidence item is a typed, timestamped, structured fact. Screenshots have extracted text. Configs have parsed fields. Facts have schemas.",
              },
              {
                title: "Linked to Controls",
                desc: "Every evidence item is linked to the specific controls it proves. Upload once, automatically mapped across all frameworks that share the common control.",
              },
              {
                title: "Continuously Assembled",
                desc: "Evidence is assembled continuously as part of normal operations. When the auditor arrives, the package is already complete.",
              },
              {
                title: "AEGIS Scored",
                desc: "Every evidence item is scored for sufficiency, relevance, and recency. Controls with weak evidence are flagged before the auditor finds them.",
              },
            ].map((f, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.05] hover:border-[#2563eb]/20 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── DASHBOARD PREVIEW (white) ─── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b2b5e] mb-4 tracking-tight">
              Real-Time Compliance Visibility
            </h2>
          </div>

          {/* Dashboard mockup */}
          <div className="bg-[#0a0f1e] rounded-xl border border-gray-200 p-6 shadow-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
              <span className="text-[10px] text-gray-600 ml-3 font-mono">SecureEdge GRC — Dashboard</span>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {[
                { label: "Overall Compliance", value: "87%", color: "text-emerald-400" },
                { label: "Total ALE", value: "$247K", color: "text-red-400" },
                { label: "Controls Verified", value: "52/68", color: "text-[#2563eb]" },
                { label: "Open Issues", value: "3", color: "text-amber-400" },
              ].map((kpi, i) => (
                <div key={i} className="bg-white/[0.04] rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</div>
                  <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{kpi.label}</div>
                </div>
              ))}
            </div>

            {/* Framework bars */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-white/[0.03] rounded-xl p-4">
                <p className="text-xs text-gray-400 font-semibold mb-3">Framework Compliance</p>
                {[
                  { name: "NESA UAE", pct: 91, color: "bg-emerald-500" },
                  { name: "ISO 27001", pct: 78, color: "bg-[#2563eb]" },
                  { name: "SOC 2", pct: 64, color: "bg-amber-500" },
                ].map(fw => (
                  <div key={fw.name} className="mb-2">
                    <div className="flex justify-between text-[10px] text-gray-400 mb-0.5">
                      <span>{fw.name}</span><span>{fw.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full"><div className={`h-full ${fw.color} rounded-full`} style={{ width: `${fw.pct}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4">
                <p className="text-xs text-gray-400 font-semibold mb-3">Risk Exposure by Domain</p>
                {[
                  { name: "Access Control", ale: "$89K", severity: "high" },
                  { name: "Data Protection", ale: "$67K", severity: "high" },
                  { name: "Vendor Risk", ale: "$34K", severity: "medium" },
                  { name: "Incident Mgmt", ale: "$21K", severity: "low" },
                ].map(r => (
                  <div key={r.name} className="flex justify-between items-center text-[10px] py-1 border-b border-white/[0.03]">
                    <span className="text-gray-300">{r.name}</span>
                    <span className={`font-mono font-bold ${r.severity === "high" ? "text-red-400" : r.severity === "medium" ? "text-amber-400" : "text-emerald-400"}`}>{r.ale}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder areas */}
            <div className="grid grid-cols-3 gap-3">
              {["Recent Activity", "Upcoming Reviews", "AEGIS Actions"].map(label => (
                <div key={label} className="bg-white/[0.02] rounded-xl p-4 h-20 flex items-center justify-center">
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider font-mono">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ─── CTA (dark gradient) ─── */}
      <section id="platform-contact" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2b5e] via-[#0f1a3a] to-[#0a0f1e]" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            See It in Action
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Request an enterprise demo to explore the full platform. Or start with the free LaunchPad
            assessment to generate your GRC roadmap in 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:info@secureedgeadvisory.com?subject=SecureEdge Enterprise Demo Request"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold rounded-lg text-lg transition-all"
            >
              <Mail size={18} />
              Request Enterprise Demo
            </a>
            <button
              onClick={() => onNavigate("assessment")}
              className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg text-lg transition-colors border border-white/10"
            >
              Try Free Assessment
            </button>
          </div>
          <a
            href="mailto:info@secureedgeadvisory.com"
            className="text-gray-500 hover:text-[#2563eb] transition-colors text-sm"
          >
            info@secureedgeadvisory.com
          </a>
        </div>
      </section>
    </div>
  );
}
