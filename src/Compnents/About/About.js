import React from 'react';
import { FaCheck } from 'react-icons/fa';
import aboutImg from '../../Images/about-img.jpg';
import './about.css';


export const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="" className="about__img" />
        </div>

        <div className="about__content">
          <h2 className="section__title" data-title='About Us'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam.
          </h2>

          <p className="about__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet facere eaque blanditiis harum numquam nam voluptas expedita eveniet quaerat aperiam!</p>

          <div className="about__details grid">
            
            <p className="about__details-description">
              <FaCheck/>
              Lorem ipsum dolor sit amet.
            </p>

            <p className="about__details-description">
              <FaCheck/>
              Lorem ipsum dolor sit amet.
            </p>

            <p className="about__details-description">
              <FaCheck/>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}

export default About