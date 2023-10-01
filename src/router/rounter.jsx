import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from '../components/Root'
import Blog from '../pages/blog/Blog'
import AppliendJobs from "../pages/AppliedJobs.jsx/AppliendJobs";
import Error from "../pages/error/Error";
import JobDetais from "../components/JobDetais";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../components/PrivateRoute";

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
        element: <PrivateRoute> <Blog /> </PrivateRoute>,
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
      },
      {
        path: "/login",
        element: <Login /> ,
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/profile",
        element: <PrivateRoute> <Profile /> </PrivateRoute>
      }
    ]
  }
])

export default router