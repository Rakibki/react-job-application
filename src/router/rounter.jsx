import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from '../components/Root'
import Blog from '../pages/blog/Blog'
import AppliendJobs from "../pages/AppliedJobs.jsx/AppliendJobs";
import Error from "../pages/error/Error";
import JobDetais from "../components/JobDetais";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/blog',
        element: <Blog />,
      },
      {
        path: "/appliedJobs",
        element: <AppliendJobs />,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobDetais />,
        loader: () => fetch('../jobs.json')
      }
    ]
  }
])

export default router