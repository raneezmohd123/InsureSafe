import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./containers/home"
import Mainlayout from "./containers/mainlayout";
import Customer from "./containers/Home/customer"
import Dashboard from "./components/metamask/dashboard";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Mainlayout/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"dashboard",element:<Dashboard/>},
      {path:"customer",element:<Customer/>}
    ]

  }
])


function App() {
  

  return (
  <RouterProvider router={router}/>
  )
}

export default App
