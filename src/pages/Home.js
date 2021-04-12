import About from '../components/home/About'
import Blog from '../components/home/Blog'
import Header from '../components/home/Header'
import Numbers from '../components/home/Numbers'
import Portfolio from '../components/home/Portfolio'
import Services from '../components/home/Services'
import Team from '../components/home/Team'
import Testimonials from '../components/home/Testimonials'

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Numbers />
      <Team />
      <Testimonials />
      <Blog />
    </>
  )
}

export default Home
