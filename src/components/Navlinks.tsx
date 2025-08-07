import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
 
const navItems = [
  { label: "Home", path: "/", hasDropdown: false },
  {
    label: "Inspire",
    path: "/inspire",
    hasDropdown: true,
    options: [
      { label: "Inspired History", path: "/inspire/history" },
      { label: "Inspired Leadership", path: "/inspire/leadership" },
    ]
  },
  { label: "Be Inspired", path: "/be-inspired", hasDropdown: false },
  {
    label: "Pathways",
    path: "/pathways",
    hasDropdown: true,
    options: [
      { label: "School of Science Technology Engineering & Mathematics", path: "/stem" },
      { label: "School of Social Sciences", path: "/social-sciences" },
      { label: "School of Arts & Sport Science", path: "/arts-sports" },
      { label: "Aviation Program", path: "/aviation" },
      { label: "Marine program", path: "/marine" },
      { label: "AI Program", path: "/AI" },
    ]
  },
  {
    label: "Student Life",
    path: "/student-life",
    hasDropdown: true,
    options: [
      { label: "Soccer", path: "/student-life/soccer" },
      { label: "Swimming", path: "/student-life/swimming" },
      { label: "BasketBall", path: "/student-life/basketball" },
      { label: "Golf", path: "/student-life/golf" },
    ]
  },
  {
    label: "Boarding Life",
    path: "/boarding-life",
    hasDropdown: true,
    options: [
      { label: "Dorm Life", path: "/boarding-life/dorm-life" },
      { label: "Dance Life", path: "/boarding-life/dance-life" },
      { label: "Nursing Care", path: "/boarding-life/nursing-care" },
      { label: "Chaplaincy", path: "/boarding-life/chaplaincy" },
    ]
  },
  {
    label: "Join Us",
    path: "/join-us",
    hasDropdown: true,
    options: [
      { label: "Join Grade 9", path: "/join-us/grade-9" },
      { label: "Join Grade 10", path: "/join-us/grade-10" },
      { label: "Join Form 2", path: "/join-us/form-2" },
      { label: "Join Form 3", path: "/join-us/form-3" },
      { label: "Join Form 4", path: "/join-us/form-4" },
      { label: "Enquire", path: "https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F", external: true },
    ]
  },
  {
    label: "Fees",
    path: "/fees",
    hasDropdown: true,
    options: [
      { label: "Grade 9", path: "/fees/grade-9" },
      { label: "Grade 10", path: "/fees/grade-10" },
      { label: "Form 2", path: "/fees/form-2" },
      { label: "Form 3", path: "/fees/form-3" },
      { label: "Form 4", path: "/fees/form-4" },
      { label: "Terms & Conditions", path: "/fees/terms-conditions" },
    ]
  },
  { label: "Our Location", path: "/our-location", hasDropdown: false },
  {
    label: "Get Access",
    path: "/get-access",
    hasDropdown: true,
    options: [
      { label: "Calendar of Events", path: "/calendar" },
      { label: "Student Access", path: "/student-access" },
      { label: "Staff Access", path: "/staff-access" },
    ]
  },
];
 
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsDropdownClicked(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        if (!target.closest('.mobile-menu-button')) {
          setMobileMenuOpen(false);
          setActiveMobileDropdown(null);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
    if (!isDropdownClicked) {
      setActiveDropdown(index);
    }
  };
 
  const handleMouseLeave = () => {
    if (!isDropdownClicked) {
      setActiveDropdown(null);
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
        handleNavigation(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
 
  return (
    <nav className="bg-[#bfd5ee] text-gray-800 shadow-lg relative">
      <div className="w-full px-6 flex items-center justify-between h-full relative py-4">
        {/* Logo */}
        <div
          className="font-bold text-base text-gray-900 flex items-center cursor-pointer z-20"  
          onClick={() => handleNavigation('/')}
        >
          <div className="h-10 w-10 flex items-center justify-center text-white font-bold text-sm">
            <img src="/pgslogo.webp"/>
          </div>
          <span className="ml-2">Pioneer Girls School</span>
        </div>
 
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden mobile-menu-button z-20 p-2 rounded-md hover:bg-[#cfa53aff] transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
 
        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center h-full" ref={dropdownRef}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`relative group h-6 flex items-center ${index < navItems.length - 1 ? 'border-r border-gray-400' : ''}`}
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.hasDropdown ? (
                <div
                  className="flex items-center px-4 py-4 rounded-sm hover:bg-[#cfa53aff] cursor-pointer h-full transition-colors duration-200"
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
                  className="px-4 py-4 rounded-sm hover:bg-[#cfa53aff] cursor-pointer h-full flex items-center transition-colors duration-200"
                >
                  <span className="text-md font-bold whitespace-nowrap">{item.label}</span>
                </NavLink>
              )}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-8 bg-[#bfd5ee] shadow-lg rounded-md border border-gray-200 z-50 min-w-max">
                  <div className="p-2">
                    {item.options?.map((option, idx) =>
                      option.external ? (
                        <a
                          key={idx}
                          href={option.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-1 text-sm text-gray-600 hover:bg-[#cfa53aff] rounded-md p-2 whitespace-nowrap"
                          onClick={handleDropdownItemClick}
                        >
                          {option.label}
                        </a>
                      ) : (
                        <NavLink
                          key={idx}
                          to={option.path}
                          className="block py-1 text-sm text-gray-600 hover:bg-[#cfa53aff] rounded-md p-2 whitespace-nowrap"
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
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
      )}
 
      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#bfd5ee] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-300">
            <span className="font-bold text-lg text-gray-900">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-[#cfa53aff] transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>
 
          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#cfa53aff] transition-colors duration-200"
                      onClick={() => handleMobileDropdownToggle(index)}
                    >
                      <span className="font-medium text-gray-900">{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeMobileDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeMobileDropdown === index && (
                      <div className="bg-gray-50 border-t border-gray-200">
                        {item.options?.map((option, idx) =>
                          option.external ? (
                            <a
                              key={idx}
                              href={option.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-8 py-3 text-sm text-gray-600 hover:bg-[#cfa53aff] transition-colors duration-200"
                              onClick={handleMobileItemClick}
                            >
                              {option.label}
                            </a>
                          ) : (
                            <NavLink
                              key={idx}
                              to={option.path}
                              className="block px-8 py-3 text-sm text-gray-600 hover:bg-[#cfa53aff] transition-colors duration-200"
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
                    className="block px-6 py-4 font-medium text-gray-900 hover:bg-[#cfa53aff] transition-colors duration-200"
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

	
		
		

 