import case1 from '../assets/images/case1.webp'
import case2 from '../assets/images/case2.webp'

const CaseStudies = () => {
  return (
    <section id="case-studies" className=" w-full bg-black padding ">

      <div className="flex justify-end gap-5 max-sm:hidden">
        <button className="white-btn border-white">All</button>
        <button className="black-btn">Marketing</button>
        <button className="black-btn">Branding</button>
        <button className="black-btn">SEO</button>
        <button className="black-btn">Web</button>
      </div>

      <div className='flex justify-start  max-md:flex-col-reverse'>

        <div className=''>
          <h1 className="big-heading text-white flex ">Our Case Studies</h1>
          <p className="text-white">Ad nec unum copiosae. Sea ex everti labores, ad option <br/> iuvaret qui. Id quo esse nusquam.</p>
          <button className="black-btn mt-10">VIEW ALL CASES</button>
        </div>

        <div className='flex justify-end mt-[7%] max-sm:flex-col'>

        <div className='max-sm:hidden'> 
          <img src={case1} alt='case1' className=' w-[90%]' />
        </div>

        <div> 
          <img src={case2} alt='case2' className=' w-[90%]'/>
        </div>
        </div>

      </div>

    </section>
  )
}

export default CaseStudies