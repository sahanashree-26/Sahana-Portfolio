import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserAstronaut,
  FaCode,
  FaLaptopCode,
  FaFileAlt,
  FaShareAlt,
  FaRoute,
  FaPaperPlane,
} from "react-icons/fa";

function Navbar() {
  const links = [
    { path: "/", name: "Welcome Deck", icon: <FaHome /> },
    { path: "/meet-sahana", name: "Meet Sahana", icon: <FaUserAstronaut /> },
    { path: "/skill-universe", name: "Skill Universe", icon: <FaCode /> },
    { path: "/build-gallery", name: "Build Gallery", icon: <FaLaptopCode /> },
    { path: "/resume-vault", name: "Resume Vault", icon: <FaFileAlt /> },
    { path: "/social-bridge", name: "Social Bridge", icon: <FaShareAlt /> },
    { path: "/journey-timeline", name: "Journey Timeline", icon: <FaRoute /> },
    { path: "/lets-connect", name: "Let's Connect", icon: <FaPaperPlane /> },
  ];

  return (
    <nav className="sidebar">
      <h2>Sahana<span>.dev</span></h2>

      {links.map((link) => (
        <NavLink key={link.path} to={link.path} className="nav-link">
          <span>{link.icon}</span>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;