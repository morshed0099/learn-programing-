import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import AllCourse from "../shere/AllCourse";
import CourseDetails from "../shere/CourseDetails";
import ResetPassword from "../shere/ResetPassword";
import SelectCourse from "../shere/SelectCourse";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'/selectCourse/:id',
            loader:({params})=>{
               return fetch(`http://localhost:5000/course/${params.id}`)
            },
            element:<PrivateRoute><SelectCourse></SelectCourse></PrivateRoute>
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/signup',
            element:<SignUp></SignUp>
         },
         {
            path:'/blog',
            element:<Blogs></Blogs>

         },
         {
            path:'resetpassword',
            element:<ResetPassword></ResetPassword>

         },
         {
            path:'/details/:id',
            loader:({params})=>{
               return fetch(`http://localhost:5000/course/${params.id}`)
            },
            element:<CourseDetails></CourseDetails>
         },
               

         {
            path:'/course',
            element:<Main></Main>,
            children:[
                {
                    path:'/course',
                    loader:()=>{
                     return fetch('http://localhost:5000/courses')
                    },
                    element:<Courses></Courses>
                },
                {
                  path:'/course/:id',
                  loader:({params})=>{
                       return fetch(`http://localhost:5000/category/${params.id}`)
                  },
                  element:<AllCourse></AllCourse>
                 },
                 
                
            ]          
                
         }
])