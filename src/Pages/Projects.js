import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { projects } from '../constants/projects'
const Projects = () => {
  return (
    <>
    <Header/>
    <section id="projects" class="projects sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main">Projects</span>
        <span class="heading-sec__sub">
          Below are a sample of both web and mobile application projects i have developed over the years as personal projects ranging from simple CRUD applications to application suites.
        </span>
      </h2>

      <div class="projects__content">
        {
          projects.map((project)=>(
            <ProjectCard
            id={project.id}
            name={project.name}
            src={project.src}
            desc={project.desc}
            />
          ))
        }
      </div>
    </div>
    <div>
    
    </div>
  </section>
    <Footer/>
    </>
  )
}

export default Projects