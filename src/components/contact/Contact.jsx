
//import React from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'


function Contact() {
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (123)-456-7890
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              contact@email.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              1234 N. StreetName Pl.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-description"><b>What's your Story?</b> Get in touch. Always available for freelancing when the right project comes along.</p>

          <form>
            <input type="text" placeholder='Name' name='user_name'/>
            <input type="text" placeholder='Subject' name='user_subject'/>
            <input type="text" placeholder='Email' name='user_email'/>
            <textarea rows="5" placeholder='Message' name='message'></textarea>
            <button>Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact