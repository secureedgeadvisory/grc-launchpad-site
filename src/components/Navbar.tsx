import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { id: "platform", label: "Platform" },
  { id: "assessment", label: "Assessment" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-0.5 text-white hover:opacity-90 transition-opacity"
          >
            <span className="font-black text-xl tracking-tight">Secure</span>
            <span className="text-[#2563eb] font-light text-xl tracking-tight">Edge</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href="mailto:info@secureedgeadvisory.com?subject=SecureEdge Enterprise Demo Request"
              className="ml-4 px-5 py-2 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold rounded-lg text-sm transition-all inline-block"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1322] border-t border-white/5 px-4 py-3 space-y-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:info@secureedgeadvisory.com?subject=SecureEdge Enterprise Demo Request"
            className="block w-full text-center px-4 py-2.5 bg-[#2563eb] text-white font-semibold rounded-lg text-sm mt-2"
          >
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}
