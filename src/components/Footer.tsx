interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080c1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-0.5 mb-3">
              <span className="text-white font-black text-lg">Secure</span>
              <span className="text-[#2563eb] font-light text-lg">Edge</span>
            </div>
            <p className="text-sm text-gray-500 mb-3 max-w-sm">
              Enterprise compliance as an operating system.
              AI-powered governance, risk, and compliance.
            </p>
            <p className="text-xs text-[#2563eb] font-medium tracking-wider uppercase">
              Powered by AEGIS
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: "platform", label: "Platform" },
                { id: "assessment", label: "Assessment" },
                { id: "privacy", label: "Privacy Policy" },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-500 hover:text-[#2563eb] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@secureedgeadvisory.com" className="text-gray-500 hover:text-[#2563eb] transition-colors">
                  info@secureedgeadvisory.com
                </a>
              </li>
              <li className="text-gray-600">SecureEdge Advisory</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>&copy; 2026 SecureEdge Advisory. All rights reserved.</p>
          <p className="text-[#2563eb]/60">Powered by AEGIS</p>
        </div>
      </div>
    </footer>
  );
}
