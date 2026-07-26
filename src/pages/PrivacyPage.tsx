import { Shield } from "lucide-react";

const SECTIONS = [
  {
    title: "1. Data Collection",
    content: "SecureEdge GRC LaunchPad does not collect, store, transmit, or process any personal data. Your assessment answers, organization name, industry selection, and all other inputs remain entirely within your browser. No data is sent to any server, database, or third-party service."
  },
  {
    title: "2. No Accounts Required",
    content: "The LaunchPad assessment does not require user registration, login, email addresses, or any form of account creation. There are no passwords, no user profiles, and no authentication mechanisms. You can use the tool completely anonymously."
  },
  {
    title: "3. Cookies & Tracking",
    content: "SecureEdge does not use cookies, local storage, session storage, or any browser-based tracking mechanisms. No fingerprinting, no pixel tracking, no advertising identifiers, and no cross-site tracking of any kind."
  },
  {
    title: "4. Analytics",
    content: "SecureEdge does not currently use any analytics services. No usage data, page views, click events, or behavioral data is collected. If analytics are introduced in the future, this policy will be updated accordingly."
  },
  {
    title: "5. Assessment Data",
    content: "All assessment calculations -- including maturity scoring, FAIR risk quantification, and report generation -- are performed entirely client-side using JavaScript running in your browser. Your answers never leave your device."
  },
  {
    title: "6. Third-Party Links",
    content: "This site may contain links to external websites. These external sites have their own privacy policies, and SecureEdge Advisory is not responsible for the privacy practices of third-party websites."
  },
  {
    title: "7. Changes to This Policy",
    content: "SecureEdge Advisory reserves the right to update this privacy policy at any time. Any changes will be reflected on this page with an updated revision date."
  },
  {
    title: "8. Contact Us",
    content: "If you have any questions about this privacy policy, please contact us."
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400">SecureEdge by SecureEdge Advisory</p>
          <p className="text-sm text-gray-500 mt-1">Last updated: April 2026</p>
        </div>

        {/* Core commitment */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield size={18} className="text-emerald-400" />
            <h2 className="text-lg font-bold text-emerald-400">Our Core Privacy Commitment</h2>
          </div>
          <p className="text-gray-300">
            The LaunchPad assessment stores zero data. No accounts. No cookies. No tracking.
            Your assessment runs entirely in your browser -- nothing is ever transmitted or stored.
          </p>
        </div>

        <div className="space-y-6">
          {SECTIONS.map((section, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{section.content}</p>
              {section.title === "8. Contact Us" && (
                <div className="mt-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-sm font-semibold text-white mb-1">SecureEdge Advisory</p>
                  <p className="text-sm text-gray-400">Dubai, United Arab Emirates</p>
                  <a
                    href="mailto:info@secureedgeadvisory.com"
                    className="text-sm text-blue-400 hover:underline font-medium"
                  >
                    info@secureedgeadvisory.com
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {["Zero Data Stored", "No Accounts", "No Cookies", "No Tracking", "Client-Side Only"].map(tag => (
              <span key={tag} className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
