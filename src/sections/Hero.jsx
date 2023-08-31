import hero1 from '../assets/images/hero1.webp'
import hero2 from '../assets/images/hero2.webp'

import hero1small from '../assets/images/hero1small.webp'
import hero2small from '../assets/images/hero2small.webp'
import BlurryLazyLoad from '../components/BlurryLazyLoad'

const Hero = () => {
  return (
    <section id="hero" className="padding">
      <div className='flex justify-between max-md:flex-col ' >
        <h1 className="big-heading relative ">Digital marketing <br/> made simple</h1>

        <div className='relative flex max-md:mt-4 blur__load' loading='lazy' style={{backgroundImage: `url(${hero1small})` }} >
          <img src={hero1} className='rounded-lg max-sm:hidden shadow-xl object-cover object-center'  alt='boy'  />
          <BlurryLazyLoad />
        </div>

      </div>

      <div className='flex justify-center font-roboto mt-5 ' >
        <p className='w-[700px] h-[43px] text-slate-gray '>Extract real business value from social media. Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
      </div>

      <div className='mt-10 max-sm:mt-[35px] flex justify-between max-md:flex-col '>

        <div className='flex justify-around blur__load' loading='lazy' style={{backgroundImage: `url(${hero2small})` }}>
          <img src={hero2} alt="boy-2" className='rounded-lg shadow-xl object-cover object-center'  />
          <BlurryLazyLoad />
        </div>

        <div className=' mt-[10%] text-center '>
          <h2 className='font-yeseva text-4xl'>+150%</h2>
          <p className='text-slate-gray font-roboto mt-2'>Conversion Rate Increased</p>
        </div>

        <div className=' mt-[10%] text-center'>
          <h2 className='font-yeseva text-4xl'>+20M</h2>
          <p className='text-slate-gray font-roboto mt-2'>Amount of Investments in 2022</p>
        </div>

        <div className=' mt-[10%] text-center'>
          <h2  className='font-yeseva text-4xl'>+87K</h2>
          <p className='text-slate-gray font-roboto mt-2'>Happy Ewebot Customers</p>

          <div className='flex justify-end lg:mt-[88px] max-md:mt-10 '>
            <button className='black-btn '>CONTACT NOW</button>
          </div>
        </div>

      </div>
      
      
      
      


    </section>
  )
}

export default Hero