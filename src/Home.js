import React from "react";
import { Button, Carousel, Nav } from "react-bootstrap";
import "./Home.css";
import Apple from "./img/Group 68.svg";
import Google from "./img/Group 69.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pic1 from "./img/image 5.svg";
import pic2 from "./img/image 6.svg";
import pic3 from "./img/image 4.svg";
import pic4 from "./img/image 3.svg";
import union from './img/Union 1.svg'
import peter from './img/peter_avatar.jpg'
import joseph from './img/joseph_avatar.jpg'
import rilwan from './img/rilwan_avatar.jpeg'


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?start=0&limit=5")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  });
  return (
    <div>
      <section className="sec1">
        <div className="seccontent1">
          <h2>Buy, sell and manage your Crypto on TradExpress.</h2>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, LTC, XRP with NGN.
          </p>

          <div className="movegt2">
         <Link to="Welcome"><Button id="gt2" variant="" size="md">
              {" "}
              Get Started{" "}
            </Button></Link>   
          </div>

          <div className="appgoo">
            <Link to="#">
              <img id="btnag" src={Apple} alt="" />
            </Link>
            <Link to="#">
              <img id="btnag" src={Google} alt="" />
            </Link>
          </div>
        </div>
      </section>

      <section className="datafetch">
        {data.map((datum) => {
          const { id, symbol, name, price_usd } = datum;
          return (
            <div className="bit" key={id}>
              <div id="syna">
                <span id="symna">{symbol}/USD</span>
                <span id="symna">({name})</span>
              </div>
              <h2 id="price">{price_usd}</h2>
            </div>
          );
        })}
      </section>

      <section className="section3">
        <h2 id="why">Why do people get involved in Cryptocurrencies?</h2>

        <section className="mobilecarousel">

                  <Carousel>
                    <Carousel.Item>
                      <div className="moveeasymode">
                        <div className="easymode">
                          <img id="pic1" src={pic1} alt="" />
                          <h5>Easy Mode of Payment</h5>
                          <p>
                            People can now easily send and receive money from anywhere in
                            the world to purchase goods and pay for services.
                          </p>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="movefinfree">
                        <div className="finfree">
                          <img id="pic2" src={pic2} alt="" />
                          <h5>Financial Freedom</h5>
                          <p>
                            Just like the internet no single entity controls the Crypto
                            network which provides users transparency and privacy, which
                            puts you in absolute control of your money.
                          </p>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="moveinv">
                        <div className="inv">
                          <img id="pic1" src={pic1} alt="" />
                          <h5>Investment</h5>
                          <p>
                            The constant demand as made Cryptocurrecies a Digital Gold
                            used for alternative store of wealth on long term investments.
                          </p>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
        </section>
        

        {/* DISABLE/ENABLE CAROUSEL FOR DESKTOP  */}

        <section className="deskcarousel">
          <div className="moveeasymode">
            <div className="easymode">
              <img id="pic1" src={pic1} alt="" />
              <h5>Easy Mode of Payment</h5>
              <p>
                People can now easily send and receive money from anywhere in
                the world to purchase goods and pay for services.
              </p>
            </div>
          </div>

          <div className="movefinfree">
            <div className="finfree">
              <img id="pic2" src={pic2} alt="" />
              <h5>Financial Freedom</h5>
              <p>
                Just like the internet no single entity controls the Crypto
                network which provides users transparency and privacy, which
                puts you in absolute control of your money.
              </p>
            </div>
          </div>

          <div className="moveinvd">
            <div className="invd">
              <img id="pic1" src={pic1} alt="" />
              <h5>Investment</h5>
              <p>
                The constant demand as made Cryptocurrecies a Digital Gold used
                for alternative store of wealth on long term investments.
              </p>
            </div>
          </div>
        </section>

        {/* DESKTOP CAROUSEL ENABLE/DISABLE ENDS */}

        <Nav className="movelm">
          <Button id="lmore" variant="" size="md">
            {" "}
            Learn More{" "}
          </Button>
        </Nav>

        {/* BUY AND SELL CRYPTO IN 3 EASY STEPS */}
        <section className="crytostepsec">
          <h2 className="buysell">Buy and Sell your Cryptocurrency in 3 simple steps</h2>

          {/* FIRST STEP */}

          <div className="movecfreeall">
                    <div className="movecfree">
                      
                            <div className="movecolor1">
                                    <div className="movecolor">
                                      <div className="color">1</div>
                                    </div>
                            </div>
                             

                              <div className="freesign">
                                    <h4 className="freeacc">Create a free Account</h4>
                                    <p id="signup">Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                              </div>
                    </div>
                            <img id="pic3" src= {pic3} alt="" />
                            
          </div>
          
 
          {/* SECOND STEP */}

          <div className="movedepoall">
                        <div className="movedepo">
                                              <div className="movecolor2">
                                                    <div className="movecolor">
                                                        <div className="color">2</div>
                                                    </div>
                                              </div>
                                      

                                      <div className="depochoose">
                                            <h4 className="depo">Deposit</h4>
                                            <p id="choose">Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                                      </div>
                        </div>
                        
                                      {/* <div className="movepic2"> */}
                                      <img id="pic1" src= {pic1} alt="" />
                                      {/* </div> */}
                                      
                                

          </div>
          
          
          
          {/* THIRD STEP */}

          <div className="movebscall">
                      <div className="movebsc">

                                    <div className="movecolor3">
                                    <div className="movecolor">
                                          <div className="color">3</div>
                                    </div>
                                    </div>
              
                                      <div className="bscbuycoin">
                                              <h4 className="bsc">Buy/ Sell Crypto</h4>
                                              <p id="buycoin">Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
                                      </div>

                      </div>
                                <img id="pic3" src= {pic2} alt="" />

          </div>
          
          
                 
          


        </section>

      </section>

      {/* SECTION FOUR STARTS HERE */}

      <section className="section4">

                  <p id="ready4">Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
                  <h4 id="create4">Create your account for free and start trading today!</h4>
                  <Nav className="movegt4">
              <Link to='Welcome'><Button id="gt4" variant="" size="md">
                      {" "}
                      Get Started{" "}
                    </Button></Link>      
                  </Nav>

                  <div className="moveag4">
                          <img id="ag4" src={Apple} alt="" />
                            <img id="ag4" src={Google} alt="" />
                  </div>
                  


      </section>

      {/* CUSTOMER REVIEW SECTION */}

<section className="cusreview">

                  <h4 id="cr">Customer's Review</h4>

                  <div className="unioncomment">
                                                    <div className="moveunioncom1">
                                                                    <div>
                                                                        <img id="union" src={union} alt="" />
                                                                        <p id="comment1">"Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate."</p>
                                                                    </div>
                                                                 
                                                                  
                                                                  <div className="josireti">
                                                                        <img id="jos" src={joseph} alt="" />
                                                                        <p id="iretinig">Ireti <span>Nigeria</span></p>
                                                                    </div>
                                                      </div>
                                                    
                                            
                                            
                                                    <div className="moveunioncom2">
                                                                      <div>
                                                                                    <img id="union2" src={union} alt="" />
                                                                                    <p id="comment2">"They have the best rate compared to other platforms with fast payout."</p>
                                                                      </div>
                                                                   
                                                                    
                                                                    <div className="petpet">
                                                                          <img id="pet" src={peter} alt="" />
                                                                          <p id="petusa">Peter <span>USA</span></p>
                                                                      </div>
                                                    </div>
                                                    
                                            

                                            <div className="moveunioncom3">
                                                              <div>
                                                                            <img id="union3" src={union} alt="" />
                                                                            <p id="comment3">"Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again."</p>
                                                              </div>
                                                            
                                                            
                                                            <div className="rilril">
                                                                <img id="ril" src={rilwan} alt="" />
                                                                <p id="rilnig">Rilwan <span>Nigeria</span></p>
                                                            </div>
                                            </div>
                                            
                                            
                      </div>
            


</section>









    </div>
  );
};

export default Home;
