import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Search from "../Pages/Search/Search";
import NewCar from "../Pages/NewCar/NewCar";
import Profile from "../Pages/Profile/Profile";
import MainLayout from "../Layout/Main/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import CarDetails from "../Pages/CarDetails/CarDetails";


//public route group
 const publicRoutes = [
   {index:true,element:<Home/>},
    {
        path: '/autos',
        element:<Search/>
     },
     {
         path: '/login',
         element:<Login/>
   },
   {
     path: '/carDetails/:id',
     element:<CarDetails/>
   }
]


//private route group
 const protectedRoutes = [
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/sell",
    element: <NewCar />,
  },
];

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      ...publicRoutes,
      {
        element: <ProtectedRoutes />,
        children: [...protectedRoutes],
      },
    ],
  },
];