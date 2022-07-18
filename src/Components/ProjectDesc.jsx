import React from 'react'
import { Link } from 'react-router-dom'
const ProjectDesc = ({
    project
}) => {
  return (
    <section class="project-details">
      <div class="main-container">
        <div class="project-details__content">
          <div class="project-details__showcase-img-cont">
            <iframe
              src={project?.src}
              alt="Project Image"
              class="project-details__showcase-img"
              title={project?.name}
            />
          </div>
          <div class="project-details__content-main">
            <div class="project-details__desc">
              <h3 class="project-details__content-title">{project?.title}</h3>
              <p class="project-details__desc-para">
               {project?.info}
              </p>
              <p class="project-details__desc-para">
                
              </p>
            </div>
            <div class="project-details__tools-used">
              <h3 class="project-details__content-title">Tools Used</h3>
              <div class="skills">
                {
                    project?.tools.map((tool)=>(<div class="skills__skill" key={tool.id}>{tool.name}</div>))
                }
              </div>
            </div>
            <div class="project-details__links">
              <h3 class="project-details__content-title">See Live</h3>
              <a
                href={project?.src ?? "#"}
                class="btn btn--med btn--theme project-details__links-btn"
                target="_blank"
                rel='noreferrer'
                >Live Link</a
              >
              <a
                href={project?.git ?? "#"}
                class="btn btn--med btn--theme-inv project-details__links-btn"
                target="_blank"
                rel='noreferrer'
                >Code Link</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDesc