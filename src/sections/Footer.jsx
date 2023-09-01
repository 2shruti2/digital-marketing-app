import {whiteLogo, instagram, twitter, facebook, youtube, map, envolope} from '../assets/icons'

const footer = () => {
  return (
    <footer id="footer" className="sm:px-16 px-8 sm:pb-5 sm:pt-16 py-12 bg-black text-white  font-roboto">
      <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-1">
        <div>
          <h2><img src={whiteLogo} alt='logo'/></h2>
          <div>
            <p className='text-start py-10 text-grey'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
          <div className='flex flex-1 gap-4 '>
             <img src={facebook} alt="logo" />
             <img src={twitter} alt="logo" />
             <img src={instagram} alt="logo" />
             <img src={youtube} alt="logo" />
          </div>
        </div>

        <div>
          <h2 className='text-xl pb-5'>Our Services</h2>
          <ul >
            <li className='text-grey py-2'>SEO Marketing</li>
            <li className='text-grey py-2'>SEO Services</li>
            <li className='text-grey py-2'>Pay Per Click</li>
            <li className='text-grey py-2'>Social Media</li>
            <li className='text-grey py-2'>SEO Audit</li>
          </ul>
        </div>

        <div>
        <h2 className='text-xl pb-5'>Quick Links</h2>
          <ul>
          <a href='/'><li className='text-grey py-2 hover:text-slate-gray'>Home</li></a>
          <a href='#about'><li className='text-grey py-2 hover:text-slate-gray'>About us</li></a>
          <a href='#services'><li className='text-grey py-2 hover:text-slate-gray'>Main Services</li></a>
          <a href='#newsletter'><li className='text-grey py-2 hover:text-slate-gray'>Pricing</li></a>
          <a href='#case-studies'><li className='text-grey py-2  hover:text-slate-gray'>Our Cases</li></a>
          </ul>
        </div>

        <div>
        <h2 className='text-xl pb-5'>Contact Us</h2>
          <ul>
          <li className='flex py-2'><img src={map} alt='' className='pr-1' />27 Division St, New York, NY</li>
          <li className='flex  py-2'><img src={envolope} alt='' className='pr-1' />info@market.com</li>
          <li className='flex py-2'><img src={envolope} alt='' className='pr-1' />+1 (190) 122-8293</li>
          </ul>
        </div>
      </div>
     
      <hr className='mt-10 mb-5 opacity-20' />

      <div className='text-center '>
        <p> <span className='text-grey'>Copyright © 2023</span>  Market. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default footer