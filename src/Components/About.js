import React from 'react'
import { languages } from '../constants/languages';
const About = () => {
  return (
    <>
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
           Im A FullStack Developer Based In Nairobi, Kenya with experience in both cross platform application development as well as web application development
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Hey! It's
                <strong> Cyrille Otieno</strong>
                . I'm a <strong> FullStack Developer </strong> located in
                Nairobi Kenya. I've done
                <strong> remote </strong>
                projects for agencies, consulted for startups, and collaborated
                with talented people to create
                <strong>digital products </strong>
                for both business and consumer use.
              </p>
              <p class="about__content-details-para">
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals. Feel free to
                <strong>contact</strong> me here.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            >
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
                {
                    languages.map((language)=>(
                        <div class="skills__skill" key={language.id}>{language.name}</div>
                    ))
                }
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About