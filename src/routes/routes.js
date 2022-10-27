import {createBrowserRouter} from "react-router-dom";
import CoursesRightSide from "../Component/CoursesRightSide/CoursesRightSide";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CheeckOut from "../pages/CheeckOut/CheeckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/category`)
      },
      {
        path: '/courses/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/courses',
        element: <CoursesRightSide></CoursesRightSide>
      },
      {
        path: '/cheeckout',
        element: <CheeckOut></CheeckOut>,
      }
    ]
  }
])