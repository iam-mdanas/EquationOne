import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { EquationPlaygroundPage } from "../pages/EquationPlaygroundPage";
import { HomePage } from "../pages/HomePage";
import { MathematicsPage } from "../pages/MathematicsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PhysicsPage } from "../pages/PhysicsPage";
import { SimulationsPage } from "../pages/SimulationsPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/physics", element: <PhysicsPage /> },
      { path: "/mathematics", element: <MathematicsPage /> },
      { path: "/simulations", element: <SimulationsPage /> },
      {
        path: "/equation-playground",
        element: <EquationPlaygroundPage />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
