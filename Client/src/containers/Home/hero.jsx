import hero_pic from "../../assets/block.png"

function hero() {
  return (
    <>
      <section className="flex flex-row  " id="hero" >
      <div className="max-w-screen-xl xl:ml-[5rem] mt-[10rem]">
      <h1 className="ml-[103px] mt-[200px] md:text-[18px] text-[#6739E4] font-normal">SMART CONTRACT</h1>
      <p className="lg:text-[45px] xl:text-[65px] text-[30px] ml-[102px]  font-bold text-white xl:leading-[4.5rem]">Decentralized <br/>
      Platform for your Insurance</p> 
      <h1 className="text-white  lg:text-[12px] xl:text-[18px] ml-[102px]">Secure. Transparent. Automated. Experience hassle-free <br />insurance claims with our decentralized platform.</h1>
      <div className="flex mt-4">
      <button className="bg-[#6739E4] shadow-none text-white lg:h-[50px] lg:w-[150px] xl:h-[70px] xl:w-[215px]  rounded-md ml-[103px] text-[18px]">Get Started</button>
      </div>
      </div>
      
      <div className="hidden md:flex  xl:mr-[115px] mt-[10rem]">
      <img src={hero_pic} alt="text" />
      
      </div>
      
      </section>
    </>
  )
}

export default hero
