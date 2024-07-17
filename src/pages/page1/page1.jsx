import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './page1.css'
import logo1 from './logo1.png'

export default function Page1() {
  return (
    <div className='main-container'>
      <div>
        <Navbar />
      </div>

      <div className='container1'>
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        <div className="first-content">
          <div className="bold-text">
            <span>Share a secret</span>
          </div>
          <div className="normal-text">
            ..with a link that only works one time and then <br></br>
            self-destructs.
          </div>
          <div className="box-area">
            <div className="options">
              <span className="one">TEXT</span>
              <span>FILE</span>
              <span>REDIRECT</span>
              <span>NEOGRAM</span>
            </div>
            <div className="text-area">
              <textarea placeholder="What's your secret" maxLength={140}></textarea>
            </div>
            <div className="more-option">
              <div className="more">
                MORE OPTION
              </div>
              <button className="secret-link">
                CREATE SECRET LINK
              </button>
            </div>

          </div>
          
          <div className="after-box-option">
            <span>end-to-end encrypted</span>
            <span>swiss privacy</span>
            <span>without a trace</span>

          </div>
        </div>
        <div className="page2">
          <div className="bold1">
            <h2>One-Time Secrets</h2>
          </div>
          <div className="text1">
          Share sensitive information that can only be viewed one time.<br></br>
          The perfect way to transmit passwords, credit card <br />
          information, private keys, or other confidential data.
          </div>

          <div className="images">
            <div className="write">
              img1
            </div>
            <div className="share">
              img2
            </div>
            <div className="burn">
              img3
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
