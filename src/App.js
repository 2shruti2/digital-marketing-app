import Hero from './sections/Hero'
import Services from './sections/Services'
import CaseStudies from './sections/CaseStudies'
import AboutUs from './sections/AboutUs'
import Testimonial from './sections/Testimonial'
import Newsletter from './sections/Newsletter'
import Partner from './sections/Partner'
import Footer from './sections/Footer'

import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <main>

      <Nav/>

      <section> <Hero /> </section>
      <section> <Services /> </section>
      <section> <CaseStudies /> </section>
      <section> <AboutUs /> </section>
      <section> <Testimonial /> </section>
      <section> <Newsletter /> </section>
      <section> <Partner /> </section>
      <section> <Footer /> </section>
    </main>
  );
}

export default App;
