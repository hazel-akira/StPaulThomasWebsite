
import { FaAngleRight } from 'react-icons/fa';

const links = [
  'Home',
  'Transform',
  'KCSE Past Performance',
  'Leaders',
  'Student Life',
  'Boarding Life',
  'Join Us',
  'Fees',
  'Location',
  'Get Access',
];

const FooterQuickLinks: React.FC = () => (
  <div>
    <h4 className="text-[#f4a024] uppercase font-bold mb-4 tracking-wide">
      Quick Links
    </h4>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link} className="flex items-center">
          <FaAngleRight className="text-[#f4a024] mr-2 flex-shrink-0" />
          <a href="#" className="hover:text-[#f4a024] transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterQuickLinks;
