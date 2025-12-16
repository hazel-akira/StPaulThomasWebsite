import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

/* ===================== TYPES ===================== */
type MenuItem = { to: string; label: string; external?: boolean };
type MenuGroup = { label: string; to: string; items: MenuItem[] };
type MenuKey = "whoWeAre" | "nurture" | "studyLife" | "talent" | "fees" | "joinUs" | "getAccess";

/* ===================== MENU DATA ===================== */
const MENU: Record<MenuKey, MenuGroup> = {
  whoWeAre: { label: "Who We Are", to: "/who", items: [{ to: "/history", label: "Our History" }, { to: "/leadership", label: "Our Leadership" }, { to: "/nurturing", label: "Our Nurturing Team" }] },
  nurture: { label: "Nurture", to: "/nurture", items: [{ to: "/farm-2-fork", label: "Farm 2 Fork" }, { to: "/homefromhome", label: "Home From Home" }, { to: "/discipline", label: "Discipline" }, { to: "/chaplaincy", label: "Chaplaincy" }, { to: "/nursing-care", label: "Nursing Care" }, { to: "/safety", label: "Safety & Security" }] },
  studyLife: { label: "Study Life", to: "/studylife", items: [{ to: "/tailor-made-leadership-pathways", label: "Leadership Pathways" }, { to: "/cadet", label: "Young Air Cadet" }, { to: "/coding", label: "Coding Life" }, { to: "/seafarers", label: "Young Seafarers" }] },
  talent: { label: "Talent", to: "/talent", items: [{ to: "/band", label: "Band Life" }, { to: "/chess", label: "Chess Masters" }, { to: "/scouts", label: "Scouts Life" }, { to: "/swimmers", label: "Swimmers Life" }, { to: "/basket", label: "Basketball Life" }, { to: "/football", label: "Footballer Life" }] },
  fees: { label: "Fees", to: "/fees", items: [{ to: "/grade4fee", label: "Grade 4 Fees" }, { to: "/grade5fee", label: "Grade 5 Fees" }, { to: "/grade6fee", label: "Grade 6 Fees" }, { to: "/terms", label: "Terms & Conditions" }] },
  joinUs: { label: "Join Us", to: "/join", items: [{ to: "/grade4", label: "Join Grade 4" }, { to: "/grade5", label: "Join Grade 5" }, { to: "/grade6", label: "Join Grade 6" }, { to: "/admissions", label: "Admissions Policy" }, { to: "https://enquireto.pioneergroupofschools.co.ke", label: "Enquire", external: true }] },
  getAccess: { label: "Get Access", to: "/access", items: [{ to: "/events", label: "Calendar of Events" }, { to: "/StuAccess", label: "Student Access" }, { to: "/staffAccess", label: "Staff Access" }] },
};

/* ===================== ORDER ===================== */
const ORDER: MenuKey[] = ["whoWeAre", "nurture", "studyLife", "talent", "fees", "joinUs"];

/* ===================== HELPERS ===================== */
const LinkItem = ({ item, onClick }: { item: MenuItem; onClick: () => void }) =>
  item.external ? (
    <a href={item.to} target="_blank" rel="noopener noreferrer" onClick={onClick} className="block px-3 py-2 rounded-md hover:bg-[#7fa0c0]">
      {item.label}
    </a>
  ) : (
    <NavLink to={item.to} onClick={onClick} className="block px-3 py-2 rounded-md hover:bg-[#7fa0c0]">
      {item.label}
    </NavLink>
  );

const Divider = () => <span className="hidden lg:block mx-2 h-5 w-px bg-black" />;

const Dropdown = ({ open, children }: { open: boolean; children: ReactNode }) => (
  <div
    className={`absolute left-0 top-full mt-2 w-64 rounded-xl text-sm font-bold text-black bg-white shadow-lg transition ${
      open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
    }`}
  >
    <div className="p-1 space-y-1">{children}</div>
  </div>
);

/* ===================== NAVBAR ===================== */
const Navbar: React.FC = () => {
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileKey, setMobileKey] = useState<MenuKey | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenKey(null);
        setMobileOpen(false);
        setMobileKey(null);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const closeAll = () => {
    setOpenKey(null);
    setMobileOpen(false);
    setMobileKey(null);
  };

  const toggleMobile = (key: MenuKey) => setMobileKey(mobileKey === key ? null : key);

  return (
    <header className="sticky top-0 z-50 bg-[#85a7c9] text-black">
      <div ref={navRef} className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="text-2xl font-bold">
          St Paul Thomas Academy
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center text-lg font-bold">
          <NavLink to="/" className="px-3 py-2">
            Home
          </NavLink>
          <Divider />

          {ORDER.map((k, i) => (
            <React.Fragment key={k}>
              <div className="relative" onMouseEnter={() => setOpenKey(k)} onMouseLeave={() => setOpenKey(null)}>
                <NavLink to={MENU[k].to} className="px-3 py-2 inline-flex items-center gap-1">
                  {MENU[k].label} <ChevronDownIcon className="w-4 h-4" />
                </NavLink>
                <Dropdown open={openKey === k}>
                  {MENU[k].items.map((it) => (
                    <LinkItem key={it.label} item={it} onClick={closeAll} />
                  ))}
                </Dropdown>
              </div>
              <Divider />

              {i === 1 && (
                <>
                  <NavLink to="/kpsea" className="px-3 py-2">
                    KPSEA
                  </NavLink>
                  <Divider />
                </>
              )}
            </React.Fragment>
          ))}

          <NavLink to="/location" className="px-3 py-2">
            Location
          </NavLink>
          <Divider />

          <div className="relative" onMouseEnter={() => setOpenKey("getAccess")} onMouseLeave={() => setOpenKey(null)}>
            <NavLink to={MENU.getAccess.to} className="px-3 py-2 inline-flex items-center gap-1">
              {MENU.getAccess.label} <ChevronDownIcon className="w-4 h-4" />
            </NavLink>
            <Dropdown open={openKey === "getAccess"}>
              {MENU.getAccess.items.map((it) => (
                <LinkItem key={it.label} item={it} onClick={closeAll} />
              ))}
            </Dropdown>
          </div>
        </nav>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden bg-[#85a7c9] px-4 pb-4 space-y-3 transition-all ${mobileOpen ? "block" : "hidden"}`}>
        <NavLink to="/" onClick={closeAll}>
          Home
        </NavLink>

        {ORDER.map((k) => {
          const open = mobileKey === k;
          return (
            <div key={k}>
              <div className="flex justify-between items-center">
                <NavLink to={MENU[k].to} onClick={() => toggleMobile(k)}>
                  {MENU[k].label}
                </NavLink>
                <button onClick={() => toggleMobile(k)}>
                  <ChevronDownIcon className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
                </button>
              </div>
              {open && (
                <div className="pl-4 mt-2 space-y-1">
                  {MENU[k].items.map((it) => (
                    <LinkItem key={it.label} item={it} onClick={closeAll} />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <NavLink to="/kpsea" onClick={closeAll}>
          KPSEA
        </NavLink>

        <NavLink to="/location" onClick={closeAll}>
          Location
        </NavLink>

        <div>
          <div className="flex justify-between items-center">
            <NavLink to={MENU.getAccess.to} onClick={() => toggleMobile("getAccess")}>
              {MENU.getAccess.label}
            </NavLink>
            <button onClick={() => toggleMobile("getAccess")}>
              <ChevronDownIcon className={`h-4 w-4 transition ${mobileKey === "getAccess" ? "rotate-180" : ""}`} />
            </button>
          </div>
          {mobileKey === "getAccess" && (
            <div className="pl-4 mt-2 space-y-1">
              {MENU.getAccess.items.map((it) => (
                <LinkItem key={it.label} item={it} onClick={closeAll} />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
