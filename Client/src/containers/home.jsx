import Footer from "./Home/Footer"
import Join from "./Home/Join"
import Moto from "../components/Moto"
import AboutUs from "./Home/AboutUs"
import ContactUs from "./Home/ContactUs"
import Hero from "./Home/hero"
function home() {
  return (
    <>
     
      <Hero/>
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

export default home
