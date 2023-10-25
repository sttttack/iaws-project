import "./App.css";

import ErrorPage from "./UI/ErrorPage";

import Home from "../src/UI/MainPage/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "../src/UI/Routes/Root";
import Registation from "./UI/Registation/Registation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Registation />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
