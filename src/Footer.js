import React from 'react'
import logo from './img/logo.svg'
import './Footer.css'
import copyright from './img/Group 78.svg'
import Twitter from './img/twitter.svg'
import Telegram from './img/telegram.svg'
import Whatsapp from './img/whatsapp.svg'
import Facebook from './img/facebook.svg'

const Footer = () => {
  return (
      <div>
          
          {/* FOOTER FOR MOBILE */}

                  <div className='movefootermobile'>
                  <section className='footermobile'>
                                <img src={logo} alt="" />

                                    <div className='footlink'>
                                            <a id='plccl' href="#">Products</a>
                                            <a id='plccl' href="#">Learn</a>
                                            <a id='plccl' href="#">Contact</a>
                                            <a id='plccl' href="#">Company</a>
                                            <a id='plccl' href="#">Legal</a>
                                    </div>
                      </section>
                  </div>
          
          
      
         
          
      {/* footer for desktop */}
          
          <section className='allfooterdesk'>
            
                        <div className='footerdesk'>
                        <div className='productsf'>
                                              <h6>Products</h6>
                                              <p>Bitcoin</p>
                                              <p>Alt</p>
                                              <p>Fiat</p>
                                              <p>Refill</p>
                                              <p>P2P</p>
                                      </div>
                        
                        
                                      <div className='learnf'>
                                              <h6>Learn</h6>
                                              <p>Blog</p>
                                              <p>Help Center</p>
                                      </div>
                        

                                      <div className='contactf'>
                                              <h6>Contact</h6>
                                              <p>hello@tradeexpress.com</p>
                                              <p>support@tradeexpress.com</p>
                                              <img className='ttwf' src={Twitter} alt="" />
                                              <img className='ttwf' src={Telegram} alt="" />
                                              <img className='ttwf' src={Whatsapp} alt="" />
                                              <img className='ttwf' src={Facebook} alt="" />
                                      </div>


                                      <div className='companyf'>
                                              <h6>Company</h6>
                                              <p>About Us</p>
                                              <p>Careers</p>
                                              <p>Rates</p>
                                              <p>Mobile</p>
                                      </div>

                                      <div className='legalf'>
                                              <h6>Legal</h6>
                                              <p>Privacy Policy</p>
                                              <p>Anti-Money Laundering</p>
                                              <p>Terms and Conditions</p>
                                      </div>
                        </div>

                      

        
        


          </section>

        









      <div className='allcopyright'>
          <img id='copyright' src= {copyright} alt="" />
      </div>


         



    </div>
  )
}

export default Footer