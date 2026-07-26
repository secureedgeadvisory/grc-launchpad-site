import {
  Shield, Zap, FileText, BarChart3, Users,
  Eye, Globe, AlertTriangle, Mail,
  Layers, Activity, Server, Check
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const FRAMEWORKS = [
  { name: "NESA UAE", abbr: "NESA" },
  { name: "ISO 27001", abbr: "ISO" },
  { name: "SOC 2", abbr: "SOC2" },
  { name: "NIST 800-53", abbr: "NIST" },
  { name: "GDPR", abbr: "GDPR" },
  { name: "PCI DSS", abbr: "PCI" },
  { name: "HIPAA", abbr: "HIPAA" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (dark)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0a0f1e] pt-24 pb-32 px-4">
        {/* Geometric grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f1a3a] to-[#0a0f1e]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#2563eb]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
            Enterprise Compliance.
            <br />
            <span className="text-[#2563eb]">Automated.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            AEGIS AI operates your compliance program — from assessment to certification.
            <br className="hidden sm:block" />
            Not another dashboard. <span className="text-white font-medium">An operating system.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@secureedgeadvisory.com?subject=SecureEdge Enterprise Demo Request"
              className="px-10 py-4 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold rounded-lg text-lg transition-all inline-block"
            >
              Request Enterprise Demo
            </a>
            <button
              onClick={() => onNavigate("platform")}
              className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg text-lg transition-colors border border-white/10"
            >
              Explore Platform
            </button>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — THE PROBLEM (white)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1b2b5e] mb-4 tracking-tight">
              GRC is broken. Here's why.
            </h2>
            <div className="w-16 h-0.5 bg-[#2563eb] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "80%",
                desc: "of compliance activities are humans asking humans for data",
                icon: Users,
              },
              {
                stat: "$4.2M",
                desc: "average cost of non-compliance per organization",
                icon: BarChart3,
              },
              {
                stat: "6-12 mo",
                desc: "to achieve first certification manually",
                icon: AlertTriangle,
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-8">
                <item.icon size={28} className="text-[#2563eb] mx-auto mb-5" />
                <div className="text-5xl font-bold text-[#1b2b5e] mb-3">{item.stat}</div>
                <p className="text-[#1e293b]/70 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — THE PLATFORM (dark)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0f1e] py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              One Platform. Every Framework.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              68 universal controls map to every framework. Prove once. Comply everywhere.
            </p>
          </div>

          {/* Hub and spoke diagram */}
          <div className="relative max-w-lg mx-auto py-8">
            {/* Center hub */}
            <div className="relative z-10 mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-[#1b2b5e] to-[#2563eb] flex items-center justify-center border border-[#2563eb]/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">68</div>
                <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">Universal<br/>Controls</div>
              </div>
            </div>

            {/* Framework badges arranged around */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {FRAMEWORKS.map((fw) => (
                <div
                  key={fw.name}
                  className="bg-white/[0.06] border border-white/10 rounded-lg px-5 py-3 text-center hover:border-[#2563eb]/30 transition-colors"
                >
                  <div className="text-sm font-semibold text-white">{fw.name}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              Common control hub with bidirectional framework mapping. Add a new framework in hours, not months.
            </p>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — AEGIS (gradient)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2b5e] via-[#0f1a3a] to-[#0a0f1e]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(37,99,235,0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] tracking-[0.2em] uppercase mb-4">Compliance Intelligence</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Meet AEGIS
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your Compliance Intelligence Engine. Four autonomous engines that operate your compliance program
              without human intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Eye,
                title: "Evidence Analysis Engine",
                desc: "Neural analysis of uploaded evidence against control requirements. Scores accuracy, identifies gaps, recommends improvements. Every evidence item is typed, timestamped, and linked to the controls it proves.",
                tech: "Neural evidence analysis",
              },
              {
                icon: BarChart3,
                title: "Risk Quantification Engine",
                desc: "FAIR-based financial risk modeling. Translates security posture into dollar impact for board-level reporting. Every risk has an Annualized Loss Expectancy — not a traffic light.",
                tech: "FAIR-based risk quantification",
              },
              {
                icon: FileText,
                title: "Policy Generation Engine",
                desc: "Auto-generates domain-specific policies from assessment data. Six-section structure, framework-aligned, version-controlled. Maintains review cadence and separation of duties.",
                tech: "Autonomous policy intelligence",
              },
              {
                icon: Activity,
                title: "Continuous Monitoring Engine",
                desc: "Connector-driven evidence collection from Okta, AWS, GitHub, and more. Operating effectiveness validation without human intervention. Control drift detection in real time.",
                tech: "Continuous control monitoring",
              },
            ].map((cap, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 hover:bg-white/[0.06] hover:border-[#2563eb]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                    <cap.icon size={20} className="text-[#2563eb]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{cap.desc}</p>
                <span className="text-xs text-[#2563eb]/70 font-mono uppercase tracking-wider">{cap.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — MODULES (white)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1b2b5e] mb-4 tracking-tight">
              Purpose-Built for Enterprise GRC
            </h2>
            <div className="w-16 h-0.5 bg-[#2563eb] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: "CertEdge",
                desc: "Multi-framework certification management. Map controls once, project compliance across ISO 27001, SOC 2, NESA, NIST, and GDPR simultaneously. Cross-framework credit is automatic.",
                icon: Shield,
                accent: "#2563eb",
              },
              {
                name: "TrustEdge",
                desc: "Third-party risk management with vendor self-service portal. SIG Lite questionnaires, AEGIS scoring, and continuous monitoring. No spreadsheets. No chasing.",
                icon: Users,
                accent: "#7c3aed",
              },
              {
                name: "ImpactEdge",
                desc: "Business continuity planning and disaster recovery testing. BIA, BCP, DRP with automated recovery testing schedules and financial impact quantification.",
                icon: Zap,
                accent: "#0891b2",
              },
              {
                name: "MergeEdge",
                desc: "M&A cyber due diligence. Assess target company security posture, identify integration risks, and quantify remediation cost before close.",
                icon: Layers,
                accent: "#059669",
                badge: "Coming Soon",
              },
            ].map((m, i) => (
              <div key={i} className="group border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                {m.badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                    {m.badge}
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: `${m.accent}10` }}>
                  <m.icon size={20} style={{ color: m.accent }} />
                </div>
                <h3 className="text-xl font-bold text-[#1b2b5e] mb-3">{m.name}</h3>
                <p className="text-[#1e293b]/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — FRAMEWORKS (dark)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0f1e] py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Every Framework. One Assessment.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            68 universal controls power every framework. Evidence collected once, compliance projected everywhere.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {FRAMEWORKS.map((fw) => (
              <div
                key={fw.name}
                className="bg-white/[0.06] border border-white/10 rounded-lg px-6 py-4 hover:border-[#2563eb]/30 transition-colors"
              >
                <div className="text-base font-semibold text-white">{fw.name}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-8">
            <div className="flex items-center gap-2">
              <Server size={14} className="text-[#2563eb]" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-[#2563eb]" />
              <span>ISO 27001:2022</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-[#2563eb]" />
              <span>NESA UAE IA</span>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — WHY SECUREEDGE (white)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1b2b5e] mb-4 tracking-tight">
              Built Different
            </h2>
            <div className="w-16 h-0.5 bg-[#2563eb] mx-auto" />
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1b2b5e]">
                  <th className="py-4 pr-4 text-sm font-bold text-[#1b2b5e] uppercase tracking-wider w-[40%]">Capability</th>
                  <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider w-[30%]">Traditional GRC</th>
                  <th className="py-4 pl-4 text-sm font-bold text-[#2563eb] uppercase tracking-wider w-[30%]">SecureEdge</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cap: "First assessment", trad: "2-4 weeks", se: "15 minutes" },
                  { cap: "Evidence review", trad: "Manual, hours per control", se: "AEGIS automated" },
                  { cap: "Cross-framework credit", trad: "None", se: "Automatic" },
                  { cap: "Risk quantification", trad: "Qualitative (High/Med/Low)", se: "FAIR ($)" },
                  { cap: "Vendor assessment", trad: "Spreadsheets", se: "Self-service portal" },
                  { cap: "Board reporting", trad: "Days of preparation", se: "One click" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-4 pr-4 text-[#1e293b] font-medium">{row.cap}</td>
                    <td className="py-4 px-4 text-gray-400">{row.trad}</td>
                    <td className="py-4 pl-4 text-[#1b2b5e] font-semibold flex items-center gap-2">
                      <Check size={16} className="text-[#2563eb] shrink-0" />
                      {row.se}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — CTA (dark gradient)
      ═══════════════════════════════════════════════════════════ */}
      <section id="contact-section" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2b5e] via-[#0f1a3a] to-[#0a0f1e]" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready for Enterprise Compliance?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            See how AEGIS can operate your compliance program. Request a demo with our team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:info@secureedgeadvisory.com?subject=SecureEdge Enterprise Demo Request"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold rounded-lg text-lg transition-all"
            >
              <Mail size={18} />
              Request Demo
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
