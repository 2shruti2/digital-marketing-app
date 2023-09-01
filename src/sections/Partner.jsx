import { spotify } from "../assets/icons"
import { dropBox } from "../assets/icons"
import { google } from "../assets/icons"
import { airbnb } from "../assets/icons"
import { envanto } from "../assets/icons"

const Partner = () => {

  const images =[
    spotify,
    dropBox,
    google,
    airbnb,
    envanto
  ];

  return (
    <section id="partner" className="sm:px-16 px-8 sm:py-8 py-12 flex justify-center items-center text-center">
      <div className="bg-[#F2F2F2]  p-16 max-sm:p-0 flex flex-col ">
        <h3 className="font-yeseva text-2xl pb-4 max-sm:pt-10">OVER 1K+ BUSINESSES GROWING WITH MARKET</h3>

        <div className="flex flex-1 gap-16 max-sm:gap-4 max-sm:flex-col justify-between items-center align-middle mt-2 max-sm:pb-10">
          <img src={spotify} alt="logo" className="w-[14%] max-sm:w-[40%]" />
          <img src={dropBox} alt="logo" className="w-[15%] max-sm:w-[40%]" />
          <img src={google} alt="logo" className="w-[11%] max-sm:w-[40%]"/>
          <img src={airbnb} alt="logo" className="w-[13%] max-sm:w-[40%]" />
          <img src={envanto} alt="logo" className="w-[12%] max-sm:w-[40%]" />
        </div>

       {/* <div className="container mx-auto mt-4 ">
      <ImageCarousel images={images} interval={3000} />
        </div> */}


      </div>
    </section>
  )
}

export default Partner