import { useState } from "react";
import { Shield, CheckCircle, AlertTriangle, XCircle, ChevronDown, ChevronUp, Printer, RotateCcw, Mail } from "lucide-react";
import type { AssessmentResult, DomainScore } from "../utils/fairCalculator";

interface ResultsPageProps {
  results: AssessmentResult;
  onRestart: () => void;
}

function formatCurrency(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

function StatusBadge({ status }: { status: "green" | "amber" | "red" }) {
  const configs = {
    green: { label: "Audit Ready", bg: "bg-emerald-100 text-emerald-700 border-emerald-200" },
    amber: { label: "Needs Improvement", bg: "bg-amber-100 text-amber-700 border-amber-200" },
    red: { label: "High Risk", bg: "bg-red-100 text-red-700 border-red-200" },
  };
  const c = configs[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border ${c.bg}`}>
      {status === "green" ? <CheckCircle size={14} /> : status === "amber" ? <AlertTriangle size={14} /> : <XCircle size={14} />}
      {c.label}
    </span>
  );
}

function DomainCard({ domain }: { domain: DomainScore }) {
  const [expanded, setExpanded] = useState(false);
  const pct = domain.maxScore > 0 ? Math.round((domain.score / domain.maxScore) * 100) : 0;

  return (
    <div className={`bg-white rounded-xl border-2 shadow-sm ${
      domain.auditStatus === "green" ? "border-emerald-200" :
      domain.auditStatus === "amber" ? "border-amber-200" : "border-red-200"
    }`}>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-[#0f2044] text-sm">{domain.domainName}</h3>
            <div className="flex items-center gap-2 mt-1">
              <StatusBadge status={domain.auditStatus} />
              <span className="text-xs text-gray-500">Maturity: {domain.maturityLabel} (L{domain.maturityLevel})</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-2xl font-bold text-[#1a56db]">{pct}%</div>
            <div className="text-xs text-gray-500">score</div>
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
          <div
            className={`h-2 rounded-full transition-all ${
              domain.auditStatus === "green" ? "bg-emerald-500" :
              domain.auditStatus === "amber" ? "bg-amber-500" : "bg-red-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-gray-500">Annual Risk Exposure</div>
            <div className="font-bold text-red-600">{formatCurrency(domain.ale)}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-gray-500">Vulnerability</div>
            <div className="font-bold text-gray-700">{domain.vulnerabilityPct}%</div>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-xs text-[#1a56db] font-medium hover:underline"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Hide" : "Show"} FAIR details & recommendations
        </button>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 p-5 bg-gray-50 rounded-b-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4 text-xs">
            {[
              { label: "Threat Event Freq.", value: domain.tef.toFixed(2) },
              { label: "Loss Event Freq.", value: domain.lef.toFixed(2) },
              { label: "Primary Loss", value: formatCurrency(domain.primaryLoss) },
              { label: "Total Loss Magnitude", value: formatCurrency(domain.totalLoss) },
              { label: "ALE Low", value: formatCurrency(domain.aleLow) },
              { label: "ALE High", value: formatCurrency(domain.aleHigh) },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-2 border border-gray-100">
                <div className="text-gray-500">{item.label}</div>
                <div className="font-bold text-gray-800">{item.value}</div>
              </div>
            ))}
          </div>

          <h4 className="font-semibold text-[#0f2044] text-xs mb-2">Top Recommendations</h4>
          <ul className="space-y-1.5">
            {domain.recommendations.slice(0, 5).map((rec, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <span className={`shrink-0 mt-0.5 font-bold ${
                  i < 2 ? "text-red-500" : i < 4 ? "text-amber-500" : "text-blue-500"
                }`}>
                  {i < 2 ? "30d" : i < 4 ? "60d" : "90d"}
                </span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ResultsPage({ results, onRestart }: ResultsPageProps) {
  const sortedDomains = [...results.domains].sort((a, b) => b.ale - a.ale);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Report header */}
        <div className="bg-[#0f2044] text-white rounded-2xl p-6 mb-6 print:rounded-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield size={20} className="text-[#06b6d4]" />
                <span className="text-[#06b6d4] font-semibold text-sm">GRC Launchpad™ Pre-Audit Report</span>
              </div>
              <h1 className="text-2xl font-bold mb-1">{results.orgName}</h1>
              <p className="text-gray-400 text-sm">{results.industry} · {results.orgSize}</p>
              <p className="text-gray-500 text-xs mt-1">Generated: {results.completedAt}</p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-5xl font-bold text-[#06b6d4]">{results.overallScore}%</div>
              <div className="text-gray-400 text-sm">Overall Score</div>
              <div className="mt-1">
                <StatusBadge status={results.auditReadiness} />
              </div>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Overall Maturity", value: `L${results.overallMaturity}`, sub: results.overallMaturityLabel, color: "text-[#1a56db]" },
            { label: "Total Annual Risk", value: formatCurrency(results.totalALE), sub: "Annualized Loss Exposure", color: "text-red-600" },
            { label: "Domains Assessed", value: "10", sub: "Security domains", color: "text-emerald-600" },
            { label: "Audit Readiness", value: results.auditReadiness === "green" ? "Ready" : results.auditReadiness === "amber" ? "Partial" : "Not Ready", sub: "Current status", color: results.auditReadiness === "green" ? "text-emerald-600" : results.auditReadiness === "amber" ? "text-amber-600" : "text-red-600" },
          ].map((k, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
              <div className={`text-2xl font-bold ${k.color}`}>{k.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{k.sub}</div>
              <div className="text-xs font-medium text-gray-700 mt-1">{k.label}</div>
            </div>
          ))}
        </div>

        {/* Risk exposure bar chart */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-[#0f2044] mb-4">Risk Exposure by Domain (ALE)</h2>
          <div className="space-y-3">
            {sortedDomains.map(d => {
              const maxAle = Math.max(...results.domains.map(x => x.ale));
              const barWidth = maxAle > 0 ? (d.ale / maxAle) * 100 : 0;
              return (
                <div key={d.domainId} className="flex items-center gap-3">
                  <div className="w-36 text-xs text-gray-600 text-right shrink-0 truncate">{d.domainName.split(" ")[0]}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-5 relative">
                    <div
                      className={`h-5 rounded-full transition-all ${
                        d.auditStatus === "red" ? "bg-red-500" :
                        d.auditStatus === "amber" ? "bg-amber-500" : "bg-emerald-500"
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                  <div className="w-16 text-xs font-bold text-gray-700 shrink-0">{formatCurrency(d.ale)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Domain cards */}
        <h2 className="text-xl font-bold text-[#0f2044] mb-4">Domain-by-Domain Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {results.domains.map(d => (
            <DomainCard key={d.domainId} domain={d} />
          ))}
        </div>

        {/* Priority roadmap */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-[#0f2044] mb-4">Priority Remediation Roadmap</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "30 Days", color: "border-red-200 bg-red-50", textColor: "text-red-700", badge: "bg-red-500", domains: results.domains.filter(d => d.auditStatus === "red") },
              { label: "60 Days", color: "border-amber-200 bg-amber-50", textColor: "text-amber-700", badge: "bg-amber-500", domains: results.domains.filter(d => d.auditStatus === "amber") },
              { label: "90 Days", color: "border-emerald-200 bg-emerald-50", textColor: "text-emerald-700", badge: "bg-emerald-500", domains: results.domains.filter(d => d.auditStatus === "green") },
            ].map((phase, i) => (
              <div key={i} className={`rounded-xl border-2 p-4 ${phase.color}`}>
                <div className={`inline-flex items-center gap-1.5 text-white text-xs font-bold px-2 py-1 rounded-full mb-3 ${phase.badge}`}>
                  {phase.label}
                </div>
                {phase.domains.length === 0 ? (
                  <p className={`text-xs ${phase.textColor}`}>No domains in this category</p>
                ) : (
                  <ul className="space-y-2">
                    {phase.domains.map(d => (
                      <li key={d.domainId}>
                        <p className={`text-xs font-semibold ${phase.textColor}`}>{d.domainName}</p>
                        <p className="text-xs text-gray-600">{d.recommendations[0]}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1a56db] text-white rounded-2xl p-8 mb-6 text-center">
          <Shield size={32} className="mx-auto mb-3 text-[#06b6d4]" />
          <h2 className="text-2xl font-bold mb-2">Need Help Closing These Gaps?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            SecureEdge Advisory provides vCISO services and specialized GRC engagements to help SMBs across the UAE and GCC
            build audit-ready security programs. Let's talk about your results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:info@secureedgeadvisory.com?subject=GRC Assessment Results - Consultation Request"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1a56db] font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Mail size={16} /> Book a Free Consultation
            </a>
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
            >
              <Printer size={16} /> Export / Print Report
            </button>
            <button
              onClick={onRestart}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
            >
              <RotateCcw size={16} /> New Assessment
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-xs text-gray-400 pb-8">
          <p>© 2026 SecureEdge Advisory. All rights reserved. GRC Launchpad™ is a trademark of SecureEdge Advisory.</p>
          <p className="mt-1">This report is generated client-side. No data was transmitted or stored. For advisory services: info@secureedgeadvisory.com</p>
        </div>
      </div>
    </div>
  );
}
