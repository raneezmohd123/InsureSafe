import Hand from "../../assets/hand1.png"


function Join() {
  return (
    <>
      <section className="container flex mx-auto max-w-screen-xl " id="join">
        <div className="flex flex-col ">
                <span className="grid grid-cols-2 bg-[#2154A0] max-w-[1234px] h-[525px] mt-8 flex-shrink rounded-[2.2rem] ">
                    <div className=" justify-center ml-[65px] mt-[78px]">
                    <h1 className="md:text-[55px] leading-none  mt-8 font-bold text-[#FFFFFF] ">Join Our Network of Insurance Providers</h1>
                    <p className="md:mt-[18px] text-[#FFFFFF] font-normal text-[18px]">Become part of a modern, customer-centric ecosystem. Our <br /> decentralized platform streamlines operations and enhances <br />customer satisfaction.</p>
                    <button className="w-[164px] h-[41px] bg-white mt-[31px]">Login</button>
                    </div>
                    <img src={Hand} className="object-fill h-[525px]  " alt="" />
                </span>
        </div>
      </section>
    </>
  )
}

export default Join
