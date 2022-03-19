import React from 'react'
import { Link } from 'react-router-dom'
import './Individual.css'

const Individual = () => {
  return (
      <div>
          

                                        <div className='moveallindividual'>
                                                    <div className='allindividual'>
                                                                <h2>Welcome!</h2>
                                                                    

                                                                    <div className='iblinkall'>
                                                                                        
                                                                    <Link to='Individual'><button className='linksib linksactiveib'>Individual</button> </Link>
                                                                    <Link to='Business'> <button className='linksib'>Business</button> </Link>


                                                                    </div>
                                                                    
                                                                    <div>
                                                                                    <input className='inputi' type="text" placeholder='Username' />
                                                                                    <input className='inputi' type="text" placeholder='Fullname' />
                                                                                    <input className='inputi' type="text" placeholder='Email' />
                                                                                    <input className='inputi' type="tel" placeholder='Phone Number' />
                                                                                    <input className='inputi' type="text" placeholder='Referral Code(optional)' /> 
                                                                    </div>
                                                                
                                                                    

                                                                    <p className='byclick'>By clicking the Sign Up button below, you agree to TradExpress <span className='tnc'>terms and service</span></p>
                            


                                                                        <div className='movesui'>
                                                                            <Link to='/Verify'><button id='sui'>Sign Up</button></Link>      
                                                                        </div>


                                                                        <p className='allhave'>Already have an account ? <span className='ch'>Click here</span> </p>
                                                        </div>
                                        </div>

                                          

                                                                                





















    </div>
  )
}

export default Individual