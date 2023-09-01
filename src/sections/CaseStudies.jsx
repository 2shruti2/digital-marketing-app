import case1 from '../assets/images/case1.webp'
import case2 from '../assets/images/case2.webp'

import case1small from '../assets/images/case1small.webp'
import case2small from '../assets/images/case2small.webp'
import BlurryLazyLoad from '../components/BlurryLazyLoad'


const CaseStudies = () => {
  return (
    <section id="case-studies" className=" w-full bg-black padding ">

      <div className="flex justify-end gap-5 max-sm:hidden">
        <button className="white-btn border-white ">All</button>
        <button className="black-btn hover:text-black hover:transition-opacity delay-100 duration-300 hover:bg-white ease-in-out">Marketing</button>
        <button className="black-btn  hover:text-black hover:transition-opacity delay-100 duration-300 hover:bg-white ease-in-out">Branding</button>
        <button className="black-btn  hover:text-black hover:transition-opacity delay-100 duration-300 hover:bg-white ease-in-out">SEO</button>
        <button className="black-btn  hover:text-black hover:transition-opacity delay-100 duration-300 hover:bg-white ease-in-out">Web</button>
      </div>

      <div className='flex justify-start  max-md:flex-col-reverse'>

        <div className=''>
          <h1 className="big-heading text-white flex ">Our Case Studies</h1>
          <p className="text-white">Ad nec unum copiosae. Sea ex everti labores, ad option <br /> iuvaret qui. Id quo esse nusquam.</p>
          <button className="black-btn hover:text-black hover:transition-opacity delay-100 duration-300 hover:bg-white ease-in-out mt-10">VIEW ALL CASES</button>
        </div>

        <div className='flex  mt-[7%] max-sm:flex-col'>

        <div className='blur__load'  loading='lazy' style={{backgroundImage: `url(${case1small})` }} > 
          <img src={case1} alt='case1' className=' w-[90%] object-cover object-center' />
          <BlurryLazyLoad />
        </div>

        <div className='max-sm:hidden blur__load' loading='lazy' style={{backgroundImage: `url(${case2small})` }}> 
          <img src={case2} alt='case2' className=' w-[90%] object-cover object-center'/>
        </div>
        </div>

      </div>

    </section>
  )
}

export default CaseStudies