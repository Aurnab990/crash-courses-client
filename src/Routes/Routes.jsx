import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/UserRegistration/Login";
import Signup from "../Pages/UserRegistration/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Private from "./Private/Private";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Addcourse from "../Pages/Dashboard/Addcourse";
import Managecourses from "../Pages/Dashboard/Managecourses";
import Updatecourses from "../Pages/Dashboard/Updatecourses";
import Details from "../Pages/DetailsPage/Details";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                index: true,
                element:<Home></Home>,
                
                
            },
            {
                path: "/details/:id",
                element: <Details />,
                loader: ({ params }) =>fetch(`https://crash-courses-server.onrender.com/courses/${params.id}`),
              },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    },
    {
        path:"/dashboard",
        element:(
            <Private>
                <Dashboard />
            </Private>
        ),
        children:[
            {
                path: "home",
                element:(
                    <Private>
                        <DashboardHome></DashboardHome>
                    </Private>
                )
            },

            {
                path:"add-course",
                element:(
                    <Private>
                        <Addcourse />
                    </Private>
                )
            },
            {
                path:"manage-course",
                element:(
                    <Private>
                        <Managecourses></Managecourses>
                    </Private>
                )
            },
            {
                path:"manage-course/update/:id",
                element:(
                    <Private>
                        <Updatecourses></Updatecourses>
                    </Private>
                ),
                loader: ({params})=>fetch(`https://crash-courses-server.onrender.com/courses/${params.id}`)
            }
        ]
    },
    {

    }
    
])