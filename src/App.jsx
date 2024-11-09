import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ExercisesPage } from "./ExercisesPage";
import { ExercisesIndexPage } from "./ExercisesIndexPage";
import { ExercisesNewPage } from "./ExercisesNewPage";
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
        path: "/",
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
        path: "/exercises",         element: <ExercisesIndexPage />,
        loader: () => axios.get("http://localhost:3000/exercises.json").then((response) => response.data),
      },
      {
                 path: "/exercises/new",
                 element: <ExercisesNewPage />,
               },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;