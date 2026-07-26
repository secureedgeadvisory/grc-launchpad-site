export interface Question {
  id: string;
  text: string;
  frameworks: string[];
  fairFactor: string;
  weight: number;
}

export interface Domain {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
  baseTEF: number;
  baseLoss: number;
}

/**
 * 13 domains aligned with SecureEdge V3 common controls.
 * ~3-4 questions per domain for the public LaunchPad version (~40 total).
 * Full 68-question assessment available inside the platform.
 */
export const DOMAINS: Domain[] = [
  {
    id: "governance",
    name: "Information Security Governance",
    icon: "Shield",
    description: "Strategy, policies, roles, management review, and regulatory compliance",
    baseTEF: 0.6,
    baseLoss: 180000,
    questions: [
      { id: "gov1", text: "Does your organization have an approved information security strategy aligned with business objectives?", frameworks: ["ISO 27001 A.5.1", "NIST CSF GV.PO", "NESA"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "gov2", text: "Do you have documented, approved, and communicated information security policies?", frameworks: ["ISO 27001 A.5.1", "NIST CSF GV.PO", "SOC 2"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "gov3", text: "Are information security roles and responsibilities clearly defined and assigned?", frameworks: ["ISO 27001 A.5.2", "NIST CSF GV.RR", "NESA"], fairFactor: "Vulnerability", weight: 3 },
    ]
  },
  {
    id: "access",
    name: "Access Control",
    icon: "Lock",
    description: "Access policies, MFA, provisioning, privileged access, and user reviews",
    baseTEF: 0.75,
    baseLoss: 220000,
    questions: [
      { id: "acc1", text: "Is multi-factor authentication enabled for remote access and privileged accounts?", frameworks: ["ISO 27001 A.8.5", "CIS v8 #6", "NESA", "GDPR Art.32"], fairFactor: "Vulnerability", weight: 3 },
      { id: "acc2", text: "Do you have a formal process for requesting, approving, and provisioning user access?", frameworks: ["ISO 27001 A.8.2", "NIST CSF PR.AA", "SOC 2"], fairFactor: "Vulnerability", weight: 3 },
      { id: "acc3", text: "Are privileged accounts inventoried and reviewed quarterly?", frameworks: ["ISO 27001 A.8.2", "CIS v8 #5", "NESA"], fairFactor: "TEF", weight: 3 },
      { id: "acc4", text: "Do you conduct annual user access reviews across all critical systems?", frameworks: ["ISO 27001 A.8.2", "SOX ITGC", "SOC 2"], fairFactor: "Vulnerability", weight: 2 },
    ]
  },
  {
    id: "people",
    name: "Human Resources Security",
    icon: "Users",
    description: "Security awareness, screening, employment terms, and incident reporting",
    baseTEF: 0.65,
    baseLoss: 150000,
    questions: [
      { id: "ppl1", text: "Do all employees receive security awareness training annually?", frameworks: ["ISO 27001 A.6.3", "CIS v8 #14", "NESA"], fairFactor: "Vulnerability", weight: 3 },
      { id: "ppl2", text: "Are background checks conducted for all new employees?", frameworks: ["ISO 27001 A.6.1", "NIST CSF PR.IP"], fairFactor: "TEF", weight: 2 },
      { id: "ppl3", text: "Do employees know how to report security incidents?", frameworks: ["ISO 27001 A.6.8", "NIST CSF RS.CO"], fairFactor: "TEF", weight: 2 },
    ]
  },
  {
    id: "data",
    name: "Asset & Information Protection",
    icon: "Database",
    description: "Asset inventory, data classification, encryption, and retention",
    baseTEF: 0.65,
    baseLoss: 300000,
    questions: [
      { id: "dat1", text: "Do you maintain a current inventory of all information assets?", frameworks: ["ISO 27001 A.5.9", "CIS v8 #1", "NESA"], fairFactor: "Asset Value", weight: 3 },
      { id: "dat2", text: "Is sensitive data encrypted at rest and in transit?", frameworks: ["ISO 27001 A.8.24", "GDPR Art.32", "PCI DSS 3.4"], fairFactor: "Loss Magnitude", weight: 3 },
      { id: "dat3", text: "Do you have defined data retention periods and secure disposal procedures?", frameworks: ["ISO 27001 A.8.10", "GDPR Art.5(e)"], fairFactor: "Asset Value", weight: 2 },
    ]
  },
  {
    id: "privacy",
    name: "Data Privacy",
    icon: "Eye",
    description: "Personal data processing, privacy regulations, and data subject rights",
    baseTEF: 0.6,
    baseLoss: 350000,
    questions: [
      { id: "prv1", text: "Is personal data processed in compliance with applicable privacy regulations?", frameworks: ["GDPR Art.6", "UAE PDPL", "HIPAA"], fairFactor: "Secondary Loss", weight: 3 },
      { id: "prv2", text: "Do you conduct regular information security risk assessments?", frameworks: ["ISO 27001 Cl.6", "GDPR Art.35", "NESA"], fairFactor: "TEF", weight: 3 },
      { id: "prv3", text: "Is information classified by sensitivity with defined handling procedures?", frameworks: ["ISO 27001 A.5.12", "GDPR Art.32"], fairFactor: "Asset Value", weight: 2 },
    ]
  },
  {
    id: "network",
    name: "Network & Systems Security",
    icon: "Network",
    description: "Firewalls, segmentation, vulnerability scanning, patching, and hardening",
    baseTEF: 0.7,
    baseLoss: 200000,
    questions: [
      { id: "net1", text: "Do you have firewalls, network segmentation, and intrusion detection in place?", frameworks: ["ISO 27001 A.8.22", "CIS v8 #12", "NESA"], fairFactor: "Vulnerability", weight: 3 },
      { id: "net2", text: "Are systems regularly scanned for vulnerabilities with timely remediation?", frameworks: ["ISO 27001 A.8.8", "CIS v8 #7", "PCI DSS 11.3"], fairFactor: "Vulnerability", weight: 3 },
      { id: "net3", text: "Are security patches applied to systems within defined SLAs?", frameworks: ["ISO 27001 A.8.8", "CIS v8 #7", "NESA"], fairFactor: "Vulnerability", weight: 3 },
    ]
  },
  {
    id: "incident",
    name: "Incident Management",
    icon: "AlertTriangle",
    description: "Incident response plans, detection, investigation, and breach notification",
    baseTEF: 0.55,
    baseLoss: 280000,
    questions: [
      { id: "inc1", text: "Do you have a documented and tested incident response plan?", frameworks: ["ISO 27001 A.5.26", "NIST CSF RS.RP", "NESA"], fairFactor: "Loss Magnitude", weight: 3 },
      { id: "inc2", text: "Are security incidents detected and reported through defined channels?", frameworks: ["ISO 27001 A.8.15", "CIS v8 #8", "SOC 2"], fairFactor: "TEF", weight: 3 },
      { id: "inc3", text: "Do you have procedures to notify regulators of data breaches within required timeframes?", frameworks: ["GDPR Art.33", "UAE PDPL Art.14", "HIPAA"], fairFactor: "Secondary Loss", weight: 2 },
    ]
  },
  {
    id: "bcp",
    name: "Business Continuity",
    icon: "Zap",
    description: "BCP, disaster recovery, backup, testing, and system redundancy",
    baseTEF: 0.5,
    baseLoss: 250000,
    questions: [
      { id: "bcp1", text: "Do you have a business continuity plan covering critical business processes?", frameworks: ["ISO 22301", "ISO 27001 A.5.29", "NESA"], fairFactor: "Loss Magnitude", weight: 3 },
      { id: "bcp2", text: "Is critical data backed up regularly with tested recovery procedures?", frameworks: ["ISO 27001 A.8.13", "CIS v8 #11"], fairFactor: "Loss Magnitude", weight: 3 },
      { id: "bcp3", text: "Do you have a disaster recovery plan with defined RTO and RPO objectives?", frameworks: ["ISO 22301", "NIST CSF RC.RP"], fairFactor: "Loss Magnitude", weight: 2 },
    ]
  },
  {
    id: "vendor",
    name: "Supplier Risk Management",
    icon: "Users",
    description: "Vendor assessment, contract controls, access monitoring, and incident reporting",
    baseTEF: 0.65,
    baseLoss: 190000,
    questions: [
      { id: "vnd1", text: "Are third-party vendors assessed for security risk before engagement?", frameworks: ["ISO 27001 A.5.19", "NIST CSF GV.SC", "GDPR Art.28"], fairFactor: "TEF", weight: 3 },
      { id: "vnd2", text: "Do vendor contracts include security requirements and data protection clauses?", frameworks: ["ISO 27001 A.5.20", "GDPR Art.28", "SOX"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "vnd3", text: "Is vendor compliance with security requirements monitored regularly?", frameworks: ["ISO 27001 A.5.22", "NIST CSF GV.SC-07"], fairFactor: "TEF", weight: 2 },
    ]
  },
  {
    id: "physical",
    name: "Physical & Environmental Security",
    icon: "Building",
    description: "Facility access, environmental controls, device security, and clear desk",
    baseTEF: 0.5,
    baseLoss: 130000,
    questions: [
      { id: "phy1", text: "Is physical access to facilities and server rooms restricted and monitored?", frameworks: ["ISO 27001 A.7.1", "CIS v8 #4", "NESA"], fairFactor: "Vulnerability", weight: 3 },
      { id: "phy2", text: "Are laptops and mobile devices encrypted and secured against theft?", frameworks: ["ISO 27001 A.8.1", "CIS v8 #4", "GDPR Art.32"], fairFactor: "Loss Magnitude", weight: 2 },
    ]
  },
  {
    id: "compliance",
    name: "Compliance Management",
    icon: "ClipboardCheck",
    description: "Internal audit, continuous improvement, regulatory monitoring, and metrics",
    baseTEF: 0.5,
    baseLoss: 200000,
    questions: [
      { id: "cmp1", text: "Do you have an internal audit program that assesses security control effectiveness?", frameworks: ["ISO 27001 Cl.9.2", "SOX 302/404", "SOC 2"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "cmp2", text: "Do you actively monitor compliance with all applicable legal and regulatory requirements?", frameworks: ["ISO 27001 A.5.31", "GDPR Art.24"], fairFactor: "Secondary Loss", weight: 2 },
      { id: "cmp3", text: "Are security metrics defined and reported to management regularly?", frameworks: ["ISO 27001 Cl.9.1", "NIST CSF GV.OV"], fairFactor: "Control Effectiveness", weight: 2 },
    ]
  },
  {
    id: "secdev",
    name: "Secure Development",
    icon: "Code",
    description: "SDLC security, code reviews, application testing, and environment separation",
    baseTEF: 0.6,
    baseLoss: 170000,
    questions: [
      { id: "dev1", text: "Is security integrated into your software development lifecycle?", frameworks: ["ISO 27001 A.8.25", "NIST CSF PR.DS", "SOC 2"], fairFactor: "Vulnerability", weight: 3 },
      { id: "dev2", text: "Are applications security-tested (SAST, DAST, pen testing) before deployment?", frameworks: ["ISO 27001 A.8.29", "CIS v8 #16", "PCI DSS 6.5"], fairFactor: "Vulnerability", weight: 3 },
      { id: "dev3", text: "Are development, testing, and production environments separated?", frameworks: ["ISO 27001 A.8.31", "SOX ITGC"], fairFactor: "Vulnerability", weight: 2 },
    ]
  },
  {
    id: "endpoint",
    name: "Endpoint Security",
    icon: "Monitor",
    description: "Endpoint protection, monitoring, change management, and log review",
    baseTEF: 0.7,
    baseLoss: 160000,
    questions: [
      { id: "end1", text: "Are systems hardened following security configuration standards?", frameworks: ["CIS v8 #4", "NIST CSF PR.PS", "NESA"], fairFactor: "Vulnerability", weight: 3 },
      { id: "end2", text: "Are security events centrally logged and monitored for anomalies?", frameworks: ["ISO 27001 A.8.15", "CIS v8 #8", "SOC 2"], fairFactor: "TEF", weight: 3 },
      { id: "end3", text: "Do system changes follow a formal change management process with testing and approval?", frameworks: ["ISO 27001 A.8.32", "SOX ITGC"], fairFactor: "Vulnerability", weight: 2 },
    ]
  },
];

export const INDUSTRIES = [
  "Financial Services & Banking",
  "Healthcare & Life Sciences",
  "Legal & Professional Services",
  "Technology & SaaS",
  "Retail & E-Commerce",
  "Manufacturing & Industrial",
  "Real Estate & Construction",
  "Education & Training",
  "NGO / Non-Profit",
  "Other"
];

export const ORG_SIZES = [
  "Micro (1-10 employees)",
  "Small (11-50 employees)",
  "Medium (51-250 employees)",
  "Large (251-500 employees)"
];

export const INDUSTRY_MULTIPLIERS: Record<string, { loss: number; regulatory: number }> = {
  "Financial Services & Banking": { loss: 1.6, regulatory: 1.5 },
  "Healthcare & Life Sciences": { loss: 1.5, regulatory: 1.4 },
  "Legal & Professional Services": { loss: 1.3, regulatory: 1.2 },
  "Technology & SaaS": { loss: 1.2, regulatory: 1.1 },
  "Retail & E-Commerce": { loss: 1.1, regulatory: 1.0 },
  "Manufacturing & Industrial": { loss: 1.0, regulatory: 0.9 },
  "Real Estate & Construction": { loss: 1.0, regulatory: 0.9 },
  "Education & Training": { loss: 0.9, regulatory: 0.8 },
  "NGO / Non-Profit": { loss: 0.7, regulatory: 0.7 },
  "Other": { loss: 1.0, regulatory: 1.0 }
};
