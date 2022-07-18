import React from 'react'
import {Link} from 'react-router-dom';
const ProjectCard = ({
  src,
  name,
  id,
  desc

}) => {
  return (
    <div class="projects__row" key={id}>
          <div class="projects__row-img-cont">
            <iframe
              src={src}
              title={name}              class="projects__row-img"
            />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">{name}</h3>
            <p class="projects__row-content-desc">
              {desc}
            </p>
            <Link
              to={`/project/${id}`}
              class="btn btn--med btn--theme dynamicBgClr"
              target="_blank"
              >View</Link
            >
          </div>
        </div>
  )
}

export default ProjectCard