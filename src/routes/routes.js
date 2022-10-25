import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../pages/Courses/Courses";

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
      }
    ]
  }
])