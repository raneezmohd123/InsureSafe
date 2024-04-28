
import './dashboard.css';

export default function Main() {
  return (
    <div className='main-container w-[1440px] h-[1024px] bg-[#31353f] rounded-[10px] relative overflow-hidden mx-auto my-0'>
      <div className='w-[256px] h-[1234px] absolute top-0 left-0 z-[2]'>
        <div className='w-[256px] h-[1024px] bg-[#131127] relative mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[170px] h-[41px] relative overflow-hidden z-[23] mt-[32px] mr-0 mb-0 ml-[40px]'>
            <span className="flex h-[60.98%] justify-start items-center font-['Inter'] text-[21px] font-bold leading-[25px] text-[#fff] absolute top-[19.51%] left-[28.82%] text-left whitespace-nowrap z-[24]">
              InsureSafe
            </span>
            <div className='w-[21.18%] h-[48.78%] bg-[url(../assets/images/e001ee4c-349b-4acd-811c-69dc2907fa0e.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[24.39%] left-[1.76%] overflow-hidden z-[25]' />
          </div>
          <div className='flex w-[166px] pt-0 pr-0 pb-[8px] pl-0 gap-[20px] items-center flex-nowrap relative z-[26] mt-[879px] mr-0 mb-0 ml-[40px]'>
            <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/0f8d7e51-ce97-412c-9fb9-d5367ec8c435.png)] bg-[length:100%_100%] bg-no-repeat relative z-[27]' />
            <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#9e9e9e] relative text-left whitespace-nowrap z-[28]">
              Logout
            </span>
          </div>
          <button className='w-[197px] h-[50px] bg-[#6739e4] rounded-[10px] border-none absolute top-[123px] left-[28px] shadow-[4px_4px_32px_0_rgba(102,89,255,0.07)] z-[1] pointer' />
          <div className='flex w-[166px] h-[352px] flex-col gap-[32px] items-start flex-nowrap absolute top-[136px] left-[40px] z-[4]'>
            <div className='flex w-[166px] pt-0 pr-[11px] pb-[8px] pl-0 gap-[20px] items-center shrink-0 flex-nowrap relative z-[5]'>
              <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/1267c7bb-cd30-42a3-a347-002f300522c8.png)] bg-[length:100%_100%] bg-no-repeat relative z-[6]' />
              <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[21px] text-[#fff] relative text-left whitespace-nowrap z-[7]">
                Overview
              </span>
            </div>
            <div className='flex w-[166px] pt-0 pr-0 pb-[8px] pl-0 gap-[20px] items-center shrink-0 flex-nowrap relative z-[8]'>
              <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/7f590aab-da43-4cf8-9e35-ec5995c03e20.png)] bg-[length:100%_100%] bg-no-repeat relative z-[9]' />
              <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#9e9e9e] relative text-left whitespace-nowrap z-10">
                Claim
              </span>
            </div>
            <div className='flex w-[166px] pt-0 pr-0 pb-[8px] pl-0 gap-[20px] items-center shrink-0 flex-nowrap relative z-[11]'>
              <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/872e9091-1a54-4aa7-961e-cda4b6f717ed.png)] bg-[length:100%_100%] bg-no-repeat relative z-[12]' />
              <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#9e9e9e] relative text-left whitespace-nowrap z-[13]">
                Updates
              </span>
            </div>
            <div className='flex w-[166px] pt-0 pr-0 pb-[8px] pl-0 gap-[20px] items-center shrink-0 flex-nowrap relative z-[14]'>
              <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/dee42d11-6a3a-4def-ba71-dd050c0d63b7.png)] bg-[length:100%_100%] bg-no-repeat relative z-[15]' />
              <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#9e9e9e] relative text-left whitespace-nowrap z-[16]">
                Wallet
              </span>
            </div>
            <div className='flex w-[166px] pt-0 pr-0 pb-[8px] pl-0 gap-[20px] items-center shrink-0 flex-nowrap relative z-[17]'>
              <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/53164d63-3f61-464d-a81f-91600cf41b38.png)] bg-[length:100%_100%] bg-no-repeat relative z-[18]' />
              <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#9e9e9e] relative text-left whitespace-nowrap z-[19]">
                Notifications
              </span>
            </div>
            <div className='flex w-[166px] pt-0 pr-0 pb-[8px] pl-0 gap-[20px] items-center shrink-0 flex-nowrap relative z-20'>
              <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/948a28b9-a402-476d-aa91-46c5753d5278.png)] bg-[length:100%_100%] bg-no-repeat relative z-[21]' />
              <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#9e9e9e] relative text-left whitespace-nowrap z-[22]">
                Mail Box
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[1185px] h-[100px] absolute top-0 left-[255px] z-[47]'>
        <div className='flex w-[205px] h-[44px] gap-[15px] items-center flex-nowrap absolute top-[28px] left-[945px] z-[53]'>
          <div className='w-[44px] h-[44px] shrink-0 bg-[#9e9e9e] rounded-[10px] relative z-[54]' />
          <span className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#fff] relative text-left whitespace-nowrap z-[55]">
            Wallet Address
          </span>
          <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/9a6294d9-cd6d-4511-9a5d-aa24e853f812.png)] bg-[length:100%_100%] bg-no-repeat relative z-[56]' />
        </div>
        <div className='w-[44px] h-[44px] bg-[#1b2028] rounded-[8px] absolute top-[28px] left-[871px] z-50'>
          <div className='flex w-[24px] gap-[24px] items-start flex-nowrap relative z-[51] mt-[10px] mr-0 mb-0 ml-[10px]'>
            <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/03aebc6a-8d06-439d-99cc-c022cb4b3bba.png)] bg-cover bg-no-repeat relative z-[52]' />
          </div>
        </div>
        <span className="flex h-[48px] justify-start items-center font-['Poppins'] text-[32px] font-semibold leading-[48px] text-[#fff] absolute top-[46px] left-[31px] text-left whitespace-nowrap z-[48]">
          Dashboard
        </span>
      </div>
      <span className="flex h-[90px] justify-start items-center font-['Poppins'] text-[60px] font-black opacity-20 leading-[90px] text-[#fff] absolute top-[15px] left-[286px] text-left whitespace-nowrap z-[46]">
        CUSTOMER
      </span>
      <div className='w-[258px] h-[178px] bg-[#1b2028] rounded-[15px] absolute top-[140px] left-[286px] shadow-[4px_4px_33px_0_rgba(0,0,0,0.05)] z-[58]'>
        <div className='w-[221px] h-[48px] relative z-[64] mt-[23px] mr-0 mb-0 ml-[19px]'>
          <div className='w-[44px] h-[44px] bg-[url(../assets/images/b9154ead-70fa-4a12-ace6-fac75ca0803d.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[64]' />
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] absolute top-0 left-[63px] text-left whitespace-nowrap z-[62]">
            Bitcoin
          </span>
          <div className='w-[8.14%] h-[37.5%] bg-[url(../assets/images/91e1b38e-8357-4396-98dd-006935bbdddb.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[20.83%] left-[91.86%] z-[59]' />
          <span className="flex h-[18px] justify-start items-center font-['Poppins'] text-[12px] font-normal opacity-60 leading-[18px] text-[#fff] absolute top-[30px] left-[63px] text-left whitespace-nowrap z-[63]">
            BTC
          </span>
        </div>
        <span className="block h-[32px] font-['Poppins'] text-[21px] font-semibold leading-[31.5px] text-[#fff] tracking-[0.42px] relative text-left whitespace-nowrap z-[61] mt-[16px] mr-0 mb-0 ml-[20px]">
          $52,291
        </span>
        <div className='w-[10px] h-[10px] bg-[url(../assets/images/85ed859d-2806-40df-a935-571ed8cf8b83.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[66] mt-[-7px] mr-0 mb-0 ml-[230px]' />
        <span className="block h-[23px] font-['Poppins'] text-[14px] font-semibold leading-[22.452px] text-[#1eca4e] tracking-[0.28px] relative text-left whitespace-nowrap z-[60] mt-[9px] mr-0 mb-0 ml-[19px]">
          +0.25%
        </span>
      </div>
      <div className='w-[258px] h-[178px] bg-[#1b2028] rounded-[15px] absolute top-[140px] left-[862px] shadow-[4px_4px_33px_0_rgba(0,0,0,0.05)] z-[68]'>
        <div className='w-[221px] h-[48px] relative z-[74] mt-[23px] mr-0 mb-0 ml-[19px]'>
          <div className='w-[44px] h-[44px] bg-[#31353f] rounded-[10px] absolute top-0 left-0 z-[74]'>
            <div className='w-[24px] h-[24px] bg-[url(../assets/images/9fd3abef-78af-467e-8c6e-659053717155.png)] bg-[length:100%_100%] bg-no-repeat relative z-[75] mt-[10px] mr-0 mb-0 ml-[10px]' />
          </div>
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] absolute top-0 left-[63px] text-left whitespace-nowrap z-[72]">
            Ethereum
          </span>
          <div className='w-[8.14%] h-[37.5%] bg-[url(../assets/images/26120641-fae7-49b2-8e80-dd205253f003.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[20.83%] left-[91.86%] z-[69]' />
          <span className="flex h-[18px] justify-start items-center font-['Poppins'] text-[12px] font-normal opacity-60 leading-[18px] text-[#fff] absolute top-[30px] left-[63px] text-left whitespace-nowrap z-[73]">
            ETH
          </span>
        </div>
        <span className="block h-[32px] font-['Poppins'] text-[21px] font-semibold leading-[31.5px] text-[#fff] tracking-[0.42px] relative text-left whitespace-nowrap z-[71] mt-[16px] mr-0 mb-0 ml-[20px]">
          $28,291
        </span>
        <div className='w-[10px] h-[10px] bg-[url(../assets/images/c8af632a-148a-4835-817e-640d82409e13.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[77] mt-[-7px] mr-0 mb-0 ml-[230px]' />
        <span className="block h-[23px] font-['Poppins'] text-[14px] font-semibold leading-[22.452px] text-[#1eca4e] tracking-[0.28px] relative text-left whitespace-nowrap z-[70] mt-[9px] mr-0 mb-0 ml-[19px]">
          +0.25%
        </span>
      </div>
      <div className='w-[258px] h-[178px] bg-[#1b2028] rounded-[15px] absolute top-[140px] left-[574px] shadow-[4px_4px_33px_0_rgba(0,0,0,0.05)] z-[79]'>
        <div className='w-[221px] h-[48px] relative z-[85] mt-[23px] mr-0 mb-0 ml-[19px]'>
          <div className='w-[44px] h-[44px] bg-[url(../assets/images/7b1e4be6-440d-4af6-9aab-98401b59a624.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[85]' />
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] absolute top-0 left-[63px] text-left whitespace-nowrap z-[83]">
            Litecoin
          </span>
          <div className='w-[8.14%] h-[37.5%] bg-[url(../assets/images/9875f38e-6229-47f3-bb18-6c407e974c89.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[20.83%] left-[91.86%] z-[80]' />
          <span className="flex h-[18px] justify-start items-center font-['Poppins'] text-[12px] font-normal opacity-60 leading-[18px] text-[#fff] absolute top-[30px] left-[63px] text-left whitespace-nowrap z-[84]">
            ITC
          </span>
        </div>
        <span className="block h-[32px] font-['Poppins'] text-[21px] font-semibold leading-[31.5px] text-[#fff] tracking-[0.42px] relative text-left whitespace-nowrap z-[82] mt-[16px] mr-0 mb-0 ml-[20px]">
          $8,291
        </span>
        <div className='w-[10px] h-[10px] bg-[url(../assets/images/5509de91-d168-40d4-b0a6-ee26500876a8.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[87] mt-[-7px] mr-0 mb-0 ml-[230px]' />
        <span className="block h-[23px] font-['Poppins'] text-[14px] font-semibold leading-[22.452px] text-[#1eca4e] tracking-[0.28px] relative text-left whitespace-nowrap z-[81] mt-[9px] mr-0 mb-0 ml-[19px]">
          +0.25%
        </span>
      </div>
      <div className='w-[258px] h-[178px] bg-[#1b2028] rounded-[15px] absolute top-[140px] left-[1150px] shadow-[4px_4px_33px_0_rgba(0,0,0,0.05)] z-[89]'>
        <div className='w-[221px] h-[48px] relative z-[95] mt-[23px] mr-0 mb-0 ml-[19px]'>
          <div className='w-[44px] h-[44px] bg-[url(../assets/images/b829be60-7ae0-4d3a-844a-f71893e4523f.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[95]' />
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] absolute top-0 left-[63px] text-left whitespace-nowrap z-[93]">
            Solana
          </span>
          <div className='w-[8.14%] h-[37.5%] bg-[url(../assets/images/716fb9c7-22e0-4441-b95b-a97a41412ea6.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[20.83%] left-[91.86%] z-[90]' />
          <span className="flex h-[18px] justify-start items-center font-['Poppins'] text-[12px] font-normal opacity-60 leading-[18px] text-[#fff] absolute top-[30px] left-[63px] text-left whitespace-nowrap z-[94]">
            SOL
          </span>
        </div>
        <span className="block h-[32px] font-['Poppins'] text-[21px] font-semibold leading-[31.5px] text-[#fff] tracking-[0.42px] relative text-left whitespace-nowrap z-[92] mt-[16px] mr-0 mb-0 ml-[20px]">
          $14,291
        </span>
        <div className='w-[10px] h-[10px] bg-[url(../assets/images/aef203dc-001f-4265-baa9-1e6d57927026.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[97] mt-[-7px] mr-0 mb-0 ml-[230px]' />
        <span className="block h-[23px] font-['Poppins'] text-[14px] font-semibold leading-[22.452px] text-[#f46d21] tracking-[0.28px] relative text-left whitespace-nowrap z-[91] mt-[9px] mr-0 mb-0 ml-[19px]">
          -0.25%
        </span>
      </div>
      <div className='w-[355px] h-[180px] text-[0px] bg-[#6739e4] rounded-[15px] absolute top-[350px] left-[285px] z-30'>
        <span className="block h-[27px] font-['Poppins'] text-[18px] font-semibold leading-[27px] text-[#fff] tracking-[2.7px] relative text-left whitespace-nowrap z-[32] mt-[80px] mr-0 mb-0 ml-[21px]">
          3475 7381 3759 4512
        </span>
        <div className='w-[355px] h-[180px] bg-[url(../assets/images/bbf0e212-df6a-48ba-98e0-317557df161b.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[31]' />
        <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-medium opacity-60 leading-[24px] text-[#fff] tracking-[0.48px] absolute top-[20px] left-[20px] text-left whitespace-nowrap z-[42]">
          Credit Card
        </span>
        <div className='w-[10.42%] h-[13.33%] bg-[url(../assets/images/7ab47482-78ee-4704-846d-44753d78c31d.png)] bg-[length:100%_100%] bg-no-repeat rounded-[5px] absolute top-[11.11%] left-[83.94%] z-[34]'>
          <div className='w-[40.91%] h-full rounded-[50px] border-solid border-[0.5px] border-[#a07300] absolute top-[0%] left-[29.55%] rotate-90 z-[35]' />
          <div className='w-[29.54%] h-[2.08%] bg-[url(../assets/images/a02af36e-0cc5-4757-ac0c-c38120c5a0a6.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[29.17%] left-[70.46%] z-[37]' />
          <div className='w-[29.54%] h-[2.08%] bg-[url(../assets/images/883161ec-544f-4496-a136-414ef058124a.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[29.17%] left-0 z-40' />
          <div className='w-[29.54%] h-[2.08%] bg-[url(../assets/images/807765e2-46e7-47fb-8bcd-e480dca112ca.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[68.75%] left-[70.46%] z-[38]' />
          <div className='w-[29.54%] h-[2.08%] bg-[url(../assets/images/23d654fb-0801-4fb7-b13d-e5862c6ee8ac.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[68.75%] left-0 z-[41]' />
        </div>
        <span className="flex w-[65px] h-[30px] justify-end items-start font-['Poppins'] text-[19.92144775390625px] font-bold leading-[29.882px] text-[#fff] tracking-[0.6px] absolute top-[130px] left-[270px] text-right whitespace-nowrap z-[44]">
          VIZA
        </span>
        <span className="flex h-[18px] justify-start items-start font-['Poppins'] text-[12px] font-medium opacity-60 leading-[18px] text-[#fff] tracking-[1.2px] absolute top-[136px] left-[20px] text-left uppercase whitespace-nowrap z-[43]">
          Darrell Steward
        </span>
      </div>
    </div>
  );
}
