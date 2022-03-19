import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Assets from './img/Assets.svg'

const Login = () => {
  return (
      <div>
          
          <div className='movealllogin'>
                                 <div className='alllogin'>
                                            <h2>Welcome Back!</h2>

                                            <div className='alllinputl'>
                                                    <input className='inputl' type="text" placeholder='Username' />
                                                    <input className='inputl' type="password" placeholder='Password' />
                                            </div>



                                            <div className='assrpfp'>
                                                        <div className='assrp'>
                                                                <img className='ass' src={Assets} alt="" />
                                                                <p className='rp'>Remember password</p>
                                                        </div>

                                                        <p className='fp'>Forgot Password?</p>
                                            </div>

                                            <div className='movelogl'>
                                                <button id='logl'>Login</button>
                                            </div>

                                            <p className='newuserl'>New User? <span className='ch'>Click here</span> </p>
                                    </div>
          </div>
                                    
          





















    </div>
  )
}

export default Login