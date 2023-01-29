
//import React from 'react'
import './about.css';
import Webdev from '../../img/webdev.svg';
import Award from '../../img/award.png'

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Webdev} alt="" className='about-img'/>
        </div>
      </div>
      <div className="about-right">
        <h1 className='about-title'>About Me</h1>
        <p className="about-sub">Lorem ipsum dolor, sit amet consectetur adipisicing elit sit rem eveniet vero consequuntur sint vitae ullam inventore.</p>
        <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et dignissimos architecto dolores, sint repellat voluptatem cum alias magni ex voluptatibus atque minima nihil iure omnis accusantium neque est ut temporibus eum, perspiciatis magnam placeat fugiat. Vero quam facere nesciunt.</p>
        <div className="about-award">
          <img src={Award} alt="" className='about-award-img'/>
          <div className='about-award-text'>
            <h4 className='about-award-title'>Web Development & Design</h4>
            <p className="about-award-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nobis!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About