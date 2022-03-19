import React from 'react'
import { Link } from 'react-router-dom'
import './Buy.css'




const Buy = () => {
  return (
      <div>

          <div className='moveallbuy'>
                                <div className='allbuy'>

                                        <h2>Buy/Sell Instantly</h2>
                  

                                        <div className='buyselllink'>
                                                             
                                        <Link to='Buy'><button className='links linksactive'> Buy</button> </Link>
                                        <Link to='Sell'> <button className='links'>Sell</button> </Link>


                                        </div>
                                        

                                        <div className='ctb'>
                                                            <label className='coinbuy' htmlFor="">Coin to Buy</label>

                                                                <div className='ctbo'>
                                                                        <select className='drop' name="" id="ctbo">
                                                                            <option value="">Bitcoin(BTC)</option>
                                                                            <option value="">Ethereum(ETH)</option>
                                                                            <option value="">Fanthom(FTM)</option>
                                                                            <option value="">Solana(SOL)</option>
                                                                        </select>
                                                                </div>


                                        </div>
                                        

                                        <div className='currency'>
                                                            <label className='currb' htmlFor="">Currency</label>

                                                                <div>
                                                                        <select name="" id="ncyr">
                                                                            <option value="">Naira(NGN)</option>
                                                                            <option value="">Cedis(CD)</option>
                                                                            <option value="">Yuan(Y)</option>
                                                                            <option value="">Ruby(RB)</option>
                                                                        </select>
                                                                </div>


                                        </div>
                                        

                                        <div>
                                                                    <label className='amountb' htmlFor="">Amount</label>
                                                                    <div>                                                        
                                                                                    <input id='numberb' type="number" />
                                                                    </div>
                                        </div>
                                    
                            

                                            <div className='movecontib'>
                                            <button id='contib'>Continue</button>
                                            </div>
                  

                        </div>
          </div>
         
                        






    </div>
  )
}

export default Buy