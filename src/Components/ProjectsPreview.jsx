import React from 'react'
import { Link } from 'react-router-dom';
import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';

const ProjectsPreview = () => {
  return (
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
          projects.slice(0,4).map((project)=>(
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
    <div class="home-hero__cta">
          <Link to="/projects" class="btn btn--bg">View All</Link>
        </div>
    </div>
  </section>
  )
}

export default ProjectsPreview;