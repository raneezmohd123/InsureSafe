import Hand from "../../assets/hand.png"


function Join() {
  return (
    <>
      <section className="container flex mx-auto max-w-screen-xl " id="join">
        <div className="flex flex-col ">
                <span className="grid grid-cols-2 bg-[#6739E4] max-w-[1234px] h-[525px] mt-8 flex-shrink rounded-[2.2rem] ">
                    <div className=" justify-center ml-[65px] mt-[78px]">
                    <h1 className="xl:text-[55px] lg:text-[54px] leading-none  mt-8 font-bold text-[#FFFFFF] ">Join Our Network of Insurance Providers</h1>
                    <p className="xl:mt-[18px] lg:text-[14px] text-[#FFFFFF] font-normal text-[18px]">Become part of a modern, customer-centric ecosystem. Our <br /> decentralized platform streamlines operations and enhances <br />customer satisfaction.</p>
                    <button className="w-[164px] h-[41px] bg-white mt-[31px] rounded-md">Login</button>
                    </div>
                    <img src={Hand} className="object-fill h-[525px]  " alt="" />
                </span>
        </div>
      </section>
    </>
  )
}

export default Join
