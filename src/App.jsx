import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { ExercisesPage } from "./ExercisesPage";
// import { ExercisesIndexPage } from "./ExercisesIndexPage";
import { ExercisesNewPage } from "./ExercisesNewPage";
import {RoutinesPage} from "./RoutinesPage";
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/exercises",
        element: <ExercisesPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/exercises/new",
        element: <ExercisesNewPage />,
      },
      {
        path: "routines",
        element: <RoutinesPage />,
        loader: () => axios.get("http://localhost:3000/routines.json").then((response) => response.data),
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;