import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section>
      <p className="eyebrow">Interactive mathematical and physics laboratory</p>
      <h1>Explore ideas with EquationOne</h1>
      <p>
        A starting point for exploring physics, mathematics, and interactive
        simulations.
      </p>
      <Link className="primary-link" to="/physics">
        Explore physics
      </Link>
    </section>
  );
}
