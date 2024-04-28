//import InsureData from "../data/InsureData"
import PropTypes from "prop-types"

function Moto({datas}) {
  return (
    <>
    <section>
    <div className="flex flex-col justify-center items-center p-[64px]" >
    <h1 className="xl:text-[64px] lg:text-[54px]  font-bold text-white ">{datas.title}</h1>
    <p className="font-normal text-center lg:text-[14px] xl:text-[18px] text-white">{datas.subTitle1}<br/>{datas.subTitle2}</p>
    </div>
    </section>
    </>
  )
}
Moto.propTypes={
  datas:PropTypes.string.isRequired
};

export default Moto
