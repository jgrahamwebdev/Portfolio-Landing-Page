
//import React from 'react'
import './intro.css';
import Person from '../../img/person.svg';

function intro() {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className='intro-greeting'>Hi There, My name is</h2>
          <h1 className='intro-name'>Jordan</h1>
          <div className="intro-titles">
            <div className="intro-titles-wrapper">
              <div className="intro-titles-item">Web Developer</div>
              <div className="intro-titles-item">UI/UX Designer</div>
              <div className="intro-titles-item">Artist</div>
              <div className="intro-titles-item">Writer</div>
              <div className="intro-titles-item">Gamer</div>
            </div>
          </div>
          <p className="intro-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maiores! Veniam blanditiis fuga voluptate repellat doloremque iure delectus labore.
          </p>
        </div>
        
      </div>

      <div className="intro-right">
        <div className="intro-img-bg"></div>
        <img src={Person} alt="" className='intro-img'/>
      </div>
    </div>
  )
}

export default intro