import { useState } from "react";
import { Shield, ChevronRight, ChevronLeft, CheckCircle, AlertCircle, XCircle, MinusCircle } from "lucide-react";
import { DOMAINS, INDUSTRIES, ORG_SIZES } from "../data/assessmentData";
import { calculateResults } from "../utils/fairCalculator";
import type { AssessmentResult } from "../utils/fairCalculator";
import ResultsPage from "./ResultsPage";

type Answer = "yes" | "partial" | "no" | "na";

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
  const domainAnswered = domain.questions.every(q => answers[q.id] !== undefined);

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

  if (step === "results" && results) {
    return <ResultsPage results={results} onRestart={handleRestart} />;
  }

  if (step === "setup") {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-[#0f2044] rounded-xl p-3">
                <Shield size={28} className="text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-[#0f2044] mb-2">GRC Launchpad Assessment</h1>
            <p className="text-gray-600">Free pre-audit security assessment powered by FAIR methodology</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-semibold text-[#0f2044] mb-6">Tell us about your organization</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization Name *</label>
                <input
                  type="text"
                  value={orgName}
                  onChange={e => setOrgName(e.target.value)}
                  placeholder="e.g. Acme Technologies LLC"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Industry *</label>
                <select
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] bg-white"
                >
                  <option value="">Select your industry</option>
                  {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
                {industry === "NGO / Non-Profit" && (
                  <p className="mt-2 text-sm text-emerald-600 bg-emerald-50 rounded-lg px-3 py-2">
                    🌍 NGOs receive complimentary advisory services from SecureEdge Advisory.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization Size *</label>
                <select
                  value={orgSize}
                  onChange={e => setOrgSize(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] bg-white"
                >
                  <option value="">Select organization size</option>
                  {ORG_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-2">
                <Shield size={16} className="text-[#1a56db] mt-0.5 shrink-0" />
                <p className="text-xs text-blue-700">
                  <strong>Privacy guarantee:</strong> Your answers never leave your browser. No data is stored, transmitted, or tracked.
                  This assessment runs entirely on your device. © 2026 SecureEdge Advisory.
                </p>
              </div>
            </div>

            <button
              onClick={handleSetup}
              disabled={!orgName.trim() || !industry || !orgSize}
              className="mt-6 w-full py-4 bg-[#1a56db] hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold rounded-xl transition-colors text-lg"
            >
              Begin Assessment →
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Domains", value: "10" },
              { label: "Questions", value: "80+" },
              { label: "Time", value: "~25 min" }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-[#1a56db]">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Assessment step
  const progress = Math.round((answeredQuestions / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Assessing: <span className="font-medium text-gray-700">{orgName}</span></p>
              <p className="text-sm font-semibold text-[#0f2044]">Domain {currentDomain + 1} of {DOMAINS.length}: {domain.name}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#1a56db]">{progress}%</p>
              <p className="text-xs text-gray-500">complete</p>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-[#1a56db] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Domain tabs */}
          <div className="flex gap-1 mt-3 overflow-x-auto pb-1">
            {DOMAINS.map((d, i) => {
              const domainAnsweredCount = d.questions.filter(q => answers[q.id] !== undefined).length;
              const isDone = domainAnsweredCount === d.questions.length;
              const isActive = i === currentDomain;
              return (
                <button
                  key={d.id}
                  onClick={() => setCurrentDomain(i)}
                  className={`shrink-0 px-2 py-1 rounded-lg text-xs font-medium transition-colors ${
                    isActive ? "bg-[#1a56db] text-white" :
                    isDone ? "bg-emerald-100 text-emerald-700" :
                    "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}. {d.name.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Domain questions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-start gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="bg-[#0f2044] rounded-xl p-2.5">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0f2044]">{domain.name}</h2>
              <p className="text-gray-500 text-sm">{domain.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {domain.questions.map((q, qi) => (
              <div key={q.id} className={`p-4 rounded-xl border-2 transition-colors ${
                answers[q.id] ? "border-[#1a56db]/20 bg-blue-50/30" : "border-gray-100"
              }`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-[#0f2044] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {qi + 1}
                  </span>
                  <p className="text-sm font-medium text-gray-800">{q.text}</p>
                </div>
                <div className="flex flex-wrap gap-2 pl-9">
                  {(["yes", "partial", "no", "na"] as Answer[]).map(opt => {
                    const isSelected = answers[q.id] === opt;
                    const configs = {
                      yes: { label: "Yes", icon: CheckCircle, color: isSelected ? "bg-emerald-500 text-white border-emerald-500" : "border-gray-200 text-gray-600 hover:border-emerald-300 hover:bg-emerald-50" },
                      partial: { label: "Partial", icon: AlertCircle, color: isSelected ? "bg-amber-500 text-white border-amber-500" : "border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50" },
                      no: { label: "No", icon: XCircle, color: isSelected ? "bg-red-500 text-white border-red-500" : "border-gray-200 text-gray-600 hover:border-red-300 hover:bg-red-50" },
                      na: { label: "N/A", icon: MinusCircle, color: isSelected ? "bg-gray-500 text-white border-gray-500" : "border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50" },
                    };
                    const cfg = configs[opt];
                    return (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(q.id, opt)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 text-xs font-semibold transition-all ${cfg.color}`}
                      >
                        <cfg.icon size={13} />
                        {cfg.label}
                      </button>
                    );
                  })}
                </div>
                <div className="pl-9 mt-2 flex flex-wrap gap-1">
                  {q.frameworks.slice(0, 3).map(f => (
                    <span key={f} className="text-xs text-gray-400 bg-gray-100 rounded px-2 py-0.5">{f}</span>
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
            className="flex items-center gap-2 px-5 py-3 border-2 border-gray-200 rounded-xl text-gray-600 font-medium hover:border-gray-300 disabled:opacity-40 transition-colors"
          >
            <ChevronLeft size={18} /> Previous
          </button>

          <span className="text-sm text-gray-500">
            {domain.questions.filter(q => answers[q.id]).length}/{domain.questions.length} answered
          </span>

          <button
            onClick={handleNext}
            disabled={!domainAnswered}
            className="flex items-center gap-2 px-6 py-3 bg-[#1a56db] hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold rounded-xl transition-colors"
          >
            {currentDomain === DOMAINS.length - 1 ? "Generate Report" : "Next Domain"}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
