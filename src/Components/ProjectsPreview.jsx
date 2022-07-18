import React from 'react'
import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';

const ProjectsPreview = () => {
  return (
    <section id="projects" class="projects sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main">Projects</span>
        <span class="heading-sec__sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          tempora explicabo quae quod deserunt eius sapiente
        </span>
      </h2>

      <div class="projects__content">
        {
          projects.slice(0,4).map((project,index)=>(
            <ProjectCard
            id={index}
            name={project.name}
            src={project.src}
            desc={project.desc}
            />
          ))
        }
      </div>
    </div>
  </section>
  )
}

export default ProjectsPreview;