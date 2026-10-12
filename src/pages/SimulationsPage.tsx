import { Link } from "react-router-dom";

export function SimulationsPage() {
  return (
    <section>
      <p className="eyebrow">Simulations</p>
      <h1>Simulations</h1>
      <p>Interactive simulations will be added here.</p>
      <Link className="primary-link" to="/equation-playground">
        Open Equation Playground
      </Link>
    </section>
  );
}
