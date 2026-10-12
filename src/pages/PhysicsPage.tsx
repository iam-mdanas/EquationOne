import { Link } from "react-router-dom";

export function PhysicsPage() {
  return (
    <section>
      <p className="eyebrow">Physics</p>
      <h1>Physics</h1>
      <p>Physics explorations will live here.</p>
      <Link className="primary-link" to="/mathematics">
        Explore mathematics
      </Link>
    </section>
  );
}
