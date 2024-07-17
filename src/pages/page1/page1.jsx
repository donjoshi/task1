import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './page1.css'
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import logo1 from './logo1.png'
import write from './write.png'
import share from './share.png'
import burn from './burn.png'
import page3img from './page3-img.png'
import page4img from './page4-img.png'
import Expand from '../../components/expand-component/expand';
import { useState } from 'react';
import Footer from '../../components/footer/footer';


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
              <img src={write} alt="" />
            </div>
            <div className="share">
              <img src={share} alt="" />
            </div>
            <div className="burn">
              <img src={burn} alt="" />
            </div>
          </div>
        </div>

        <div className="page3">
          <div className="bold1">
            <h2>End-to-End Encryption</h2>
          </div>

          <div className="text1">
            We encrypt your secret on your device. The encryption key is<br></br>
            never stored but becomes part of the link itself. Without the <br />
            full link, nobody, including us, will ever be able to decrypt<br />
            your secret.
          </div>

          <div className="learn-more">
            <FaArrowRight />
            <span>LEARN MORE ABOUT SECURITY</span>
          </div>
          <div className="page3-img">
            <img src={page3img} alt="" />
          </div>

        </div>

        <div className="page4">
          <div className="bold1">
            <h2>The Slack App<sup>NEW</sup></h2>
          </div>

          <div className="text1">
            Some things better not stay in your chat history. Next time a<br></br>
            coworker asks you for an access token, API key or password, <br />
            you can respond in good conscience.
          </div>

          <div className="page4-img">
            <img src={page4img} alt="" />
          </div>
          <div className="after-img">
            <div><FaCheck />
              <span>Encrypted, disposable messages, stored outside of Slack.</span>
            </div>
            <div>
              <FaCheck />
              <span>Create one-time secrets via shortcut or slash command.</span>
            </div>
            <div>
              <FaCheck />
              <span>Burn notification after a secret has been viewed.</span>
            </div>
            
            <div className="page4-last">
              <button className='learn'>LEARN MORE</button>
              <button className='add'>ADD TO SLACK</button>
            </div>

          </div>

        </div>

        <div className="page5">
          <div className="bold1">
            <h2>FAQ</h2>
          </div>

          <div className="text1">
            Frequently asked questions.
          </div>

          <div className='accordian'>
              <Expand />
          </div>
          <div className="read-more">
            <FaArrowRight />
            <span>READ MORE ON FAQ PAGE</span>
          </div>

        </div>
      </div>
      <Footer />

    </div>
  )
}
