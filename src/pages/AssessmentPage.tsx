import { useState } from "react";
import { Shield, ChevronRight, ChevronLeft, CheckCircle, AlertCircle, XCircle, MinusCircle, Brain, Mail, BarChart3 } from "lucide-react";
import { DOMAINS, INDUSTRIES, ORG_SIZES } from "../data/assessmentData";
import { calculateResults } from "../utils/fairCalculator";
import type { AssessmentResult } from "../utils/fairCalculator";

type Answer = "yes" | "partial" | "no" | "na";

function formatCurrency(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

export default function AssessmentPage() {
  const [step, setStep] = useState<"setup" | "assessment" | "results">("setup");
  const [orgName, setOrgName] = useState("");
  const [industry, setIndustry] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [currentDomain, setCurrentDomain] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const domain = DOMAINS[currentDomain];
  const totalQuestions = DOMAINS.reduce((s, d) => s + d.questions.length, 0);
  const answeredQuestions = Object.keys(answers).length;
  const domainAnswered = domain?.questions.every(q => answers[q.id] !== undefined);

  function handleSetup() {
    if (!orgName.trim() || !industry || !orgSize) return;
    setStep("assessment");
  }

  function handleAnswer(qId: string, answer: Answer) {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  }

  function handleNext() {
    if (currentDomain < DOMAINS.length - 1) {
      setCurrentDomain(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      const r = calculateResults(answers, DOMAINS, industry, orgName, orgSize);
      setResults(r);
      setStep("results");
      window.scrollTo(0, 0);
    }
  }

  function handleBack() {
    if (currentDomain > 0) {
      setCurrentDomain(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  }

  function handleRestart() {
    setStep("setup");
    setOrgName("");
    setIndustry("");
    setOrgSize("");
    setCurrentDomain(0);
    setAnswers({});
    setResults(null);
  }

  // ─── RESULTS (TEASER) ───
  if (step === "results" && results) {
    const sortedDomains = [...results.domains].sort((a, b) => b.ale - a.ale);

    return (
      <div className="min-h-screen bg-[#0a0f1e] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Brain size={18} className="text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">AEGIS LaunchPad Assessment</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">{results.orgName}</h1>
                <p className="text-gray-400 text-sm">{results.industry} &middot; {results.orgSize}</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">{results.overallScore}%</div>
                <div className="text-sm text-gray-400">Overall Maturity</div>
                <div className={`mt-1 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                  results.auditReadiness === "green" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                  results.auditReadiness === "amber" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                  "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {results.auditReadiness === "green" ? "Audit Ready" : results.auditReadiness === "amber" ? "Needs Improvement" : "High Risk"}
                </div>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Overall Maturity", value: `L${results.overallMaturity}`, sub: results.overallMaturityLabel, color: "text-blue-400" },
              { label: "Total Annual Risk", value: formatCurrency(results.totalALE), sub: "Annualized Loss", color: "text-red-400" },
              { label: "Domains Assessed", value: `${DOMAINS.length}`, sub: "Security domains", color: "text-emerald-400" },
              { label: "Questions", value: `${totalQuestions}`, sub: "Controls evaluated", color: "text-purple-400" },
            ].map((k, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
                <div className={`text-2xl font-bold ${k.color}`}>{k.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{k.sub}</div>
                <div className="text-xs font-medium text-gray-400 mt-1">{k.label}</div>
              </div>
            ))}
          </div>

          {/* Domain scores */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-400" />
              Maturity by Domain
            </h2>
            <div className="space-y-3">
              {sortedDomains.map(d => {
                const pct = d.maxScore > 0 ? Math.round((d.score / d.maxScore) * 100) : 0;
                return (
                  <div key={d.domainId}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{d.domainName}</span>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono ${d.auditStatus === "green" ? "text-emerald-400" : d.auditStatus === "amber" ? "text-amber-400" : "text-red-400"}`}>
                          {formatCurrency(d.ale)} ALE
                        </span>
                        <span className="text-gray-400 font-mono text-xs w-10 text-right">{pct}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full">
                      <div
                        className={`h-full rounded-full transition-all ${
                          d.auditStatus === "green" ? "bg-emerald-500" :
                          d.auditStatus === "amber" ? "bg-amber-500" : "bg-red-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Teaser CTA */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center mb-8">
            <Brain size={32} className="text-[#2563eb] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">See your full roadmap — request a demo</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              The full SecureEdge platform generates your complete GRC infrastructure from this assessment:
              FAIR-quantified risk register, framework-aligned policies, control tasks with step-by-step guides,
              evidence templates, and a 30/60/90-day remediation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:info@secureedgeadvisory.com?subject=SecureEdge Enterprise Demo — ${results.orgName}&body=Assessment Score: ${results.overallScore}%25%0AIndustry: ${results.industry}%0AMaturity: L${results.overallMaturity}%0ATotal ALE: ${formatCurrency(results.totalALE)}%0A%0AI would like to schedule an enterprise demo.`}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold rounded-xl text-lg transition-all"
              >
                <Mail size={18} />
                Request Enterprise Demo
              </a>
              <button
                onClick={handleRestart}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-lg transition-colors border border-white/10"
              >
                New Assessment
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600">
            This assessment runs entirely in your browser. No data was transmitted or stored.
          </p>
        </div>
      </div>
    );
  }

  // ─── SETUP ───
  if (step === "setup") {
    return (
      <div className="min-h-screen bg-[#0a0f1e] py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-400 mb-6">
              <Shield size={14} />
              <span>Free &middot; No registration &middot; Privacy by design</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">GRC LaunchPad Assessment</h1>
            <p className="text-gray-400">13 domains &middot; {totalQuestions} questions &middot; ~15 minutes</p>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6">Tell us about your organization</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Organization Name *</label>
                <input
                  type="text"
                  value={orgName}
                  onChange={e => setOrgName(e.target.value)}
                  placeholder="e.g. Acme Technologies LLC"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Industry *</label>
                <select
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="" className="bg-[#0d1322]">Select your industry</option>
                  {INDUSTRIES.map(i => <option key={i} value={i} className="bg-[#0d1322]">{i}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Organization Size *</label>
                <select
                  value={orgSize}
                  onChange={e => setOrgSize(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="" className="bg-[#0d1322]">Select organization size</option>
                  {ORG_SIZES.map(s => <option key={s} value={s} className="bg-[#0d1322]">{s}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <div className="flex items-start gap-2">
                <Shield size={14} className="text-blue-400 mt-0.5 shrink-0" />
                <p className="text-xs text-gray-400">
                  <span className="text-blue-400 font-semibold">Privacy guarantee:</span> Your answers never leave your browser. No data is stored, transmitted, or tracked.
                </p>
              </div>
            </div>

            <button
              onClick={handleSetup}
              disabled={!orgName.trim() || !industry || !orgSize}
              className="mt-6 w-full py-4 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#3b82f6] hover:to-[#8b5cf6] disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-500 text-white font-bold rounded-xl transition-all text-lg"
            >
              Begin Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── ASSESSMENT ───
  const progress = Math.round((answeredQuestions / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-[#0a0f1e] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress header */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Assessing: <span className="font-medium text-gray-300">{orgName}</span></p>
              <p className="text-sm font-semibold text-white">Domain {currentDomain + 1} of {DOMAINS.length}: {domain.name}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">{progress}%</p>
              <p className="text-xs text-gray-500">complete</p>
            </div>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Domain tabs */}
          <div className="flex gap-1 mt-3 overflow-x-auto pb-1">
            {DOMAINS.map((d, i) => {
              const domainDone = d.questions.every(q => answers[q.id] !== undefined);
              const isActive = i === currentDomain;
              return (
                <button
                  key={d.id}
                  onClick={() => setCurrentDomain(i)}
                  className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    isActive ? "bg-blue-600 text-white" :
                    domainDone ? "bg-emerald-500/20 text-emerald-400" :
                    "bg-white/5 text-gray-500 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Domain questions */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-3 mb-6 pb-4 border-b border-white/5">
            <div className="bg-blue-600/20 rounded-xl p-2.5">
              <Shield size={20} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{domain.name}</h2>
              <p className="text-gray-500 text-sm">{domain.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {domain.questions.map((q, qi) => (
              <div key={q.id} className={`p-4 rounded-xl border transition-colors ${
                answers[q.id] ? "border-blue-500/20 bg-blue-500/5" : "border-white/[0.06]"
              }`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {qi + 1}
                  </span>
                  <p className="text-sm font-medium text-gray-200">{q.text}</p>
                </div>
                <div className="flex flex-wrap gap-2 pl-9">
                  {(["yes", "partial", "no", "na"] as Answer[]).map(opt => {
                    const isSelected = answers[q.id] === opt;
                    const configs = {
                      yes: { label: "Yes", icon: CheckCircle, color: isSelected ? "bg-emerald-500 text-white border-emerald-500" : "border-white/10 text-gray-400 hover:border-emerald-500/30 hover:bg-emerald-500/10" },
                      partial: { label: "Partial", icon: AlertCircle, color: isSelected ? "bg-amber-500 text-white border-amber-500" : "border-white/10 text-gray-400 hover:border-amber-500/30 hover:bg-amber-500/10" },
                      no: { label: "No", icon: XCircle, color: isSelected ? "bg-red-500 text-white border-red-500" : "border-white/10 text-gray-400 hover:border-red-500/30 hover:bg-red-500/10" },
                      na: { label: "N/A", icon: MinusCircle, color: isSelected ? "bg-gray-500 text-white border-gray-500" : "border-white/10 text-gray-400 hover:border-gray-500/30 hover:bg-gray-500/10" },
                    };
                    const cfg = configs[opt];
                    return (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(q.id, opt)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${cfg.color}`}
                      >
                        <cfg.icon size={13} />
                        {cfg.label}
                      </button>
                    );
                  })}
                </div>
                <div className="pl-9 mt-2 flex flex-wrap gap-1">
                  {q.frameworks.slice(0, 3).map(f => (
                    <span key={f} className="text-xs text-gray-600 bg-white/5 rounded px-2 py-0.5">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentDomain === 0}
            className="flex items-center gap-2 px-5 py-3 border border-white/10 rounded-xl text-gray-400 font-medium hover:border-white/20 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={18} /> Previous
          </button>

          <span className="text-sm text-gray-500">
            {domain.questions.filter(q => answers[q.id]).length}/{domain.questions.length} answered
          </span>

          <button
            onClick={handleNext}
            disabled={!domainAnswered}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#3b82f6] hover:to-[#8b5cf6] disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-500 text-white font-bold rounded-xl transition-all"
          >
            {currentDomain === DOMAINS.length - 1 ? "Generate Report" : "Next Domain"}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
