import { blackLogo, hamburger } from "../assets/icons"

const Nav = () => {
  return (
    <header className="w-full">
    <nav className="padding justify-between flex items-center">

      <a href="/" > <img src={blackLogo} alt="logo" className="flex justify-start align-middle" /> </a>
      <ul className="flex flex-1 justify-center items-center gap-6 px-4 py-4 max-lg:hidden"> 
      
        <a href="/" className="font-semibold "><li>Home</li></a>
        <a href="#about"><li>About</li></a>
        <a href="#services"><li>Services</li></a>
        <a href="#hero"><li>Our Team</li></a>
        <a href="#footer"><li>Contact</li></a>
      </ul>
      
      <button className="white-btn">Get Start</button>

      <div className=' hidden max-lg:block'>
        <img src={hamburger} alt='Hamburger' width={25} height={25}/>
      </div>
    </nav>
    </header>

  )
}

export default Nav