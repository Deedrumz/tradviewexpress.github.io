import React from 'react'
import { Link } from 'react-router-dom'
import Sellcss from './Sell.css'

const Sell = () => {
  return (
      <div>

                                            <div className='moveallsell'>
                                                                                    <div className='allsell'>
                                                                                        
                                                                                            <h2>Buy/Sell Instantly</h2>
                                                                                            
                                                                                            <div className='buyselllink'>
                                                                                                                             
                                                                                                <Link to='Buy'><button className='links'> Buy</button> </Link>
                                                                                                <Link to='Sell'> <button className='links linksactive'>Sell</button> </Link>
                                                                                            </div>

                                                                                                            <div className='cts'>
                                                                                                                                <label className='coints' htmlFor="">Coin to Sell</label>

                                                                                                                                    <div>
                                                                                                                                            <select name="" id="ctbos">
                                                                                                                                                <option value="">Bitcoin(BTC)</option>
                                                                                                                                                <option value="">Ethereum(ETH)</option>
                                                                                                                                                <option value="">Fanthom(FTM)</option>
                                                                                                                                                <option value="">Solana(SOL)</option>
                                                                                                                                            </select>
                                                                                                                                    </div>


                                                                                                            </div>
                                                                                                            

                                                                                                            <div className='currency'>
                                                                                                                                <label className='currs' htmlFor="">Currency</label>

                                                                                                                                    <div>
                                                                                                                                            <select name="" id="ncyrs">
                                                                                                                                                <option value="">Naira(NGN)</option>
                                                                                                                                                <option value="">Cedis(CD)</option>
                                                                                                                                                <option value="">Yuan(Y)</option>
                                                                                                                                                <option value="">Ruby(RB)</option>
                                                                                                                                            </select>
                                                                                                                                    </div>


                                                                                                            </div>


                                                                                                            <div>
                                                                                                                        <label className='quas' htmlFor="">Quantity</label>
                                                                                                                        <div>      
                                                                                                                                        <input id='numbers' type="number" />
                                                                                                                        </div>
                                                                                                            </div>
                                                                                                            
                                                                                                            <div className='movecontis'>
                                                                                                                     <button id='contis'>Continue</button>
                                                                                                            </div>
                                                                                            </div>

                                            </div>

                                                       
                        











    </div>
  )
}

export default Sell