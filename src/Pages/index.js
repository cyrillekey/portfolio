import React from 'react'
import About from '../Components/About';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Introduction from '../Components/Introduction';
import ProjectsPreview from '../Components/ProjectsPreview';

const Index = () => {
  return (
    <>
    <Header/>
    <Introduction
    title="Hi, Im Cyrille Otieno"
    link="#projects"
    desc="Lets Make Great Projects Togethor"
    cta="Projects"
    />
    <About/>
    
        <ProjectsPreview
        />
    
    <Footer/>
    </>
  )
}

export default Index;