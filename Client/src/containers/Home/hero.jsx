import hero_pic from "../../assets/Image.png"

function hero() {
  return (
    <>
      <section className="flex flex-row  mx-auto " id="hero" >
      <div className="max-w-screen-xl md:mt-[8rem] ">
      <h1 className="ml-[103px] mt-[200px] md:text-[18px] font-normal">SMART CONTRACT</h1>
      <h1 className="md:text-[64px] text-[30px] ml-[102px] text-hero_blue font-bold text-[#2154A0]">Decentralized 
      <br />Platform for your <br />Insurance</h1>
      <h1 className="text-[#828282]  md:text-[18px] ml-[102px]">Secure. Transparent. Automated. Experience hassle-free <br />insurance claims with our decentralized platform.</h1>
      <div className="flex mt-4">
      <button className="bg-[#2154A0] shadow-none text-white h-[70px] w-[215px] border-r rounded-md ml-[103px] text-[18px]">Get Started</button>
      </div>
      </div>
      
      <div className="hidden md:flex  mt-[15rem] md:ml-[20rem]  ">
      <img src={hero_pic} alt="text" />
      
      </div>
      
      </section>
    </>
  )
}

export default hero
