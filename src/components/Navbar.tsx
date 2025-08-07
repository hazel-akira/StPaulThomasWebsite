import React, { useState, useRef, useEffect, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon } from '@heroicons/react/24/outline';
interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const closeTimeout = { current: undefined as number | undefined };

const DropdownMenu: React.FC<DropdownMenuProps> = ({
   isOpen,
  children,
  className = '',
}) => (
  <div
    className={`absolute left-0 top-full mt-1 rounded-lg shadow-lg z-50
         transition-all duration-200 overflow-hidden
         ${isOpen ? 'opacity-100 max-h-96 pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none'}
         ${className}
       `}
     >
    {children}
  </div> 
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // close dropdown if clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        openDropdown &&
        dropdownRefs.current[openDropdown] &&
        !dropdownRefs.current[openDropdown]!.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown]);

  // close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleDropdown = (key: string) =>
    setOpenDropdown(openDropdown === key ? null : key);
  const closeAll = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const dropdownItems = {
    whoWeAre: [
      { to: '/who', label: 'Who We Are' },
      { to: '/History', label: 'Our History' },
      { to: '/leadership', label: 'Our Talent Management Team' },
      { to: '/nurturing', label: 'Our Nurturing Management Team' },
    ],
    nurture: [
      { to: '/nurture', label: 'Nurture' },
      { to: '/farm-2-fork', label: 'Farm-2-Fork' },
      { to: '/homefromhome', label: 'Home From Home' },
      { to: '/discipline', label: 'Discipline' },
      { to: '/chaplaincy', label: 'Chaplaincy' },
      { to: '/Nursing ', label: 'Nursing Care' },
      { to: '/Safety', label: 'Safety and Security' },
    ],
    studyLife: [
      { to: '/study', label: 'Study Life' },
      { to: '/tailor-made-leadership-pathways', label: 'Tailor Made Pathways' },
      { to: '/cadet', label: 'Young Air Cadet' },
      { to: '/coding', label: 'Coding Life' },
      { to: '/seafarers', label: 'Young Seafarers' },
    ],
    talent: [
      { to: '/talent', label: 'Talent' },
      { to: '/band', label: 'Band Life' },
      { to: '/scouts', label: 'Scouts Life' },
      { to: '/chess', label: 'Chess Masters' },
      { to: '/skating', label: 'Skating Life' },
      { to: '/cycling', label: 'Cycling Life' },
      { to: '/swimmers', label: 'Swimmers Life' },
      { to: '/basketLife', label: 'Basketball Life' },
      { to: '/football', label: 'Footballer Life' },
      { to: '/chef', label: 'Master Chef' },
      { to: '/golf', label: 'Junior Golfer' },
    ],
    fees: [
      { to: '/fees', label: 'Our Friendly Fees' },
      { to: '/grade4fee', label: 'Grade 4 Fees' },
      { to: '/grade5fee', label: 'Grade 5 Fees' },
      { to: '/grade6fee', label: 'Grade 6 Fees' },
      { to: '/terms', label: 'Terms & Conditions' },
    ],
    howtojoinUs: [
      { to: '/join', label: 'Join Us' },
      { to: '/grade4', label: 'Join Grade 4' },
      { to: '/grade5', label: 'Join Grade 5' },
      { to: '/grade6', label: 'Join grade6' },
      { to: '/admpolicy', label: 'Admissions Policy' },
      { to: 'https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F', label: 'Enquire' },
    ],
    getAccess: [
      { to: '/access', label: 'Get Access' },
      { to: '/events', label: 'Calendar of Events' },
      { to: '/StuAccess', label: 'Student Access' },
      { to: '/staffAccess', label: 'Staff Access' },
    ],
    
  };
  const labelMap: Record<string, string> = {
    whoWeAre: 'Who We Are',
    nurture: 'Nurture',
    studyLife: 'Study Life',
    talent: 'Talent',
    fees: 'Our Friendly Fees',
    howtojoinUs: 'Join Us',
    getAccess: 'Get Access',
    
  };
  const renderDropdownLinks = (items: { to: string; label: string }[]) =>
    items.map(item =>
      item.to.startsWith('http') ? (
        <a
          key={item.to}
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(closeAll, 100)}
          className="block px-4 py-2 text-black bg-transparent hover:bg-black hover:text-white transition-colors"
        >
          {item.label}
        </a>
      ) : (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={() => setTimeout(closeAll, 100)}
          className="block px-4 py-2 text-black bg-[#e4af23] hover:bg-black hover:text-white transition-colors"
        >
          {item.label}
        </NavLink>
      )
    );

  return (
  
      <header className="bg-[#74d1f6] text-white top-0 z-50 shadow-lg" 
      style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="container mx-auto px-4 h-15 flex items-center justify-between">
      <NavLink
          to="/"
          className="text-2xl pr-4 text-white hover:text-[#E4AF23] lg:text-xl font-extrabold tracking-wide hover:opacity-90 transition-opacity"
        >
       ST PAUL THOMAS ACADEMY
        </NavLink>  
        <button
          className="lg:hidden bg-[#e4af23] hover:bg-white p-2 rounded"
          onClick={() => setIsMobileMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#083056]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#083056]" />
          )}
        </button>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center text-sm font-bold whitespace-nowrap">
          {/* Home */}
          <div className="flex items-center border-l border-white px-2 first:border-l-0">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : 'hover:underline')}>
              Home
            </NavLink>
          </div>

          {/* Dynamic Dropdowns */}
          {Object.entries(dropdownItems).map(([key, items]) => (
            <div
              key={key}
              ref={el => {
                dropdownRefs.current[key] = el;
              }}
              className="relative flex items-center border-l border-white px-2 first:border-l-0"
              onMouseEnter={() => {
                clearTimeout(closeTimeout.current)
                setOpenDropdown(key)}}
              onMouseLeave={() =>{ closeTimeout.current = window.setTimeout(() => {
                setOpenDropdown(null)
              }, 100)
              }}
              
            >
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center gap-1 hover:underline"
                aria-expanded={openDropdown === key}
              >
                {labelMap[key]}
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === key ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <DropdownMenu isOpen={openDropdown === key} onClose={closeAll} className="w-56">
                {renderDropdownLinks(items)}
              </DropdownMenu>
            </div>
          ))}
          {/* KCSE Past Performance */}
          <div className="flex items-center border-l border-white px-2 first:border-l-0">
            <NavLink to="/results" className={({ isActive }) => (isActive ? 'underline' : 'hover:underline')}>
              KCPE Results
            </NavLink>
          </div>

          {/* Location */}
          <div className="flex items-center border-l border-white px-2 first:border-l-0">
            <NavLink to="/location" className={({ isActive }) => (isActive ? 'underline' : 'hover:underline')}>
              Location
            </NavLink>
          </div>
        </nav>
      </div>

        {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#74d1f6] text-white p-6 space-y-4" style={{ fontFamily: 'Times New Roman, serif' }}>
          <nav className="space-y-3">
            <NavLink to="/" onClick={closeAll} className={({ isActive }) => (isActive ? 'underline block' : 'block hover:underline')}>
              Home
            </NavLink>

            {Object.entries(dropdownItems).map(([key, items]) => (
            
            <div
                     key={key}
                     ref={el => { dropdownRefs.current[key] = el }}
                    className="relative"
                  >
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex justify-between items-center font-semibold hover:text-accent"
                  aria-expanded={openDropdown === key}
                >
                  {labelMap[key]}
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === key ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <DropdownMenu isOpen={openDropdown === key} onClose={closeAll} className="pl-4">
                  {renderDropdownLinks(items)}
                </DropdownMenu>
              </div>
            ))}

            <NavLink to="/results" onClick={closeAll} className={({ isActive }) => (isActive ? 'underline block' : 'block hover:underline')}>
              KCPE Results
            </NavLink>
            <NavLink to="/location" onClick={closeAll} className={({ isActive }) => (isActive ? 'underline block' : 'block hover:underline')}>
              Location
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;