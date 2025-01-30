import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout/layout";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";

function App() {
  const myRoute = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <Notfound /> }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={myRoute}></RouterProvider>
    </>
  );
}

export default App;
