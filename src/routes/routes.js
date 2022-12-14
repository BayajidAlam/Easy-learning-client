import { createBrowserRouter } from "react-router-dom";
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
import PrivateRutes from "./PrivateRutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch(`https://easy-learning-server.vercel.app/category`),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://easy-learning-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/courses",
        element: <CoursesRightSide></CoursesRightSide>,
      },
      {
        path: "/cheeckout/:id",
        element: 
          <PrivateRutes>
            <CheeckOut></CheeckOut>,
          </PrivateRutes>,
          loader: ({params}) => fetch(`https://easy-learning-server-bayajidalam.vercel.app/cheeckout/${params.id}`)
      }
    ],
  },
]);
