import { Lock, Shield } from "lucide-react";

const SECTIONS = [
  {
    title: "1. Data Collection",
    content: "GRC Launchpad does not collect, store, transmit, or process any personal data. Your assessment answers, organization name, industry selection, and all other inputs remain entirely within your browser. No data is sent to any server, database, or third-party service. When you close or refresh your browser tab, all data is permanently deleted."
  },
  {
    title: "2. No Accounts Required",
    content: "GRC Launchpad does not require user registration, login, email addresses, or any form of account creation. There are no passwords, no user profiles, and no authentication mechanisms. You can use the tool completely anonymously."
  },
  {
    title: "3. Cookies & Tracking",
    content: "GRC Launchpad does not use cookies, local storage, session storage, or any browser-based tracking mechanisms. No fingerprinting, no pixel tracking, no advertising identifiers, and no cross-site tracking of any kind. Your browsing behavior is not monitored or recorded."
  },
  {
    title: "4. Analytics",
    content: "GRC Launchpad does not currently use any analytics services (Google Analytics, Mixpanel, Hotjar, or similar). No usage data, page views, click events, or behavioral data is collected. If analytics are introduced in the future, this policy will be updated accordingly, and any analytics implementation will respect user privacy."
  },
  {
    title: "5. Assessment Data",
    content: "All assessment calculations — including maturity scoring, FAIR risk quantification, and report generation — are performed entirely client-side using JavaScript running in your browser. Your answers never leave your device. The generated report exists only in your browser's memory until you close the page. If you choose to print or export the report, that action is handled locally by your browser."
  },
  {
    title: "6. Third-Party Links",
    content: "GRC Launchpad may contain links to external websites, including the SecureEdge Advisory website and email links. These external sites have their own privacy policies, and SecureEdge Advisory is not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any external sites you visit."
  },
  {
    title: "7. Children's Privacy",
    content: "GRC Launchpad is a professional tool designed for business use and is not directed at children under the age of 18. We do not knowingly collect any information from children."
  },
  {
    title: "8. Changes to This Policy",
    content: "SecureEdge Advisory reserves the right to update this privacy policy at any time. Any changes will be reflected on this page with an updated revision date. Since we do not collect contact information, we cannot notify users of changes directly — we recommend reviewing this policy periodically."
  },
  {
    title: "9. Contact Us",
    content: "If you have any questions about this privacy policy or GRC Launchpad's privacy practices, please contact us."
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#0f2044] rounded-xl p-3">
              <Lock size={24} className="text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#0f2044] mb-2">Privacy Policy</h1>
          <p className="text-gray-600">GRC Launchpad™ by SecureEdge Advisory</p>
          <p className="text-sm text-gray-400 mt-1">Last updated: January 2026</p>
        </div>

        {/* Core commitment banner */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield size={20} className="text-emerald-600" />
            <h2 className="text-lg font-bold text-emerald-800">Our Core Privacy Commitment</h2>
          </div>
          <p className="text-emerald-700 font-medium">
            GRC Launchpad stores zero data. No accounts. No cookies. No tracking. No analytics.
            Your assessment runs entirely in your browser — nothing is ever transmitted or stored.
          </p>
        </div>

        {/* Policy sections */}
        <div className="space-y-6">
          {SECTIONS.map((section, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#0f2044] mb-3">{section.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
              {section.title === "9. Contact Us" && (
                <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-sm font-semibold text-[#0f2044] mb-1">SecureEdge Advisory</p>
                  <p className="text-sm text-gray-600">Dubai, United Arab Emirates</p>
                  <a
                    href="mailto:info@secureedgeadvisory.com"
                    className="text-sm text-[#06b6d4] hover:underline font-medium"
                  >
                    info@secureedgeadvisory.com
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Privacy by Design banner */}
        <div className="mt-10 bg-[#0f2044] text-white rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield size={24} className="text-[#06b6d4]" />
            <h2 className="text-xl font-bold">Privacy by Design</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            GRC Launchpad was built from the ground up with privacy as a core architectural principle — not an afterthought.
            We believe security assessment tools should practice what they preach. Your data is yours alone.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {["Zero Data Stored", "No Accounts", "No Cookies", "No Tracking", "Client-Side Only", "Open Assessment"].map(tag => (
              <span key={tag} className="text-xs text-[#06b6d4] bg-white/10 border border-[#06b6d4]/30 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 SecureEdge Advisory. All rights reserved. GRC Launchpad™ is a trademark of SecureEdge Advisory.
        </p>
      </div>
    </div>
  );
}
