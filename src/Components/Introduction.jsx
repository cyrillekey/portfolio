import React from 'react'
import github from '../assets/png/github-ico.png';
import twitter from '../assets/png/twitter-ico.png';
import linkedin from '../assets/png/linkedin-ico.png'
import { Link } from 'react-router-dom';
const Introduction = ({
  title,
  desc,
  cta,
  link
}) => {
  return (
    <>
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">{title}</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            {desc}
          </p>
        </div>
        <div class="home-hero__cta">
          <Link to={link} class="btn btn--bg">{cta}</Link>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <Link to="#" class="home-hero__social-icon-link">
            <img
              src={github}
              alt="icon"
              class="home-hero__social-icon"
            />
          </Link>
        </div>
        <div class="home-hero__social">
          <Link to="#" class="home-hero__social-icon-link">
            <img
              src={twitter}
              alt="icon"
              class="home-hero__social-icon"
            />
          </Link>
        </div>
        <div class="home-hero__social">
          <Link to="#" class="home-hero__social-icon-link">
            <img
              src={linkedin}
              alt="icon"
              class="home-hero__social-icon"
            />
          </Link>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
    </>
  );
};

export default Introduction;
