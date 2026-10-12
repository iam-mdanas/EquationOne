import { Link, Outlet } from "react-router-dom";

const navigation = [
  { to: "/", label: "Home" },
  { to: "/physics", label: "Physics" },
  { to: "/mathematics", label: "Mathematics" },
  { to: "/simulations", label: "Simulations" },
  { to: "/equation-playground", label: "Equation Playground" },
];

export function AppLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/">
          EquationOne
        </Link>
        <nav aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
