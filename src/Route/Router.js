
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from '../pages/Login'
import MyClass from "../pages/MyClass";
import SignUp from '../pages/SignUp'
import Profile from "../profile/Profile";
import AllCourse from "../shere/AllCourse";
import CourseDetails from "../shere/CourseDetails";
import ErrorPage from "../shere/ErrorPage";
import Faq from "../shere/Faq";
import ResetPassword from "../shere/ResetPassword";
import SelectCourse from "../shere/SelectCourse";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <HomeLayout></HomeLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home />

         },
         {
            path: '/home',
            element: <Home />

         },

         {
            path: '/profile',
            element: <Profile></Profile>
         },
         {
            path: '/selectCourse/:id',
            loader: ({ params }) => {
               return fetch(`https://learn-programin-server.vercel.app/course/${params.id}`)
            },

            element: <PrivateRoute><SelectCourse></SelectCourse></PrivateRoute>,

         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/signup',
            element: <SignUp></SignUp>
         },
         {
            path: '/blog',
            element: <Blogs></Blogs>

         },
         {
            path: 'resetpassword',
            element: <ResetPassword></ResetPassword>

         },
         {
            path: '/faq',
            element: <Faq></Faq>

         },
         {
            path: '/myclass',
            element: <MyClass />
         },
         {
            path: '/details/:id',
            loader: ({ params }) => {
               return fetch(`https://learn-programin-server.vercel.app/course/${params.id}`)
            },
            element: <CourseDetails></CourseDetails>
         },
      ]
   },

   {
      path: '/course',
      loader: () => {
         return fetch('https://learn-programin-server.vercel.app/courses')
      },
      element: <Main></Main>,
      children: [
         {
            path: '/course',
            loader: () => {
               return fetch('https://learn-programin-server.vercel.app/courses')
            },
            element: <Courses></Courses>
         },
         {
            path: '/course/:id',
            loader: ({ params }) => {
               return fetch(`https://learn-programin-server.vercel.app/category/${params.id}`)
            },
            element: <AllCourse></AllCourse>
         },


      ]

   }
])