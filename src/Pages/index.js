import React from 'react'
import About from '../Components/About';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Introduction from '../Components/Introduction';
import ProjectsPreview from '../Components/ProjectsPreview';
import resume from '../constants/resume.doc';
const Index = () => {
  return (
    <>
    <Header/>
    <Introduction
    title="Hi, Im Cyrille Otieno"
    link={resume}
    desc="Lets Make Great Ideas and  Projects come alive Togethor."
    cta="Resume"
    />
    <About/>
    
        <ProjectsPreview
        />
    
    <Footer/>
    </>
  )
}

export default Index;