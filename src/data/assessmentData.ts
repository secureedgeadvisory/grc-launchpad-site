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

export const DOMAINS: Domain[] = [
  {
    id: "governance",
    name: "Security Governance & Policy",
    icon: "Shield",
    description: "Policies, roles, responsibilities, and security program oversight",
    baseTEF: 0.6,
    baseLoss: 180000,
    questions: [
      { id: "g1", text: "Does your organization have a documented Information Security Policy approved by senior management?", frameworks: ["ISO 27001 A.5.1", "NIST CSF GV.PO", "NESA"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "g2", text: "Are information security roles and responsibilities clearly defined and assigned?", frameworks: ["ISO 27001 A.5.2", "COBIT APO01", "CIS v8 #17"], fairFactor: "Vulnerability", weight: 3 },
      { id: "g3", text: "Is there a formal security risk management process in place?", frameworks: ["ISO 27001 Cl.6", "NIST CSF ID.RM", "GDPR Art.32"], fairFactor: "TEF", weight: 3 },
      { id: "g4", text: "Are security policies reviewed and updated at least annually?", frameworks: ["ISO 27001 A.5.1.2", "NIST CSF GV.PO-02"], fairFactor: "Control Effectiveness", weight: 2 },
      { id: "g5", text: "Does management actively support and fund the information security program?", frameworks: ["ISO 27001 Cl.5", "COBIT EDM01"], fairFactor: "Loss Magnitude", weight: 2 },
      { id: "g6", text: "Is there a defined process for handling security exceptions and waivers?", frameworks: ["ISO 27001 A.5.31", "NIST CSF GV.PO"], fairFactor: "Vulnerability", weight: 2 },
    ]
  },
  {
    id: "access",
    name: "Access Control & Identity",
    icon: "Lock",
    description: "User access management, authentication, and privileged access controls",
    baseTEF: 0.75,
    baseLoss: 220000,
    questions: [
      { id: "a1", text: "Is Multi-Factor Authentication (MFA) enforced for all privileged and remote access?", frameworks: ["ISO 27001 A.8.5", "CIS v8 #6", "NESA", "GDPR Art.32"], fairFactor: "Vulnerability", weight: 3 },
      { id: "a2", text: "Are user access rights reviewed and recertified at least every 6 months?", frameworks: ["ISO 27001 A.8.2", "SOX ITGC", "CIS v8 #6"], fairFactor: "TEF", weight: 3 },
      { id: "a3", text: "Is there a formal joiner/mover/leaver process for provisioning and deprovisioning access?", frameworks: ["ISO 27001 A.8.2", "NIST CSF PR.AA", "CIS v8 #6"], fairFactor: "Vulnerability", weight: 3 },
      { id: "a4", text: "Are privileged accounts (admin, root, service accounts) inventoried and tightly controlled?", frameworks: ["ISO 27001 A.8.2", "CIS v8 #5", "NESA"], fairFactor: "TEF", weight: 3 },
      { id: "a5", text: "Is the principle of least privilege enforced across all systems and applications?", frameworks: ["ISO 27001 A.8.2", "NIST CSF PR.AA-05", "CIS v8 #6"], fairFactor: "Vulnerability", weight: 2 },
      { id: "a6", text: "Are shared/generic accounts prohibited or strictly controlled?", frameworks: ["ISO 27001 A.8.2", "PCI DSS 8.2"], fairFactor: "Vulnerability", weight: 2 },
      { id: "a7", text: "Is there a Privileged Access Management (PAM) solution or equivalent controls in place?", frameworks: ["ISO 27001 A.8.2", "CIS v8 #5", "NESA"], fairFactor: "Control Effectiveness", weight: 2 },
    ]
  },
  {
    id: "data",
    name: "Data Protection & Privacy",
    icon: "Database",
    description: "Data classification, encryption, privacy compliance (UAE PDPL, GDPR)",
    baseTEF: 0.65,
    baseLoss: 350000,
    questions: [
      { id: "d1", text: "Has your organization conducted a data inventory and classification exercise?", frameworks: ["ISO 27001 A.5.12", "GDPR Art.30", "UAE PDPL", "CIS v8 #3"], fairFactor: "Asset Value", weight: 3 },
      { id: "d2", text: "Is sensitive data encrypted at rest and in transit?", frameworks: ["ISO 27001 A.8.24", "GDPR Art.32", "UAE PDPL", "PCI DSS 3.4"], fairFactor: "Loss Magnitude", weight: 3 },
      { id: "d3", text: "Does your organization have a Privacy Policy and data subject rights process (access, deletion, correction)?", frameworks: ["GDPR Art.12-23", "UAE PDPL", "ISO 27701"], fairFactor: "Secondary Loss", weight: 3 },
      { id: "d4", text: "Is there a lawful basis documented for each category of personal data processing?", frameworks: ["GDPR Art.6", "UAE PDPL Art.4"], fairFactor: "Secondary Loss", weight: 2 },
      { id: "d5", text: "Are cross-border data transfers assessed and controlled?", frameworks: ["GDPR Ch.V", "UAE PDPL Art.22", "NESA"], fairFactor: "Secondary Loss", weight: 2 },
      { id: "d6", text: "Is there a Data Protection Officer (DPO) or equivalent privacy role designated?", frameworks: ["GDPR Art.37", "UAE PDPL"], fairFactor: "Control Effectiveness", weight: 2 },
      { id: "d7", text: "Are data retention and disposal policies defined and enforced?", frameworks: ["ISO 27001 A.8.10", "GDPR Art.5(e)", "UAE PDPL"], fairFactor: "Asset Value", weight: 2 },
    ]
  },
  {
    id: "network",
    name: "Network & Infrastructure Security",
    icon: "Network",
    description: "Network segmentation, perimeter controls, vulnerability management",
    baseTEF: 0.7,
    baseLoss: 200000,
    questions: [
      { id: "n1", text: "Is the network segmented to isolate critical systems and sensitive data?", frameworks: ["ISO 27001 A.8.22", "CIS v8 #12", "NESA", "PCI DSS 1.3"], fairFactor: "Vulnerability", weight: 3 },
      { id: "n2", text: "Is there a formal patch management process with defined SLAs for critical vulnerabilities?", frameworks: ["ISO 27001 A.8.8", "CIS v8 #7", "NESA"], fairFactor: "Vulnerability", weight: 3 },
      { id: "n3", text: "Are firewalls, IDS/IPS, and endpoint protection solutions deployed and actively monitored?", frameworks: ["ISO 27001 A.8.20", "CIS v8 #13", "NESA"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "n4", text: "Is there a regular vulnerability scanning and penetration testing program?", frameworks: ["ISO 27001 A.8.8", "CIS v8 #18", "PCI DSS 11.3"], fairFactor: "Vulnerability", weight: 2 },
      { id: "n5", text: "Are remote access connections secured via VPN or Zero Trust Network Access (ZTNA)?", frameworks: ["ISO 27001 A.8.20", "NIST CSF PR.AC-03", "CIS v8 #12"], fairFactor: "Vulnerability", weight: 2 },
      { id: "n6", text: "Is DNS filtering or web proxy in place to block malicious traffic?", frameworks: ["CIS v8 #9", "NIST CSF PR.PT"], fairFactor: "Control Effectiveness", weight: 2 },
    ]
  },
  {
    id: "incident",
    name: "Incident Response & BCP",
    icon: "AlertTriangle",
    description: "Incident detection, response planning, business continuity and disaster recovery",
    baseTEF: 0.55,
    baseLoss: 280000,
    questions: [
      { id: "i1", text: "Does your organization have a documented Incident Response Plan (IRP) that has been tested?", frameworks: ["ISO 27001 A.5.26", "NIST CSF RS.RP", "NESA", "GDPR Art.33"], fairFactor: "Loss Magnitude", weight: 3 },
      { id: "i2", text: "Are security events logged, monitored, and reviewed (SIEM or equivalent)?", frameworks: ["ISO 27001 A.8.15", "CIS v8 #8", "SOX ITGC"], fairFactor: "TEF", weight: 3 },
      { id: "i3", text: "Is there a defined breach notification process meeting GDPR/UAE PDPL timelines?", frameworks: ["GDPR Art.33-34", "UAE PDPL Art.14", "NESA"], fairFactor: "Secondary Loss", weight: 3 },
      { id: "i4", text: "Does your organization have a Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP)?", frameworks: ["ISO 27001 A.5.29", "ISO 22301", "NESA"], fairFactor: "Loss Magnitude", weight: 3 },
      { id: "i5", text: "Are BCP/DRP plans tested at least annually through tabletop exercises or simulations?", frameworks: ["ISO 27001 A.5.30", "NIST CSF RC.RP", "NESA"], fairFactor: "Loss Magnitude", weight: 2 },
      { id: "i6", text: "Are recovery time objectives (RTO) and recovery point objectives (RPO) defined for critical systems?", frameworks: ["ISO 22301", "NIST CSF RC.RP-01"], fairFactor: "Loss Magnitude", weight: 2 },
    ]
  },
  {
    id: "vendor",
    name: "Third-Party & Vendor Risk",
    icon: "Users",
    description: "Supplier assessments, contract controls, and ongoing vendor monitoring",
    baseTEF: 0.65,
    baseLoss: 190000,
    questions: [
      { id: "v1", text: "Is there a formal Third-Party Risk Management (TPRM) program in place?", frameworks: ["ISO 27001 A.5.19", "NIST CSF GV.SC", "NESA", "GDPR Art.28"], fairFactor: "TEF", weight: 3 },
      { id: "v2", text: "Are security requirements included in all vendor contracts and SLAs?", frameworks: ["ISO 27001 A.5.20", "GDPR Art.28", "SOX"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "v3", text: "Are critical vendors assessed for security posture before onboarding?", frameworks: ["ISO 27001 A.5.19", "NIST CSF GV.SC-06", "CIS v8 #15"], fairFactor: "Vulnerability", weight: 3 },
      { id: "v4", text: "Are vendor access rights reviewed and limited to what is necessary?", frameworks: ["ISO 27001 A.5.19", "CIS v8 #6"], fairFactor: "Vulnerability", weight: 2 },
      { id: "v5", text: "Is there a process for ongoing monitoring of critical vendor security performance?", frameworks: ["ISO 27001 A.5.22", "NIST CSF GV.SC-07"], fairFactor: "TEF", weight: 2 },
      { id: "v6", text: "Are Data Processing Agreements (DPAs) in place with all vendors handling personal data?", frameworks: ["GDPR Art.28", "UAE PDPL"], fairFactor: "Secondary Loss", weight: 2 },
    ]
  },
  {
    id: "cloud",
    name: "Cloud Security",
    icon: "Cloud",
    description: "Cloud configuration, shared responsibility, and cloud-native security controls",
    baseTEF: 0.7,
    baseLoss: 210000,
    questions: [
      { id: "c1", text: "Is there a documented cloud security policy covering approved services and configurations?", frameworks: ["ISO 27001 A.5.23", "CIS v8 #4", "NESA"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "c2", text: "Are cloud environments regularly assessed for misconfigurations (CSPM tools or manual review)?", frameworks: ["CIS v8 #4", "NIST CSF PR.PS", "CSA CCM"], fairFactor: "Vulnerability", weight: 3 },
      { id: "c3", text: "Is the shared responsibility model understood and documented for each cloud provider?", frameworks: ["ISO 27001 A.5.23", "CSA CCM", "NIST SP 800-144"], fairFactor: "Vulnerability", weight: 2 },
      { id: "c4", text: "Are cloud storage buckets and databases protected from public exposure?", frameworks: ["CIS v8 #4", "NIST CSF PR.DS", "GDPR Art.32"], fairFactor: "Vulnerability", weight: 3 },
      { id: "c5", text: "Is cloud access governed through Identity and Access Management (IAM) with least privilege?", frameworks: ["ISO 27001 A.8.2", "CIS v8 #6", "CSA CCM"], fairFactor: "Vulnerability", weight: 2 },
      { id: "c6", text: "Are cloud logs (CloudTrail, Azure Monitor, etc.) enabled and reviewed?", frameworks: ["CIS v8 #8", "NIST CSF DE.AE", "SOX ITGC"], fairFactor: "TEF", weight: 2 },
    ]
  },
  {
    id: "awareness",
    name: "Security Awareness & Training",
    icon: "BookOpen",
    description: "Employee training, phishing simulations, and security culture",
    baseTEF: 0.8,
    baseLoss: 150000,
    questions: [
      { id: "aw1", text: "Do all employees receive security awareness training at least annually?", frameworks: ["ISO 27001 A.6.3", "CIS v8 #14", "NESA", "GDPR Art.39"], fairFactor: "Vulnerability", weight: 3 },
      { id: "aw2", text: "Is phishing simulation testing conducted regularly to measure employee susceptibility?", frameworks: ["CIS v8 #14", "NIST CSF PR.AT", "NESA"], fairFactor: "Vulnerability", weight: 3 },
      { id: "aw3", text: "Is role-based security training provided for high-risk roles (IT, finance, HR, executives)?", frameworks: ["ISO 27001 A.6.3", "CIS v8 #14"], fairFactor: "Vulnerability", weight: 2 },
      { id: "aw4", text: "Is there a clear process for employees to report suspected security incidents or phishing?", frameworks: ["ISO 27001 A.6.8", "NIST CSF RS.CO"], fairFactor: "TEF", weight: 2 },
      { id: "aw5", text: "Are new employees required to complete security training before accessing systems?", frameworks: ["ISO 27001 A.6.2", "CIS v8 #14"], fairFactor: "Vulnerability", weight: 2 },
    ]
  },
  {
    id: "asset",
    name: "Asset Management & Change Control",
    icon: "Package",
    description: "Hardware/software inventory, change management, and asset lifecycle",
    baseTEF: 0.6,
    baseLoss: 160000,
    questions: [
      { id: "as1", text: "Is there a complete and up-to-date inventory of all hardware and software assets?", frameworks: ["ISO 27001 A.5.9", "CIS v8 #1 & #2", "NESA"], fairFactor: "Asset Value", weight: 3 },
      { id: "as2", text: "Is there a formal change management process for all changes to production systems?", frameworks: ["ISO 27001 A.8.32", "SOX ITGC", "COBIT BAI06"], fairFactor: "Vulnerability", weight: 3 },
      { id: "as3", text: "Are unauthorized software installations detected and prevented (application whitelisting or equivalent)?", frameworks: ["CIS v8 #2", "NIST CSF PR.PS-01"], fairFactor: "Vulnerability", weight: 2 },
      { id: "as4", text: "Are end-of-life (EOL) systems identified and either upgraded or isolated?", frameworks: ["ISO 27001 A.8.8", "CIS v8 #2"], fairFactor: "Vulnerability", weight: 2 },
      { id: "as5", text: "Are mobile devices and removable media managed under a formal policy?", frameworks: ["ISO 27001 A.6.7", "CIS v8 #4"], fairFactor: "Vulnerability", weight: 2 },
    ]
  },
  {
    id: "compliance",
    name: "Compliance, Audit & Improvement",
    icon: "ClipboardCheck",
    description: "Internal audit, corrective actions, compliance monitoring, and continuous improvement",
    baseTEF: 0.5,
    baseLoss: 200000,
    questions: [
      { id: "co1", text: "Are internal security audits conducted at least annually against applicable frameworks?", frameworks: ["ISO 27001 Cl.9.2", "SOX 302/404", "COBIT MEA02"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "co2", text: "Is there a formal corrective action process for audit findings and non-conformities?", frameworks: ["ISO 27001 Cl.10.1", "COBIT MEA02"], fairFactor: "Control Effectiveness", weight: 3 },
      { id: "co3", text: "Are compliance obligations (regulatory, contractual) tracked in a register?", frameworks: ["ISO 27001 A.5.31", "GDPR Art.30", "SOX"], fairFactor: "Secondary Loss", weight: 2 },
      { id: "co4", text: "Are security metrics and KPIs reported to management on a regular basis?", frameworks: ["ISO 27001 Cl.9.1", "COBIT MEA01", "NIST CSF GV.OV"], fairFactor: "Control Effectiveness", weight: 2 },
      { id: "co5", text: "Is there a process for monitoring changes in applicable laws and regulations?", frameworks: ["ISO 27001 A.5.31", "GDPR Art.24"], fairFactor: "Secondary Loss", weight: 2 },
      { id: "co6", text: "Has the organization undergone any external security certification or assessment (ISO 27001, SOC 2, etc.)?", frameworks: ["ISO 27001", "SOC 2", "PCI DSS"], fairFactor: "Control Effectiveness", weight: 2 },
    ]
  }
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
  "Micro (1–10 employees)",
  "Small (11–50 employees)",
  "Medium (51–250 employees)",
  "Large (251–500 employees)"
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
