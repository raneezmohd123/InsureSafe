import {Outlet} from "react-router-dom"
import Navbar from "./Home/Navbar"
//import Footer from "./Home/Footer"

function mainlayout() {
  return (
    <div  style={{
        backgroundColor:"#131127",
      }}>
    <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default mainlayout
