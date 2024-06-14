import NavLink from "./Navbarlink";

export default function Navbar() {
  return (
    <header className="blue p-3 w-100" style={{ height: "5rem" }}>
      <nav className="text-white d-flex gap-5 justify-content-center">
        <NavLink to="/inicio">Home</NavLink>
        <NavLink to="/connections">Connections</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
        <NavLink to="/">Sair</NavLink>
      </nav>
      
    </header>
  );
}
