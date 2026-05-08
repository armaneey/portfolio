import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900">
            IMAN SHU&apos;AIBU
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" }
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-6">
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  to="/"
                  className="text-xl font-bold text-gray-900"
                  onClick={() => setMenuOpen(false)}
                >
                  IMAN SHU&apos;AIBU
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                {[
                  { to: "/", label: "About" },
                  { to: "/projects", label: "Projects" },
                  { to: "/services", label: "Services" },
                  { to: "/contact", label: "Contact" }
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;