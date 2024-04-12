//import InsureData from "../data/InsureData"
import PropTypes from "prop-types"

function Moto({datas}) {
  return (
    <>
    <div className="flex flex-col justify-center items-center p-[64px]" >
    <h1 className="md:text-[64px]  font-bold text-[#2154A0] ">{datas.title}</h1>
    <p className="font-normal text-center text-[18px] text-[#828282]">{datas.subTitle1}<br/>{datas.subTitle2}</p>
    </div>
    
    </>
  )
}
Moto.propTypes={
  datas:PropTypes.string.isRequired
};

export default Moto
