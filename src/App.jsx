import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./component/About";
import Blog from "./component/Blog";
import Links from "./component/Links";
import Projects from "./component/Projects";
import Home from "./component/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/registration" element={<Registration />}></Route>
       <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Blog />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="links" element={<Links />}></Route>
          <Route path="projects" element={<Projects />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
