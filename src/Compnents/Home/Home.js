import React from 'react';
import './home.css';


export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle">Welcome to Cafe</span>
          <h1 className='home__title'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et amet ipsa quae eum id perspiciatis?
          </p>

          <div className="home__btns">
            <a href="#menu" className="btn">Your Choice</a>

            <a href="#reservation" className="btn home__btn">
              Book Table
            </a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home;
