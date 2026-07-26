import type { Domain } from "../data/assessmentData";
import { INDUSTRY_MULTIPLIERS } from "../data/assessmentData";

export interface DomainScore {
  domainId: string;
  domainName: string;
  score: number;
  maxScore: number;
  maturityLevel: number;
  maturityLabel: string;
  auditStatus: "green" | "amber" | "red";
  vulnerabilityPct: number;
  tef: number;
  lef: number;
  primaryLoss: number;
  totalLoss: number;
  aleLow: number;
  aleHigh: number;
  ale: number;
  recommendations: string[];
}

export interface AssessmentResult {
  orgName: string;
  industry: string;
  orgSize: string;
  completedAt: string;
  overallScore: number;
  overallMaturity: number;
  overallMaturityLabel: string;
  auditReadiness: "green" | "amber" | "red";
  totalALE: number;
  domains: DomainScore[];
}

const MATURITY_LABELS = ["", "Initial", "Developing", "Defined", "Managed", "Optimized"];

const RECOMMENDATIONS: Record<string, string[]> = {
  governance: [
    "Develop and formally approve an Information Security Strategy",
    "Define and communicate security roles and responsibilities",
    "Establish a risk management process aligned to ISO 27001 Clause 6",
    "Schedule annual policy reviews with management sign-off",
    "Create a security exceptions register and approval workflow"
  ],
  access: [
    "Enforce MFA on all privileged and remote access immediately",
    "Implement quarterly access recertification reviews",
    "Establish a formal joiner/mover/leaver process",
    "Deploy a Privileged Access Management (PAM) solution",
    "Audit and remove all shared/generic accounts"
  ],
  people: [
    "Launch mandatory annual security awareness training",
    "Conduct background checks for all new employees",
    "Establish a clear security incident reporting channel",
    "Include security duties in job descriptions",
    "Provide role-based training for high-risk departments"
  ],
  data: [
    "Build and maintain a complete information asset inventory",
    "Implement encryption for sensitive data at rest and in transit",
    "Establish data retention schedules and disposal procedures",
    "Classify information by sensitivity with handling procedures",
    "Control removable media and storage devices"
  ],
  privacy: [
    "Document lawful basis for all personal data processing",
    "Conduct regular information security risk assessments",
    "Classify information by sensitivity level",
    "Appoint a Data Protection Officer or privacy lead",
    "Establish data subject rights procedures"
  ],
  network: [
    "Implement network segmentation to isolate critical systems",
    "Establish patch management SLAs (critical: 24-72 hours)",
    "Deploy and tune IDS/IPS and endpoint protection",
    "Schedule quarterly vulnerability scans and annual pen tests",
    "Harden systems following CIS benchmarks"
  ],
  incident: [
    "Develop and test an Incident Response Plan",
    "Deploy SIEM or log management for security event monitoring",
    "Document breach notification procedures (GDPR/UAE PDPL timelines)",
    "Conduct annual tabletop exercises",
    "Define escalation paths and communication procedures"
  ],
  bcp: [
    "Develop Business Continuity Plan for critical processes",
    "Implement and test backup recovery procedures",
    "Define RTO/RPO for all critical business systems",
    "Establish disaster recovery plan with failover procedures",
    "Test BCP/DRP at least annually through exercises"
  ],
  vendor: [
    "Establish a formal TPRM program with risk-tiered vendor categories",
    "Include security requirements in all vendor contracts",
    "Conduct security assessments before onboarding critical vendors",
    "Implement Data Processing Agreements with all data processors",
    "Set up ongoing vendor security monitoring"
  ],
  physical: [
    "Restrict and monitor physical access to server rooms",
    "Implement environmental controls for IT facilities",
    "Encrypt all laptops and mobile devices",
    "Enforce clear desk and screen lock policies"
  ],
  compliance: [
    "Schedule annual internal security audits",
    "Implement continuous improvement based on metrics",
    "Monitor regulatory changes relevant to your industry",
    "Define and report security KPIs to management monthly"
  ],
  secdev: [
    "Integrate security into the SDLC from design phase",
    "Conduct security testing (SAST/DAST) before deployment",
    "Separate development, testing, and production environments",
    "Conduct code reviews with security focus",
    "Assess third-party components for vulnerabilities"
  ],
  endpoint: [
    "Harden systems following security configuration standards",
    "Centralize security event logging and monitoring",
    "Implement formal change management process",
    "Deploy endpoint detection and response (EDR)",
    "Review security logs for anomalies daily"
  ],
};

export function calculateResults(
  answers: Record<string, "yes" | "partial" | "no" | "na">,
  domains: Domain[],
  industry: string,
  orgName: string,
  orgSize: string
): AssessmentResult {
  const multiplier = INDUSTRY_MULTIPLIERS[industry] || { loss: 1.0, regulatory: 1.0 };

  const domainScores: DomainScore[] = domains.map(domain => {
    let score = 0;
    let maxScore = 0;

    domain.questions.forEach(q => {
      const answer = answers[q.id];
      maxScore += q.weight * 3;
      if (answer === "yes") score += q.weight * 3;
      else if (answer === "partial") score += q.weight * 1.5;
      else if (answer === "na") maxScore -= q.weight * 3;
    });

    const pct = maxScore > 0 ? score / maxScore : 0;
    const maturityLevel = Math.max(1, Math.min(5, Math.ceil(pct * 5)));
    const maturityLabel = MATURITY_LABELS[maturityLevel];

    const auditStatus: "green" | "amber" | "red" =
      pct >= 0.75 ? "green" : pct >= 0.5 ? "amber" : "red";

    const vulnerabilityPct = Math.max(0.05, 1 - pct);
    const tef = domain.baseTEF * multiplier.loss;
    const lef = tef * vulnerabilityPct;
    const primaryLoss = domain.baseLoss * multiplier.loss * vulnerabilityPct;
    const secondaryLoss = primaryLoss * multiplier.regulatory * 0.4;
    const totalLoss = primaryLoss + secondaryLoss;
    const ale = lef * totalLoss;
    const aleLow = ale * 0.6;
    const aleHigh = ale * 1.5;

    return {
      domainId: domain.id,
      domainName: domain.name,
      score,
      maxScore,
      maturityLevel,
      maturityLabel,
      auditStatus,
      vulnerabilityPct: Math.round(vulnerabilityPct * 100),
      tef: Math.round(tef * 100) / 100,
      lef: Math.round(lef * 100) / 100,
      primaryLoss: Math.round(primaryLoss),
      totalLoss: Math.round(totalLoss),
      aleLow: Math.round(aleLow),
      aleHigh: Math.round(aleHigh),
      ale: Math.round(ale),
      recommendations: RECOMMENDATIONS[domain.id] || []
    };
  });

  const totalALE = domainScores.reduce((sum, d) => sum + d.ale, 0);
  const avgMaturity = domainScores.reduce((sum, d) => sum + d.maturityLevel, 0) / domainScores.length;
  const overallMaturity = Math.round(avgMaturity);
  const overallScore = Math.round(
    (domainScores.reduce((sum, d) => sum + (d.maxScore > 0 ? d.score / d.maxScore : 0), 0) / domainScores.length) * 100
  );

  const auditReadiness: "green" | "amber" | "red" =
    overallScore >= 75 ? "green" : overallScore >= 50 ? "amber" : "red";

  return {
    orgName,
    industry,
    orgSize,
    completedAt: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    overallScore,
    overallMaturity,
    overallMaturityLabel: MATURITY_LABELS[overallMaturity],
    auditReadiness,
    totalALE,
    domains: domainScores
  };
}
