import { Shield } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0f2044] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-[#1a56db] rounded-lg p-1.5">
                <Shield size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">SecureEdge GRC</span>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              AI-powered governance, risk & compliance platform by SecureEdge Advisory.
              Helping organizations across the UAE and GCC automate compliance
              and quantify risk in dollar terms.
            </p>
            <p className="text-xs text-[#06b6d4] font-medium mb-2">Powered by AEGIS</p>
            <p className="text-xs text-gray-500">
              Aligned to: ISO 27001 · NIST CSF · NESA · UAE PDPL · GDPR · SOX · COBIT · CIS v8 · FAIR
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-[#06b6d4]">
              <Shield size={12} />
              <span>Zero data stored · No accounts · Client-side only · Privacy by design</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "secureedge", label: "SecureEdge Advisory" },
                { id: "assessment", label: "Free Assessment" },
                { id: "glossary", label: "GRC Glossary" },
                { id: "news", label: "GRC News" },
                { id: "privacy", label: "Privacy Policy" },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#06b6d4] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@secureedgeadvisory.com" className="hover:text-[#06b6d4] transition-colors">
                  info@secureedgeadvisory.com
                </a>
              </li>
              <li className="text-gray-400">Dubai, United Arab Emirates</li>
              <li>
                <a href="https://secureedgeadvisory.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#06b6d4] transition-colors">
                  secureedgeadvisory.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500">NGOs receive complimentary advisory services. Contact us to learn more.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2026 SecureEdge Advisory. All rights reserved. SecureEdge GRC is a trademark of SecureEdge Advisory.</p>
          <p>This assessment framework is proprietary. Redistribution without permission is prohibited.</p>
        </div>
      </div>
    </footer>
  );
}
