import React from 'react'
import Menu from '../components/header/Menu'
import Header from '../components/about/Header'
import AboutC from "../components/about/About";
import Services from '../components/about/Services';
import Skills from '../components/about/Skills';
import Testimonials from "../components/home/Testimonials";
import Team from '../components/about/Team';
import Blog from '../components/home/Blog';
function About() {
  return (
    <div>
      <Menu />
      <Header />
      <AboutC />
      <Services />
      <Skills />
      <Testimonials theme="dark"/>
      <Team />
      <Blog />
    </div>
  )
}

export default About
