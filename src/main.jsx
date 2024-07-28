import React from "react";
import {
  Route,
  RouterProvider,
  BrowserRouter as Router,
  createRoutesFromElements,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import About from "./componenets/About/About.jsx";
import Home from "./componenets/Home/Home.jsx";
import App from "./App.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     Children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/contact",
//         element: <About />,
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
);
