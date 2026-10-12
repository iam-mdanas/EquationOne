import { Link } from "react-router-dom";

export function MathematicsPage() {
  return (
    <section>
      <p className="eyebrow">Mathematics</p>
      <h1>Mathematics</h1>
      <p>Mathematical tools and explorations will live here.</p>
      <Link className="primary-link" to="/simulations">
        Browse simulations
      </Link>
    </section>
  );
}
