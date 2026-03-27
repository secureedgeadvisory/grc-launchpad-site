import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "secureedge", label: "SecureEdge Advisory" },
  { id: "platform", label: "GRC Platform" },
  { id: "assessment", label: "Free Assessment" },
  { id: "glossary", label: "Glossary" },
  { id: "news", label: "GRC News" },
  { id: "privacy", label: "Privacy" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0f2044] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            <div className="bg-[#1a56db] rounded-lg p-1.5">
              <Shield size={20} className="text-white" />
            </div>
            <span className="hidden sm:block">GRC Launchpad</span>
            <span className="text-[#06b6d4] text-xs font-normal hidden sm:block">by SecureEdge Advisory</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-[#1a56db] text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate("assessment")}
              className="ml-2 px-4 py-2 bg-[#06b6d4] hover:bg-cyan-400 text-[#0f2044] font-bold rounded-lg text-sm transition-colors"
            >
              Start Assessment →
            </button>
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
        <div className="md:hidden bg-[#0a1830] border-t border-white/10 px-4 py-3 space-y-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? "bg-[#1a56db] text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate("assessment"); setMenuOpen(false); }}
            className="block w-full text-left px-3 py-2 bg-[#06b6d4] text-[#0f2044] font-bold rounded-lg text-sm"
          >
            Start Free Assessment →
          </button>
        </div>
      )}
    </nav>
  );
}
