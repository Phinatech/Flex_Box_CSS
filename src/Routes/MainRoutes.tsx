import { createBrowserRouter } from "react-router-dom"
import { Homelayout } from "../Components"
import { Children } from "react"
import HomeScreen from "../Pages/HomeScreen"


export const element = createBrowserRouter([
    {
        path:'/',
        element:<Homelayout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            }
        ]
        
    }
])