import React, { useState, useRef, useEffect, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface DropdownMenuProps {
  isOpen: boolean;
  children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children }) => (
  <div
    className={`absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white text-gray-800 rounded-lg shadow-lg z-50 transition-all duration-200 overflow-hidden 
      ${isOpen ? 'opacity-100 max-h-96 py-2' : 'opacity-0 max-h-0'}`}
  >
    {children}
  </div>
);

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        openDropdown &&
        dropdownRefs.current[openDropdown] &&
        !dropdownRefs.current[openDropdown]!.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleDropdown = (key: string) =>
    setOpenDropdown(openDropdown === key ? null : key);
  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const menu = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'who', label: 'Who We Are', to: '/who', sub: ['Vision & Mission', 'Our Team', 'History'] },
    { key: 'kcpe', label: 'KCPE Results', to: '/kcpe' },
    { key: 'nurture', label: 'Nurture', to: '/nurture', sub: ['Spiritual', 'Academic', 'Character'] },
    { key: 'study', label: 'Study Life', to: '/study', sub: ['Clubs', 'Sports', 'Events'] },
    { key: 'talent', label: 'Talent', to: '/talent', sub: ['Arts', 'Music', 'Drama'] },
    { key: 'fees', label: 'Our Friendly Fees', to: '/fees' },
    { key: 'join', label: 'How To Join Us', to: '/join' },
    { key: 'location', label: 'Location', to: '/location' },
    { key: 'access', label: 'Get Access', to: '/access' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex-shrink-0">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 text-white text-sm font-medium">
          {menu.map(item => (
            <div
              key={item.key}
              className="relative"
              ref={el => {
                dropdownRefs.current[item.key] = el;
              }}
              onMouseEnter={() => item.sub && setOpenDropdown(item.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={item.to}
                className="flex items-center hover:text-gray-200"
                onClick={closeAll}
              >
                {item.label}
                {item.sub && <ChevronDownIcon className="ml-1 h-4 w-4" />}
              </NavLink>

              {item.sub && (
                <DropdownMenu isOpen={openDropdown === item.key}>
                  {item.sub.map(s => (
                    <NavLink
                      key={s}
                      to={`${item.to}#${s.replace(/\s+/g, '-').toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={closeAll}
                    >
                      {s}
                    </NavLink>
                  ))}
                </DropdownMenu>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#13365E] text-white backdrop-blur-md p-4 space-y-2">
          {menu.map(item => (
            <div key={item.key}>
              <NavLink to={item.to} className="block py-2 font-semibold" onClick={closeAll}>
                {item.label}
              </NavLink>
              {item.sub && (
                <div className="pl-4">
                  {item.sub.map(s => (
                    <NavLink
                      key={s}
                      to={`${item.to}#${s.replace(/\s+/g, '-').toLowerCase()}`}
                      className="block py-1 text-gray-300"
                      onClick={closeAll}
                    >
                      {s}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
