import { NavLink } from "react-router-dom";

export default function NavbarLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
                ${isActive ? "color: #ff0" : ""} 
            `}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
}
