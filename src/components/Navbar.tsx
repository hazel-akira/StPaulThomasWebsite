import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/", hasDropdown: false },
  {
    label: "Who We Are",
    path: "/who",
    hasDropdown: true,
    options: [
      { label: "Our History", path: "/history" },
      { label: "Our Leadership", path: "/leadership" },
      { label: "Our Nurturing Team", path: "/nurturing" },
    ]
  },
  {
    label: "Nurture",
    path: "/nurture",
    hasDropdown: true,
    options: [
      { label: "Farm 2 Fork", path: "/farm-2-fork" },
      { label: "Home From Home", path: "/homefromhome" },
      { label: "Discipline", path: "/discipline" },
      { label: "Chaplaincy", path: "/chaplaincy" },
      { label: "Nursing Care", path: "/nursing-care" },
      { label: "Safety & Security", path: "/safety" },
    ]
  },
  {
    label: "Study Life",
    path: "/studylife",
    hasDropdown: true,
    options: [
      { label: "Leadership Pathways", path: "/tailor-made-leadership-pathways" },
      { label: "Young Air Cadet", path: "/cadet" },
      { label: "Coding Life", path: "/coding" },
      { label: "Young Seafarers", path: "/seafarers" },
    ]
  },
  { label: "KPSEA", path: "/kpsea", hasDropdown: false },
  {
    label: "Talent",
    path: "/talent",
    hasDropdown: true,
    options: [
      { label: "Band Life", path: "/band" },
      { label: "Chess Masters", path: "/chess" },
      { label: "Scouts Life", path: "/scouts" },
      { label: "Swimmers Life", path: "/swimmers" },
      { label: "Basketball Life", path: "/basket" },
      { label: "Footballer Life", path: "/football" },
    ]
  },
  {
    label: "Fees",
    path: "/fees",
    hasDropdown: true,
    options: [
      { label: "Grade 4 Fees", path: "/grade4fee" },
      { label: "Grade 5 Fees", path: "/grade5fee" },
      { label: "Grade 6 Fees", path: "/grade6fee" },
      { label: "Terms & Conditions", path: "/terms" },
    ]
  },
  {
    label: "Join Us",
    path: "/join",
    hasDropdown: true,
    options: [
      { label: "Join Grade 4", path: "/grade4" },
      { label: "Join Grade 5", path: "/grade5" },
      { label: "Join Grade 6", path: "/grade6" },
      { label: "Admissions Policy", path: "/admissions" },
      { label: "Enquire", path: "https://enquireto.pioneergroupofschools.co.ke", external: true },
    ]
  },
  { label: "Location", path: "/location", hasDropdown: false },
  {
    label: "Get Access",
    path: "/access",
    hasDropdown: true,
    options: [
      { label: "Calendar of Events", path: "/events" },
      { label: "Student Access", path: "/StuAccess" },
      { label: "Staff Access", path: "/staffAccess" },
    ]
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number>(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const leaveTimeout = useRef<number | null>(null);
  const navigate = useNavigate();

  // Staggered animation for nav items
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < navItems.length) {
        setVisibleItems(i + 1);
        i++;
      } else clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
        setIsDropdownClicked(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        const htmlTarget = event.target as HTMLElement;
        if (!htmlTarget.closest('.mobile-menu-button')) {
          setMobileMenuOpen(false);
          setActiveMobileDropdown(null);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleDropdownToggle = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
    setIsDropdownClicked(true);
  };

  const handleMouseEnter = (index: number) => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    if (!isDropdownClicked) setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    if (!isDropdownClicked) {
      leaveTimeout.current = window.setTimeout(() => setActiveDropdown(null), 200);
    }
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsDropdownClicked(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const handleMobileDropdownToggle = (index: number) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  const handleMobileItemClick = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const NavLink = ({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (!to.startsWith("http")) handleNavigation(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );

  return (
    <nav className="bg-[#85a7c9] text-black shadow-md relative z-50">
      <div className="w-full px-6 flex items-center justify-between h-full relative py-4">
        {/* Logo */}
        <div className="font-bold text-xl cursor-pointer z-20" onClick={() => handleNavigation('/')}>
          St Paul Thomas Academy
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden mobile-menu-button z-20 p-2 rounded-md bg-[#de9642] hover:bg-[#cfa53a] transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center h-full" ref={dropdownRef}>
          {navItems.slice(0, visibleItems).map((item, index) => (
            <div
              key={`nav-${index}`}
              className={`relative group h-6 flex font-bold items-center ${index < navItems.length - 1 ? 'border-r border-black' : ''}`}
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.hasDropdown ? (
                <div
                  className="flex items-center px-3 py-2 rounded-sm  hover:bg-[#7fa0c0] cursor-pointer h-full transition-colors duration-200"
                  onClick={(e) => handleDropdownToggle(e, index)}
                >
                  <NavLink to={item.path} className="text-md font-bold whitespace-nowrap">
                    {item.label}
                  </NavLink>
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`}
                  />
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className="px-4 py-2 rounded-sm hover:bg-[#7fa0c0] cursor-pointer h-full flex items-center transition-colors duration-200"
                >
                  {item.label}
                </NavLink>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md border text-sm border-gray-200 z-50 min-w-max animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {item.options?.map((option, idx) =>
                      option.external ? (
                        <a
                          key={`dropdown-${idx}`}
                          href={option.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-1 text-md font-bold text-black hover:bg-[#7fa0c0] rounded-md p-2 whitespace-nowrap transition-colors duration-150"
                          onClick={handleDropdownItemClick}
                        >
                          {option.label}
                        </a>
                      ) : (
                        <NavLink
                          key={`dropdown-${idx}`}
                          to={option.path}
                          className="block py-1 text-md font-bold text-black hover:bg-[#7fa0c0] rounded-md p-2 whitespace-nowrap transition-colors duration-150"
                          onClick={handleDropdownItemClick}
                        >
                          {option.label}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && <div className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#85a7c9] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-300">
            <span className="font-bold text-lg text-black">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-[#de9642] transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {navItems.map((item, index) => (
              <div key={`mobile-${index}`} className="border-b border-gray-200 last:border-b-0">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#de9642] transition-colors duration-200"
                      onClick={() => handleMobileDropdownToggle(index)}
                    >
                      <span className="font-medium text-black">{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${activeMobileDropdown === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeMobileDropdown === index && (
                      <div className="bg-[#d0d4db] border-t border-gray-200">
                        {item.options?.map((option, idx) =>
                          option.external ? (
                            <a
                              key={`mobile-dropdown-${idx}`}
                              href={option.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-8 py-3 text-sm text-black hover:bg-[#de9642] transition-colors duration-200"
                              onClick={handleMobileItemClick}
                            >
                              {option.label}
                            </a>
                          ) : (
                            <NavLink
                              key={`mobile-dropdown-${idx}`}
                              to={option.path}
                              className="block px-8 py-3 text-sm text-black hover:bg-[#de9642] transition-colors duration-200"
                              onClick={handleMobileItemClick}
                            >
                              {option.label}
                            </NavLink>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className="block px-6 py-4 font-medium text-black hover:bg-[#cfa53a] transition-colors duration-200"
                    onClick={handleMobileItemClick}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
