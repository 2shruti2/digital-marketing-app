import { spotify } from "../assets/icons"
import { dropBox } from "../assets/icons"
import { google } from "../assets/icons"
import { airbnb } from "../assets/icons"
import { envanto } from "../assets/icons"

const Partner = () => {
  return (
    <section id="partner" className="sm:px-16 px-8 sm:py-8 py-12 flex justify-center items-center text-center">
      <div className="bg-[#F2F2F2]  p-16 max-sm:p-0 flex flex-col ">
        <h3 className="font-yeseva text-2xl pb-4 max-sm:pt-10">OVER 1K+ BUSINESSES GROWING WITH MARKET</h3>

        <div className="flex flex-1 gap-4 max-sm:flex-col items-center max-sm:pb-10">
          <img src={spotify} alt="logo" className="w-[20%] max-sm:w-[40%]" />
          <img src={dropBox} alt="logo" className="w-[20%] max-sm:w-[40%]" />
          <img src={google} alt="logo" className="w-[20%] max-sm:w-[40%]"/>
          <img src={airbnb} alt="logo" className="w-[20%] max-sm:w-[40%]" />
          <img src={envanto} alt="logo" className="w-[20%] max-sm:w-[40%]" />
        </div>


      </div>
    </section>
  )
}

export default Partner