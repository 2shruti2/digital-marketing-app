import searchIcon from '../assets/icons/searchVector.svg'
import thumbsUp from '../assets/icons/thumbsUp.svg'
import brain from '../assets/icons/brain.svg'

const Services = () => {
  return (
    <section id="services" className="flex gap-7 padding justify-between max-lg:flex-col ">
      <div className="rectangle-7 lg:mt-10 p-[2%]">
        <div>
          <img src={searchIcon} alt='icon ' className='p-2 w-[60px] h-[60px]'/>
        </div>
        <div>
          <h1 className='font-yeseva text-[32px]'>Search Engine Optimization</h1>
        </div>
        <div className='text-slate-gray '>
            <p>Maecenas elementum sapien in metus placerat finibus. Maecenas elementum sapien in metus placerat finibus.</p>
        </div>
      </div>

      <div className="rectangle-7 p-[2%] lg:h-[280px]">
      <div>
          <img src={thumbsUp} alt='icon ' className='p-2 w-[60px] h-[60px]'/>
        </div>
        <div>
          <h1 className='font-yeseva text-[32px]'>Social Media <br/>Strategy</h1>
        </div>
        <div className='text-slate-gray '>
            <p>Maecenas elementum sapien in metus placerat finibus. Maecenas elementum sapien in metus placerat finibus.</p>
        </div>
      </div>

      <div className="rectangle-7 lg:mt-10 p-[2%] flex flex-col justify-between">
      <div>
          <img src={brain} alt='icon ' className='p-2 w-[60px] h-[60px]'/>
        </div>
        <div>
          <h1 className='font-yeseva text-[32px]'>Reporting & <br/> Analysis</h1>
        </div>
        <div className='text-slate-gray '>
            <p>Maecenas elementum sapien in metus placerat finibus. Maecenas elementum sapien in metus placerat finibus.</p>
        </div>
      </div>
    </section>
  )
}

export default Services