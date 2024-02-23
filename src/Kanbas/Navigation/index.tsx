import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaNetworkWired, FaRegQuestionCircle } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import neuLogo from "../../images/Northeastern-University-Logo.png"

function KanbasNavigation() {
  const links = [
    { label: "Logo",      icon: <img src={neuLogo} alt="Logo" className="wd-kanbas-neu-logo" /> },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 wd-kanbas-icon-size" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" /> },
    { label: " Inbox",    icon: <FaInbox className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" /> },
    { label: "History",   icon: <FaRegClock className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" /> },
    { label: "Studio",    icon: <FaNetworkWired className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" /> },
    { label: "Commons",   icon: <FaRightFromBracket className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" /> },
    { label: "  Help",    icon: <FaRegQuestionCircle className="fs-2 wd-kanbas-red-icon wd-kanbas-icon-size" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> 
            {link.icon} 
            {link.label !== "Logo" && <span className="label">{link.label}</span>}
            </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;