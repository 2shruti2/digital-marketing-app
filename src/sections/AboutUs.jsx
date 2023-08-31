import about1 from '../assets/images/about1.webp'
import about2 from '../assets/images/about2.webp'

import about1small from '../assets/images/about1small.webp'
import about2small from '../assets/images/about2small.webp'
import BlurryLazyLoad from '../components/BlurryLazyLoad'

const AboutUs = () => {
  return (
    <section id='about' className="padding flex justify-between items-center">
      <div className='flex justify-between  items-center  max-md:flex-col-reverse'>

        <div className='flex relative flex-1 justify-center items-center max-sm:items-start max-sm:flex-col '>
          <div className=' w-[80%] blur__load'  loading='lazy' style={{backgroundImage: `url(${about1small})` }}>
            <img src={about1} alt='case1' className='w-full object-cover object-center' />
            <BlurryLazyLoad />
          </div>

          <div className='w-[20%] '>
            <div className='absolute top-[30px] right-[1%] w-[40%] z-10 blur__load' loading='lazy' style={{backgroundImage: `url(${about2small})` }}>
              <img src={about2} alt='case2' className='w-full object-cover object-center rounded-lg shadow-xl' />
              <BlurryLazyLoad />
            </div>
          </div>

        </div>

        <div className='ml-10 max-sm:ml-0 max-sm:mb-5 flex-1'>
          <h1 className="big-heading flex">Digital Experience</h1>
          <p >Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui. Id quo esse nusquam. Eam iriure diceret oporteat. Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui. Id quo esse nusquam. Eam iriure diceret oporteat.</p>
          <button className="white-btn mt-10">Discover More</button>
        </div>

      </div>
    </section>
  )
}

export default AboutUs