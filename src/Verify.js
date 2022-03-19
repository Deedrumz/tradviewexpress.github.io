import React from 'react'
import { Link } from 'react-router-dom'
import './Verify.css'
import Mailing from './img/mailing.svg'

const Verify = () => {
  return (
      <div>
          
          <div className='moveallverify'>
                    <div className='allverify'>
                                    <span className='yai'>You're Almost In!</span>
                                    <h2>Welcome Itunuoluwa</h2>

                                    <img src={Mailing} alt="" />
                                    
                                    <div className='allactlink'>
                                    <p className='actlink'>An activation link has been sent to <a href="">Ireti4tech@gmail.com</a> Please click on the link to verify your email and activate your TradExpress account.</p>
                                    </div>
                                   
                                    
                                    

                                    <div className='moveconv'>
                                        <button id='conv'>Continue</button>
                                    </div>


                                <p className='noemail'> Didn't get an email? Kindly click <span className='re'>resend email</span>  Wrong email supplied? <span className='editem'>Edit email address</span> </p>
                    </div>
          </div>
          





    </div>
  )
}

export default Verify