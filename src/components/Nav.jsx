import { blackLogo, hamburger } from "../assets/icons"
import { useState, useEffect, useRef } from "react";


const Nav = () => {

  const [ isFixed, setIsFixed] = useState(false); // for fixed top

  const navbarRef = useRef();

  
  useEffect(() => {
    const handleNav = (nav) => {
      nav.classList.remove('padding');
    };

    const handleScroll = () => {
      if (window.scrollY >= navbarRef.current.clientHeight) {
        setIsFixed(true);
        const navElements = document.querySelectorAll('.nav');
        navElements.forEach((navElement) => {
          handleNav(navElement);
        });
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header  className={`navbar ${isFixed ? 'fixed  border-b-1 shadow-lg' : ''} app__navbar w-full p-0 bg-white z-20`}  ref={navbarRef}>
      <nav className="padding nav justify-between flex items-center">

        <a href="/" > <img src={blackLogo} alt="logo" className="flex justify-start align-middle" /> </a>
        <ul className="flex flex-1 justify-center items-center gap-6 px-4 py-4 max-lg:hidden">

          <a href="/" className="font-semibold "><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#services"><li>Services</li></a>
          <a href="#hero"><li>Our Team</li></a>
          <a href="#footer"><li>Contact</li></a>
        </ul>

        <button className="white-btn max-lg:hidden">Get Start</button>


        <div className=' hidden max-lg:block'>
        <img src={hamburger} alt='Hamburger' width={25} height={25} />
        
      </div>


      </nav>
    </header>

  )
}

export default Nav;