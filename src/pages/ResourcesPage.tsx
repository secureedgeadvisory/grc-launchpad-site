import { useState, useMemo } from "react";
import {
  Search, ChevronDown, ChevronUp, ExternalLink, BookOpen, Lock,
  Landmark, Globe, Shield, BarChart3, GraduationCap, FileText,
  Users, AlertTriangle, Clock, Calendar,
} from "lucide-react";

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

/* ─── Types ─── */
type Pricing = "Free" | "Paid" | "Freemium" | "Gov" | "Membership";

interface Resource {
  name: string;
  desc: string;
  url: string;
  pricing: Pricing;
}

interface Category {
  title: string;
  icon: React.ElementType;
  resources: Resource[];
}

/* ─── Pricing badge styles ─── */
const PRICING_STYLES: Record<Pricing, string> = {
  Free: "bg-emerald-100 text-emerald-700",
  Paid: "bg-amber-100 text-amber-700",
  Freemium: "bg-blue-100 text-blue-700",
  Gov: "bg-slate-100 text-slate-700",
  Membership: "bg-purple-100 text-purple-700",
};

const PRICING_FILTERS: (Pricing | "All")[] = ["All", "Free", "Paid", "Freemium", "Gov", "Membership"];

/* ─── Resource Data ─── */
const CATEGORIES: Category[] = [
  {
    title: "Standards & Framework Bodies",
    icon: Landmark,
    resources: [
      { name: "ISO", desc: "International standards for information security, quality, and risk management", url: "https://www.iso.org", pricing: "Paid" },
      { name: "NIST", desc: "US National Institute of Standards — CSF, SP 800 series, and risk frameworks", url: "https://www.nist.gov", pricing: "Free" },
      { name: "FAIR Institute", desc: "Factor Analysis of Information Risk — quantitative risk methodology", url: "https://www.fairinstitute.org", pricing: "Membership" },
      { name: "ISACA", desc: "Global association for IT governance, risk, audit, and compliance", url: "https://www.isaca.org", pricing: "Membership" },
      { name: "CIS", desc: "Center for Internet Security — CIS Controls, Benchmarks, and hardening guides", url: "https://www.cisecurity.org", pricing: "Free" },
      { name: "CSA", desc: "Cloud Security Alliance — cloud security guidance, STAR certification, CCM", url: "https://cloudsecurityalliance.org", pricing: "Membership" },
      { name: "OWASP", desc: "Open Web Application Security Project — top 10, testing guides, tools", url: "https://owasp.org", pricing: "Free" },
      { name: "MITRE ATT&CK", desc: "Adversary tactics and techniques knowledge base for threat modeling", url: "https://attack.mitre.org", pricing: "Free" },
      { name: "The Open Group", desc: "Enterprise architecture, TOGAF, and risk management standards", url: "https://www.opengroup.org", pricing: "Membership" },
      { name: "IEC", desc: "International Electrotechnical Commission — electrical and electronic standards", url: "https://www.iec.ch", pricing: "Paid" },
      { name: "ITIL", desc: "IT service management best practices framework by Axelos", url: "https://www.axelos.com", pricing: "Paid" },
      { name: "SANS Policy Templates", desc: "Free information security policy templates for immediate use", url: "https://www.sans.org/information-security-policy", pricing: "Free" },
    ],
  },
  {
    title: "Middle East Regulators",
    icon: Globe,
    resources: [
      { name: "UAE TDRA", desc: "Telecommunications and Digital Government Regulatory Authority", url: "https://tdra.gov.ae", pricing: "Gov" },
      { name: "UAE Cybersecurity Council", desc: "National cybersecurity strategy and incident coordination", url: "https://www.csc.gov.ae", pricing: "Gov" },
      { name: "DESC Dubai", desc: "Dubai Electronic Security Center — emirate-level security standards", url: "https://www.desc.gov.ae", pricing: "Gov" },
      { name: "UAE Data Office (PDPL)", desc: "Federal authority for UAE Personal Data Protection Law implementation", url: "https://www.uaedataoffice.ae", pricing: "Gov" },
      { name: "ADDA Abu Dhabi", desc: "Abu Dhabi Digital Authority — digital government and cybersecurity", url: "https://www.adda.gov.ae", pricing: "Gov" },
      { name: "SAMA Saudi Arabia", desc: "Saudi Arabian Monetary Authority — financial sector cybersecurity framework", url: "https://www.sama.gov.sa", pricing: "Gov" },
      { name: "NCA Saudi Arabia", desc: "National Cybersecurity Authority — ECC, CSCC, and national cyber controls", url: "https://www.nca.gov.sa", pricing: "Gov" },
      { name: "NDMO Saudi Arabia", desc: "National Data Management Office — data governance and classification", url: "https://www.ndmo.gov.sa", pricing: "Gov" },
      { name: "Qatar NCSA", desc: "National Cyber Security Agency — national cybersecurity strategy and standards", url: "https://www.ncsa.gov.qa", pricing: "Gov" },
      { name: "Bahrain NCEA", desc: "National Cybersecurity and Encryption Authority", url: "https://www.ncea.gov.bh", pricing: "Gov" },
      { name: "Oman ITA", desc: "Information Technology Authority — national IT and cybersecurity governance", url: "https://www.ita.gov.om", pricing: "Gov" },
      { name: "Kuwait CITRA", desc: "Communication and Information Technology Regulatory Authority", url: "https://www.citra.gov.kw", pricing: "Gov" },
      { name: "DIFC", desc: "Dubai International Financial Centre — data protection and financial regulation", url: "https://www.difc.ae", pricing: "Gov" },
      { name: "ADGM", desc: "Abu Dhabi Global Market — financial free zone data protection regulations", url: "https://www.adgm.com", pricing: "Gov" },
    ],
  },
  {
    title: "European Regulators",
    icon: Globe,
    resources: [
      { name: "EDPB", desc: "European Data Protection Board — GDPR guidance and enforcement coordination", url: "https://edpb.europa.eu", pricing: "Gov" },
      { name: "ENISA", desc: "EU Agency for Cybersecurity — threat landscape, guidance, certifications", url: "https://www.enisa.europa.eu", pricing: "Gov" },
      { name: "UK ICO", desc: "Information Commissioner's Office — UK data protection and privacy regulator", url: "https://ico.org.uk", pricing: "Gov" },
      { name: "UK NCSC", desc: "National Cyber Security Centre — threat advisories and security guidance", url: "https://www.ncsc.gov.uk", pricing: "Gov" },
      { name: "German BSI", desc: "Federal Office for Information Security — IT security standards and advisories", url: "https://www.bsi.bund.de", pricing: "Gov" },
      { name: "French ANSSI", desc: "National Agency for Information Systems Security — French cyber authority", url: "https://www.ssi.gouv.fr", pricing: "Gov" },
      { name: "French CNIL", desc: "National Commission on Informatics and Liberty — French data protection authority", url: "https://www.cnil.fr", pricing: "Gov" },
      { name: "NIS2 Directive", desc: "EU directive on network and information security — expanded scope and obligations", url: "https://digital-strategy.ec.europa.eu/en/policies/nis2-directive", pricing: "Gov" },
      { name: "DORA Regulation", desc: "Digital Operational Resilience Act — EU financial sector ICT risk regulation", url: "https://www.digital-operational-resilience-act.com", pricing: "Gov" },
    ],
  },
  {
    title: "Asia-Pacific Regulators",
    icon: Globe,
    resources: [
      { name: "Singapore CSA", desc: "Cyber Security Agency of Singapore — national cybersecurity strategy", url: "https://www.csa.gov.sg", pricing: "Gov" },
      { name: "Singapore PDPC", desc: "Personal Data Protection Commission — PDPA enforcement and guidance", url: "https://www.pdpc.gov.sg", pricing: "Gov" },
      { name: "Japan NISC", desc: "National Center of Incident Readiness and Strategy for Cybersecurity", url: "https://www.nisc.go.jp", pricing: "Gov" },
      { name: "India CERT-In", desc: "Indian Computer Emergency Response Team — incident response and advisories", url: "https://www.cert-in.org.in", pricing: "Gov" },
      { name: "India MeitY", desc: "Ministry of Electronics and IT — digital governance and cyber policy", url: "https://www.meity.gov.in", pricing: "Gov" },
      { name: "South Korea KISA", desc: "Korea Internet and Security Agency — cybersecurity and internet governance", url: "https://www.kisa.or.kr", pricing: "Gov" },
      { name: "China CAC", desc: "Cyberspace Administration of China — internet and data security regulation", url: "https://www.cac.gov.cn", pricing: "Gov" },
      { name: "Australia ACSC", desc: "Australian Cyber Security Centre — Essential Eight and threat advisories", url: "https://www.cyber.gov.au", pricing: "Gov" },
      { name: "Australia OAIC", desc: "Office of the Australian Information Commissioner — privacy regulation", url: "https://www.oaic.gov.au", pricing: "Gov" },
      { name: "Hong Kong CERT", desc: "Hong Kong Computer Emergency Response Team — incident coordination", url: "https://www.hkcert.org", pricing: "Gov" },
    ],
  },
  {
    title: "Compliance & GRC Platforms",
    icon: Shield,
    resources: [
      { name: "SimpleRisk", desc: "Open-source risk management platform — free community edition", url: "https://www.simplerisk.com", pricing: "Free" },
      { name: "Secureframe", desc: "Automated compliance for SOC 2, ISO 27001, HIPAA, PCI", url: "https://secureframe.com", pricing: "Paid" },
      { name: "Drata", desc: "Continuous compliance automation with 75+ integrations", url: "https://drata.com", pricing: "Paid" },
      { name: "Vanta", desc: "Trust management platform — automated compliance and security monitoring", url: "https://www.vanta.com", pricing: "Paid" },
      { name: "OneTrust", desc: "Privacy, security, and governance platform for enterprise", url: "https://www.onetrust.com", pricing: "Paid" },
      { name: "VComply", desc: "GRC management platform for policy, risk, and compliance workflows", url: "https://www.vcomply.com", pricing: "Paid" },
      { name: "LogicGate", desc: "Risk Cloud platform — flexible GRC workflows and automation", url: "https://www.logicgate.com", pricing: "Paid" },
      { name: "Scrut", desc: "GRC platform focused on continuous compliance monitoring", url: "https://www.scrut.io", pricing: "Paid" },
      { name: "Eramba", desc: "Open-source GRC platform — community edition is free", url: "https://www.eramba.org", pricing: "Free" },
      { name: "CyberArrow", desc: "GRC platform with Middle East focus — Arabic support, regional frameworks", url: "https://www.cyberarrow.io", pricing: "Paid" },
      { name: "StandardFusion", desc: "Lightweight GRC for small-to-mid organizations", url: "https://www.standardfusion.com", pricing: "Paid" },
    ],
  },
  {
    title: "Threat Intelligence & Advisories",
    icon: AlertTriangle,
    resources: [
      { name: "CISA", desc: "US Cybersecurity and Infrastructure Security Agency — alerts and best practices", url: "https://www.cisa.gov", pricing: "Free" },
      { name: "aeCERT UAE", desc: "UAE national CERT — incident response and security advisories", url: "https://www.tra.gov.ae/aecert", pricing: "Gov" },
      { name: "Saudi CERT", desc: "Saudi national CERT — threat alerts and cybersecurity advisories", url: "https://cert.gov.sa", pricing: "Gov" },
      { name: "Krebs on Security", desc: "Independent investigative cybersecurity journalism by Brian Krebs", url: "https://krebsonsecurity.com", pricing: "Free" },
      { name: "The Record", desc: "Cybersecurity news by Recorded Future — threat intel and policy coverage", url: "https://therecord.media", pricing: "Free" },
      { name: "BleepingComputer", desc: "Technology news and support — malware, vulnerabilities, and fixes", url: "https://www.bleepingcomputer.com", pricing: "Free" },
      { name: "SANS Internet Storm Center", desc: "Daily threat analysis and handler diaries from SANS", url: "https://isc.sans.edu", pricing: "Free" },
      { name: "VirusTotal", desc: "Multi-engine file and URL scanner for malware analysis", url: "https://www.virustotal.com", pricing: "Freemium" },
      { name: "Shodan", desc: "Search engine for internet-connected devices — attack surface visibility", url: "https://www.shodan.io", pricing: "Freemium" },
      { name: "Have I Been Pwned", desc: "Check if your email or credentials have been compromised in breaches", url: "https://haveibeenpwned.com", pricing: "Free" },
      { name: "AlienVault OTX", desc: "Open Threat Exchange — community-driven threat intelligence sharing", url: "https://otx.alienvault.com", pricing: "Free" },
    ],
  },
  {
    title: "Training & Certifications",
    icon: GraduationCap,
    resources: [
      { name: "SANS Institute", desc: "Premier cybersecurity training — GIAC certifications, courses, and research", url: "https://www.sans.org", pricing: "Paid" },
      { name: "ISC2", desc: "Home of CISSP, CCSP, SSCP — cybersecurity professional certifications", url: "https://www.isc2.org", pricing: "Paid" },
      { name: "ISACA", desc: "CISA, CISM, CRISC, CGEIT certifications and professional development", url: "https://www.isaca.org", pricing: "Membership" },
      { name: "CompTIA", desc: "Security+, CySA+, CASP+ and other IT/security certifications", url: "https://www.comptia.org", pricing: "Paid" },
      { name: "Offensive Security", desc: "OSCP and advanced penetration testing certifications", url: "https://www.offsec.com", pricing: "Paid" },
      { name: "FAIR Institute Training", desc: "FAIR methodology certification and risk quantification training", url: "https://www.fairinstitute.org/training", pricing: "Paid" },
      { name: "Cybrary", desc: "Free and paid cybersecurity training courses and career paths", url: "https://www.cybrary.it", pricing: "Freemium" },
      { name: "TryHackMe", desc: "Hands-on cybersecurity training through gamified learning", url: "https://tryhackme.com", pricing: "Freemium" },
      { name: "Hack The Box", desc: "Penetration testing labs and cybersecurity challenges", url: "https://www.hackthebox.com", pricing: "Freemium" },
    ],
  },
  {
    title: "Industry Reports & Research",
    icon: FileText,
    resources: [
      { name: "Verizon DBIR", desc: "Data Breach Investigations Report — annual breach analysis and trends", url: "https://www.verizon.com/business/resources/reports/dbir", pricing: "Free" },
      { name: "IBM Cost of a Data Breach", desc: "Annual study on financial impact of data breaches by industry and region", url: "https://www.ibm.com/security/data-breach", pricing: "Free" },
      { name: "CrowdStrike Global Threat Report", desc: "Annual threat landscape analysis and adversary intelligence", url: "https://www.crowdstrike.com/global-threat-report", pricing: "Free" },
      { name: "Mandiant Threat Report", desc: "M-Trends report on attacker techniques, dwell time, and trends", url: "https://www.mandiant.com/m-trends", pricing: "Free" },
      { name: "Ponemon Institute", desc: "Research on privacy, data protection, and information security economics", url: "https://www.ponemon.org", pricing: "Free" },
      { name: "Gartner", desc: "Technology research and advisory — Magic Quadrants, Hype Cycles, market analysis", url: "https://www.gartner.com", pricing: "Paid" },
      { name: "Forrester", desc: "Technology and business research — Wave reports, best practices, market data", url: "https://www.forrester.com", pricing: "Paid" },
      { name: "ISC2 Workforce Study", desc: "Annual cybersecurity workforce gap analysis and salary data", url: "https://www.isc2.org/research", pricing: "Free" },
      { name: "Cybersecurity Ventures", desc: "Market research — cybercrime predictions, industry statistics", url: "https://cybersecurityventures.com", pricing: "Free" },
      { name: "FAIR Institute Publications", desc: "Research papers and case studies on FAIR risk quantification", url: "https://www.fairinstitute.org/resources", pricing: "Membership" },
    ],
  },
  {
    title: "Communities & Forums",
    icon: Users,
    resources: [
      { name: "ISACA UAE Chapter", desc: "Local ISACA chapter — events, networking, and professional development in UAE", url: "https://engage.isaca.org/uaechapter", pricing: "Membership" },
      { name: "ISC2 Dubai Chapter", desc: "ISC2 local chapter — meetups, study groups, and cybersecurity community in Dubai", url: "https://www.isc2chapter-dubai.org", pricing: "Membership" },
      { name: "FAIR Community", desc: "Community of FAIR practitioners — forums, events, and risk quantification discussions", url: "https://www.fairinstitute.org/community", pricing: "Membership" },
      { name: "CISO Platform", desc: "Online community for CISOs — peer discussions, resources, and benchmarking", url: "https://www.cisoplatform.com", pricing: "Free" },
      { name: "CSA MENA", desc: "Cloud Security Alliance Middle East and North Africa chapter", url: "https://cloudsecurityalliance.org/chapters/mena", pricing: "Membership" },
      { name: "Reddit r/cybersecurity", desc: "Active subreddit for cybersecurity news, discussions, and career advice", url: "https://www.reddit.com/r/cybersecurity", pricing: "Free" },
      { name: "Reddit r/GRC", desc: "Dedicated subreddit for GRC professionals — governance, risk, and compliance", url: "https://www.reddit.com/r/GRC", pricing: "Free" },
      { name: "LinkedIn GRC Groups", desc: "Professional networking and knowledge sharing for GRC practitioners", url: "https://www.linkedin.com/groups", pricing: "Free" },
    ],
  },
];

/* ─── Knowledge Hub Articles ─── */
interface Article {
  title: string;
  readTime: string;
  date: string;
  preview: string;
  content: string;
}

const ARTICLES: Article[] = [
  {
    title: "How Compliance Is Shaping the Middle East",
    readTime: "7 min read",
    date: "March 2026",
    preview: "The Middle East is experiencing an unprecedented wave of cybersecurity and data protection regulation. From the UAE's Personal Data Protection Law to Saudi Arabia's NCA Essential Cybersecurity Controls, governments across the GCC are signaling that compliance is no longer optional.",
    content: `The Middle East is experiencing an unprecedented wave of cybersecurity and data protection regulation. From the UAE's Personal Data Protection Law to Saudi Arabia's NCA Essential Cybersecurity Controls, governments across the GCC are signaling that compliance is no longer optional — it is a strategic imperative tied to national digital transformation agendas.

**The Regulatory Acceleration**

The pace of regulatory change across the region has been remarkable. In the UAE, the federal Personal Data Protection Law (PDPL), enacted in 2021 and entering full enforcement in 2025, establishes comprehensive data processing requirements that affect every organization operating in the country. The Dubai Electronic Security Center (DESC) continues to enforce emirate-level standards, while the National Electronic Security Authority (NESA) provides the federal cybersecurity framework. Abu Dhabi's ADDA adds another layer of digital governance requirements for entities operating in the emirate.

Saudi Arabia has been equally aggressive. The National Cybersecurity Authority (NCA) released version 2 of the Essential Cybersecurity Controls (ECC) framework, expanding its scope beyond government entities to include critical infrastructure operators and their supply chains. The National Data Management Office (NDMO) enforces data classification and governance requirements, while the Saudi PDPL reached full effect in 2024, bringing GDPR-style obligations to the Kingdom.

Qatar's National Cyber Security Agency (NCSA) has established national cybersecurity standards that apply across government and critical sectors. Bahrain's NCEA continues to mature its regulatory framework, while Oman and Kuwait are strengthening their respective cybersecurity mandates through ITA and CITRA.

**Key Milestones: 2024-2026**

Several critical dates define the current compliance landscape. The UAE PDPL entered its enforcement phase in 2025, meaning organizations can now face penalties for non-compliance. Saudi Arabia's NCA ECC v2 broadened the compliance perimeter significantly. The EU's NIS2 Directive, effective from October 2024, directly impacts Middle Eastern companies with European operations, customers, or supply chain connections. Similarly, DORA (Digital Operational Resilience Act) imposes ICT risk management requirements on financial entities with EU ties.

For organizations operating across multiple GCC jurisdictions, the challenge is compounded — each country maintains its own regulatory framework with distinct requirements, timelines, and enforcement mechanisms.

**The Impact on SMBs**

Small and medium-sized businesses face disproportionate challenges in this new regulatory environment. Compliance costs that represent a rounding error for large enterprises can consume significant portions of an SMB's IT budget. The talent gap is acute — experienced GRC professionals command premium salaries, and the regional shortage of qualified cybersecurity practitioners makes hiring even more difficult.

Cross-border complexity adds another layer. An SMB operating in both the UAE and Saudi Arabia must navigate two distinct data protection laws, multiple cybersecurity frameworks, and potentially different classification requirements for the same data. Organizations with European clients or partners must also account for GDPR, NIS2, and potentially DORA obligations.

**Why Now Matters**

Three converging forces make the current moment critical. First, government digital transformation programs across the GCC — UAE's Digital Government Strategy, Saudi Vision 2030, Qatar National Vision 2030 — are accelerating the digitization of services, which in turn increases the attack surface and regulatory scrutiny on organizations that handle government data or provide digital services.

Second, data localization requirements are tightening. The UAE PDPL, Saudi PDPL, and several sector-specific regulations impose restrictions on cross-border data transfers, requiring organizations to understand where their data resides and how it flows across jurisdictions.

Third, fines are increasing and enforcement is becoming real. The UAE PDPL provides for penalties up to AED 5 million. Saudi Arabia's PDPL includes provisions for fines and criminal penalties. Regulators across the region are building enforcement capacity and signaling their intent to use it.

**Practical Advice for Organizations Starting Their Journey**

For organizations beginning their compliance journey, the path forward starts with understanding your regulatory obligations. Map which laws and frameworks apply to your organization based on your industry, geography, data types, and business relationships. Do not assume that being small exempts you from compliance requirements.

Conduct a gap assessment against the most relevant framework — whether that is NESA, NCA ECC, or a sector-specific standard. Quantify your risks using methodologies like FAIR so that you can communicate exposure in financial terms that leadership and boards understand.

Prioritize quick wins that address the highest-risk gaps first. Implement foundational controls — access management, data classification, incident response procedures — that satisfy multiple regulatory requirements simultaneously. Document everything, because evidence is the currency of compliance.

Finally, consider leveraging technology to reduce the compliance burden. Automated GRC platforms can map controls across multiple frameworks, track evidence, and generate audit-ready reports at a fraction of the cost of manual processes. The investment in tooling pays for itself quickly when you are managing compliance across multiple jurisdictions and frameworks.`,
  },
  {
    title: "AI and the Future of Compliance",
    readTime: "7 min read",
    date: "March 2026",
    preview: "Artificial intelligence is transforming how organizations approach governance, risk, and compliance. From automated policy generation to real-time risk monitoring, AI is making GRC more efficient, more accurate, and more accessible.",
    content: `Artificial intelligence is transforming how organizations approach governance, risk, and compliance. From automated policy generation to real-time risk monitoring, AI is making GRC more efficient, more accurate, and more accessible — but it also introduces new governance challenges that practitioners must address.

**AI Applications in GRC**

The most immediate impact of AI in GRC is the automation of labor-intensive tasks that previously consumed enormous amounts of human time. Policy generation is a prime example — AI can draft comprehensive security policies aligned to specific frameworks (ISO 27001, NESA, NCA ECC) in minutes rather than weeks, using an organization's context to produce relevant, specific documents rather than generic templates.

Risk quantification benefits enormously from AI's ability to process large datasets. FAIR-based risk analysis, which requires estimating loss event frequency and loss magnitude across multiple scenarios, becomes far more practical when AI can analyze historical incident data, industry benchmarks, and organizational context to produce calibrated estimates.

Evidence analysis is another area where AI excels. During audit preparation, organizations must gather and review hundreds of evidence artifacts — policies, configurations, logs, training records. AI can assess evidence completeness, identify gaps, and even score the quality of existing evidence against specific control requirements.

Continuous monitoring represents perhaps the most transformative application. Rather than point-in-time assessments, AI enables organizations to maintain real-time visibility into their compliance posture, flagging deviations as they occur rather than discovering them during the next audit cycle. Anomaly detection in access patterns, configuration changes, and data flows can identify potential compliance violations before they become findings.

**The AI Governance Challenge**

As AI becomes embedded in GRC processes, organizations face a parallel challenge: governing the AI itself. The EU AI Act, which entered into force in 2024, establishes risk-based requirements for AI systems that may directly affect GRC tools using AI for decision-making. ISO 42001, the new standard for AI management systems, provides a framework for organizations to manage AI-related risks systematically.

The NIST AI Risk Management Framework (AI RMF) offers practical guidance for identifying, assessing, and mitigating risks associated with AI systems. For GRC practitioners, this creates a recursive challenge — the tools you use to manage risk must themselves be governed under emerging AI regulations and standards.

Middle Eastern regulators are also paying attention. The UAE has established an AI Office and published AI ethics principles. Saudi Arabia's SDAIA (Saudi Data and AI Authority) is developing AI governance frameworks. Organizations adopting AI-powered GRC tools must anticipate that these tools will themselves become subject to regulatory scrutiny.

**AI Risks in Compliance**

Using AI in compliance contexts introduces specific risks that must be managed carefully. Hallucination — where AI generates plausible but incorrect information — is particularly dangerous in regulatory contexts where accuracy is non-negotiable. An AI that confidently cites a non-existent regulatory requirement or misinterprets a control mapping can lead to compliance failures.

Bias in AI models can produce systematically skewed risk assessments. If training data overrepresents certain industries, geographies, or threat types, the resulting risk quantification may underestimate or overestimate exposure in ways that are difficult to detect without human review.

Transparency and explainability present ongoing challenges. When an AI recommends a specific risk rating or flags an evidence artifact as insufficient, auditors and regulators may demand to understand the reasoning. Black-box AI decisions are increasingly unacceptable in regulated contexts.

Accountability is the overarching concern. When an AI-generated policy contains an error, or an AI risk assessment misses a critical exposure, who is responsible? Organizations must maintain clear accountability frameworks that assign human responsibility for AI-assisted decisions.

**What Practitioners Should Do Now**

The most effective approach today is AI-assisted rather than AI-dependent compliance. Use AI to draft, analyze, and recommend — but maintain human oversight for all critical decisions. Treat AI outputs as first drafts that require expert review, not as final products.

Build AI governance frameworks now, before regulations require them. Document which AI tools you use, what data they process, how their outputs are validated, and who has accountability for AI-assisted decisions. This documentation will be valuable when regulators begin auditing AI usage in GRC processes.

Invest in understanding AI capabilities and limitations. GRC practitioners do not need to become AI engineers, but they do need sufficient literacy to evaluate AI outputs critically and identify when an AI tool is operating outside its competence.

**How SecureEdge GRC Uses AI Responsibly**

At SecureEdge GRC, AI is integrated as an augmentation layer, not a replacement for human judgment. Claude AI assists with policy generation, producing framework-aligned drafts that consultants review and customize. Evidence scoring uses AI to assess completeness and quality, but human analysts validate findings before they reach client reports. Board summaries leverage AI to translate technical findings into executive language, but every summary is reviewed for accuracy and appropriateness.

The principle is simple: AI handles the 75% of work that is repetitive, time-consuming, and well-defined. Humans handle the 25% that requires judgment, context, and accountability. This approach delivers the efficiency benefits of AI while maintaining the trust and accuracy that compliance demands.`,
  },
  {
    title: "Data Mining, Analytics & GRC Intelligence",
    readTime: "8 min read",
    date: "March 2026",
    preview: "The GRC profession is undergoing a data revolution. Organizations that once relied on periodic assessments and subjective risk ratings are discovering that their compliance and risk data — when properly collected, structured, and analyzed — contains powerful predictive intelligence.",
    content: `The GRC profession is undergoing a data revolution. Organizations that once relied on periodic assessments and subjective risk ratings are discovering that their compliance and risk data — when properly collected, structured, and analyzed — contains powerful predictive intelligence that can transform how they manage risk.

**From Data Collection to Decision Intelligence**

Most organizations sit at the lower end of what we call the GRC data maturity curve. At the base level, organizations collect compliance data reactively — gathering evidence for audits, recording incidents after they occur, maintaining policy documents that may or may not reflect actual practices. This data exists in silos: spreadsheets, email threads, shared drives, and the institutional memory of individual team members.

The next level involves structured data collection — using GRC platforms to systematically capture risk assessments, control evaluations, audit findings, and remediation tracking in a centralized, queryable format. This alone represents a significant improvement, enabling basic reporting and trend analysis.

True GRC intelligence emerges at the analytical level, where organizations apply statistical methods, machine learning, and predictive modeling to their accumulated compliance and risk data. At this level, data stops being a record of the past and becomes a tool for anticipating the future.

**FAIR and Data Mining: Quantitative Risk Meets Predictive Analytics**

The FAIR (Factor Analysis of Information Risk) methodology is uniquely suited to data-driven GRC because it produces quantitative outputs — dollar-denominated risk values — rather than subjective ordinal ratings. When you express risk as Annualized Loss Expectancy (ALE) calculated from calibrated estimates of Loss Event Frequency (LEF) and Loss Magnitude (LM), you create data that can be aggregated, trended, correlated, and modeled.

Combine FAIR risk data with historical incident data, control effectiveness measurements, and external threat intelligence, and you have the foundation for predictive risk analytics. Organizations can begin to answer questions that were previously unanswerable: Which control failures are most likely to precede a material incident? How does our risk exposure change when we add a new cloud service provider? What is the probability that our current remediation timeline will prevent a compliance finding at the next audit?

Data mining techniques — clustering, association rule learning, regression analysis — applied to GRC data can reveal patterns that human analysts miss. For example, clustering analysis on audit findings might reveal that certain types of control failures consistently co-occur, suggesting a common root cause that targeted remediation can address more efficiently than fixing each finding individually.

**Practical Use Cases**

Predicting control failures is one of the highest-value applications of GRC analytics. By analyzing historical control assessment data alongside operational metrics (system uptime, patch latency, access review completion rates), organizations can identify controls at risk of failure before the next assessment cycle. This enables proactive remediation rather than reactive finding management.

Identifying compliance drift — the gradual degradation of compliance posture between formal assessments — becomes possible when you have continuous monitoring data. Statistical process control techniques can detect when compliance metrics begin trending outside acceptable ranges, triggering intervention before a formal non-compliance event occurs.

Risk correlation analysis examines relationships between different risk factors to identify concentrations and dependencies. An organization might discover that its top five risks by ALE all depend on the same third-party service provider, revealing a concentration risk that individual risk assessments would not surface.

Vendor risk scoring benefits from data mining when organizations can analyze vendor assessment data across their entire portfolio, identifying patterns that distinguish high-risk vendors from low-risk ones based on objective indicators rather than self-reported questionnaire responses.

**Privacy Considerations**

GRC data analytics raises important privacy questions, particularly under the GDPR, UAE PDPL, and other data protection regulations. Risk assessments may contain information about individuals (access patterns, training completion, incident involvement). Vendor risk data may include personal data about vendor employees. Incident records often contain details that could identify individuals involved in security events.

Organizations must apply the same data protection principles to their GRC analytics that they apply to all other data processing activities. This means establishing lawful bases for processing, implementing data minimization, applying pseudonymization where possible, and conducting data protection impact assessments for analytics activities that involve personal data at scale.

The tension between analytical value and privacy protection is real but manageable. Aggregate and anonymize wherever possible. Focus analytics on organizational and system-level patterns rather than individual behavior. Implement access controls that restrict GRC analytics to authorized personnel. Document your processing activities and their legal bases.

**The Future: Real-Time Risk Dashboards and Continuous Compliance**

The trajectory of GRC data analytics points toward real-time risk intelligence. Imagine a dashboard that shows your organization's risk exposure updating in real time as controls are assessed, incidents are recorded, and external threat intelligence feeds new data into your risk models. Not a quarterly report, but a living, breathing view of organizational risk.

Automated evidence collection is already emerging, with GRC platforms that pull evidence directly from cloud configurations, identity providers, endpoint management systems, and security tools. This eliminates the manual evidence gathering process that consumes enormous amounts of time during audit preparation and enables continuous compliance verification.

The convergence of AI and GRC data analytics will accelerate these trends. AI models trained on organizational GRC data can provide increasingly accurate predictions, generate natural-language risk narratives for board reporting, and identify emerging risks before they materialize as incidents or audit findings.

Organizations that invest in building their GRC data foundations today — structured data collection, quantitative risk methodologies, centralized platforms — will be positioned to leverage these capabilities as they mature. Those that continue to rely on spreadsheets and subjective assessments will find themselves increasingly unable to meet regulatory expectations or compete with organizations that have embraced data-driven risk management.`,
  },
];

interface ComingSoon {
  title: string;
  quarter: string;
  desc: string;
}

const COMING_SOON: ComingSoon[] = [
  { title: "Zero Trust Architecture in GCC", quarter: "Q2 2026", desc: "Implementing zero trust principles in Gulf Cooperation Council organizations" },
  { title: "Cyber Insurance Trends & Requirements", quarter: "Q2 2026", desc: "How evolving underwriting requirements are reshaping security programs" },
  { title: "Supply Chain Risk Management", quarter: "Q3 2026", desc: "Third-party risk frameworks for interconnected digital ecosystems" },
  { title: "Privacy Engineering for SMBs", quarter: "Q3 2026", desc: "Practical privacy-by-design implementation for small and medium businesses" },
];

/* ─── Component ─── */
export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [activeTab, setActiveTab] = useState<"library" | "hub">("library");
  const [searchQuery, setSearchQuery] = useState("");
  const [pricingFilter, setPricingFilter] = useState<Pricing | "All">("All");
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    () => new Set([0, 1, 2])
  );
  const [expandedArticles, setExpandedArticles] = useState<Set<number>>(
    () => new Set()
  );

  const toggleCategory = (idx: number) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const toggleArticle = (idx: number) => {
    setExpandedArticles((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  /* Filter logic */
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return CATEGORIES.map((cat) => {
      const filtered = cat.resources.filter((r) => {
        const matchesPricing = pricingFilter === "All" || r.pricing === pricingFilter;
        const matchesSearch =
          !q ||
          r.name.toLowerCase().includes(q) ||
          r.desc.toLowerCase().includes(q);
        return matchesPricing && matchesSearch;
      });
      return { ...cat, resources: filtered };
    }).filter((cat) => cat.resources.length > 0);
  }, [searchQuery, pricingFilter]);

  const totalResources = filteredCategories.reduce((s, c) => s + c.resources.length, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0f2044] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1a56db]/30 border border-[#1a56db]/50 rounded-full px-4 py-1.5 text-sm text-[#06b6d4] mb-6">
            <BookOpen size={14} />
            <span>Curated for GRC Professionals</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Resources & <span className="text-[#06b6d4]">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Standards, regulators, tools, training, and insights — everything a GRC practitioner needs in one place.
          </p>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="bg-gray-50 border-b border-gray-200 px-4">
        <div className="max-w-5xl mx-auto flex justify-center py-4">
          <div className="inline-flex bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("library")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "library"
                  ? "bg-[#1a56db] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#0f2044] hover:bg-gray-50"
              }`}
            >
              Resource Library
            </button>
            <button
              onClick={() => setActiveTab("hub")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "hub"
                  ? "bg-[#1a56db] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#0f2044] hover:bg-gray-50"
              }`}
            >
              Knowledge Hub
            </button>
          </div>
        </div>
      </section>

      {/* ─── TAB 1: Resource Library ─── */}
      {activeTab === "library" && (
        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search & Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search resources..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db]/30 focus:border-[#1a56db] shadow-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {PRICING_FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setPricingFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                      pricingFilter === f
                        ? "bg-[#1a56db] text-white border-[#1a56db]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#1a56db] hover:text-[#1a56db]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
                <span className="ml-auto text-xs text-gray-400 self-center">
                  {totalResources} resource{totalResources !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {filteredCategories.map((cat, catIdx) => {
                const originalIdx = CATEGORIES.findIndex(
                  (c) => c.title === cat.title
                );
                const isExpanded = expandedCategories.has(originalIdx);
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.title}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleCategory(originalIdx)}
                      className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} className="text-[#1a56db]" />
                        <span className="font-bold text-[#0f2044] text-base">
                          {cat.title}
                        </span>
                        <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {cat.resources.length}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp size={18} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={18} className="text-gray-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="border-t border-gray-100">
                        {cat.resources.map((r, rIdx) => (
                          <div
                            key={r.name}
                            className={`flex items-start sm:items-center justify-between px-6 py-3 gap-3 ${
                              rIdx > 0 ? "border-t border-gray-50" : ""
                            } hover:bg-gray-50/50 transition-colors`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <a
                                  href={r.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#1a56db] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                                >
                                  {r.name}
                                  <ExternalLink size={12} className="opacity-50" />
                                </a>
                              </div>
                              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                                {r.desc}
                              </p>
                            </div>
                            <span
                              className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                                PRICING_STYLES[r.pricing]
                              }`}
                            >
                              {r.pricing}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredCategories.length === 0 && (
                <div className="text-center py-16 text-gray-400">
                  <Search size={40} className="mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">No resources match your filters</p>
                  <p className="text-sm mt-1">Try adjusting your search or pricing filter</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── TAB 2: Knowledge Hub ─── */}
      {activeTab === "hub" && (
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {ARTICLES.map((article, idx) => {
                const isExpanded = expandedArticles.has(idx);
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <div className="px-6 py-5">
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0f2044] mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {article.preview}
                      </p>
                      <button
                        onClick={() => toggleArticle(idx)}
                        className="mt-4 text-[#1a56db] font-semibold text-sm hover:underline"
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="border-t border-gray-100 px-6 py-6">
                        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                          {article.content.split("\n\n").map((para, pIdx) => {
                            if (para.startsWith("**") && para.endsWith("**")) {
                              return (
                                <h4
                                  key={pIdx}
                                  className="text-lg font-bold text-[#0f2044] mt-6 mb-3"
                                >
                                  {para.replace(/\*\*/g, "")}
                                </h4>
                              );
                            }
                            return (
                              <p key={pIdx} className="mb-4">
                                {para.split(/(\*\*[^*]+\*\*)/).map((segment, sIdx) => {
                                  if (
                                    segment.startsWith("**") &&
                                    segment.endsWith("**")
                                  ) {
                                    return (
                                      <strong key={sIdx} className="text-[#0f2044]">
                                        {segment.replace(/\*\*/g, "")}
                                      </strong>
                                    );
                                  }
                                  return <span key={sIdx}>{segment}</span>;
                                })}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Coming Soon */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-[#0f2044] mb-4">
                Coming Soon
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMING_SOON.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-5 opacity-70"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Lock size={14} className="text-gray-400" />
                        <span className="text-xs font-semibold text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-400">
                        {item.quarter}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#0f2044] text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-sm mb-2">
            Know a resource we should include?
          </p>
          <a
            href="mailto:support@grclaunchpad.net?subject=Resource Suggestion for GRC Launchpad"
            className="text-[#1a56db] font-semibold text-sm hover:underline"
          >
            Email support@grclaunchpad.net
          </a>
        </div>
      </section>
    </div>
  );
}
