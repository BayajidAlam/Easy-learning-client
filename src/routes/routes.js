import {createBrowserRouter} from "react-router-dom";
import CoursesLeftSide from "../Component/CoursesLeftSide/CoursesLeftSide";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faq from "../pages/Faq/Faq";
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
        element: <Courses></Courses>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/courses`)
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
        path: '/allcourse',
        element: <CoursesLeftSide></CoursesLeftSide>,
        loader: ()=> fetch('http://localhost:5000/course')
      },
    ]
  }
])