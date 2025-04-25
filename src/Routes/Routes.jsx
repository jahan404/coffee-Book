import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Favs from "../Pages/Favs";
import AllCoffeeCards from "../Components/AllCoffeeCards";
import CardDetails from "../Components/CardDetails";
 
const router = createBrowserRouter([
{
    path: '/',
    element: <MainLayout></MainLayout>,

    children: [
        {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('../categories.json'),
        children: [
            {
                path: '/',
                element: <AllCoffeeCards></AllCoffeeCards>,
                loader: ()=>fetch('../coffees.json'),
            },
            {
                path: '/coffeeCards/:category',
                element: <AllCoffeeCards></AllCoffeeCards>,
                loader: ()=>fetch('../coffees.json'),
            },
        ]
        },
    
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/menu',
            element: <Menu></Menu>,
            loader: ()=>fetch('../coffees.json'),
        },
        {
            path: '/favs',
            element: <Favs></Favs>
        },
        {
            path: '/coffee/:id',
            element: <CardDetails></CardDetails>,
            loader: ()=>fetch('../coffees.json'),
        }
     
    ]
},
])

export default router;