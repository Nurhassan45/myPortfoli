import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import ProjectDetails from "../Projects/ProjectsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,

  },
  {
    path:'/projects/:id',
    Component:ProjectDetails
  }
]);