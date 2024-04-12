import PropTypes from "prop-types"

function AboutUs({datas}) {
  return (
    <div id="about_us">
      <div className="flex flex-col justify-center items-center p-[100px]" >
    <h1 className="md:text-[64px]  font-bold text-[#2154A0] ">{datas.title}</h1>
    <p className="font-normal text-center text-[18px] text-[#828282]">{datas.subTitle1}<br/>{datas.subTitle2}<br/>{datas.subTitle3}</p>
    </div>
    </div>
  )
}
AboutUs.propTypes={
  datas:PropTypes.string.isRequired
};
export default AboutUs
