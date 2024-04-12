//import { createBrowserRouter } from "react-router-dom"
import Navbar from "./containers/Navbar"
import Join from "./containers/Join"
import Moto from "./components/Moto"
import AboutUs from "./containers/AboutUs"
import ContactUs from "./containers/ContactUs"
import Footer from "./containers/Footer"


function App() {
  

  return (
    <>
     <Navbar/>
     <Moto datas={{title:'Insurance Claims Made Simple',
     subTitle1:'Submit and track your insurance claims with ease. Our platform simplifies the process,',
     subTitle2:'ensuring you get the support you need when it matters most.'}}/>
     <Join/>
     <Moto datas={{title:'Trust and Security',
     subTitle1:'We prioritize the security of your data and transactions. Smart contracts and',
     subTitle2:'blockchain technology ensure transparency and trust.'}}/>
    <AboutUs datas={{title:'About Us',subTitle1:'We are committed to revolutionizing the insurance industry through innovation',
    subTitle2:'and inclusivity. Our platform empowers customers and partners, making ',
    subTitle3:'insurance more accessible and efficient.'}}/>
     <ContactUs/>
     <Footer/>
    
    </>
  )
}

export default App
