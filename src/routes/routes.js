import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Courses></Courses>
      },
      {
        path: '/courses',
        element: <Courses></Courses>
      },
      {
        path: '/courses/:id'
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])