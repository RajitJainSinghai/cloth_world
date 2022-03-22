import React from 'react';
import background1 from '../assets/img/background-1.png';
import background2 from '../assets/img/background-2.png';
import background3 from '../assets/img/background-3.png';
import background4 from '../assets/img/background-4.png';
import Footer from '../components/common/Footer';
import buyNow from '../assets/img/Buynow-image.png';
import recommand1 from '../assets/img/recommand-1.png';
import recommand2 from '../assets/img/recommand-2.png';
import recommand3 from '../assets/img/recommand-3.png';
import recommand4 from '../assets/img/recommand-4.png';
import Header from '../components/common/Header';

function Home() {
    return (
        <>
            <Header />

            <section class="section-1">
                <img class="backgroundImg" src={background1} alt="" />
                <div class="background">
                    <h1>
                        GET BRANDED CLOTHES AT <br />
                        <span id="bold"> CLOTHWORLD</span>
                    </h1>
                    <p id="paragraph1">
                        A transformative clothes which can be worn in any occationlike <br />
                        Party, office, while trecking and more@
                    </p>
                    <div class="BuyNowbutton">
                        <button class="buy">
                            <img src={buyNow} alt="" />
                        </button>
                        <button class="tradeIn">With $599 with trade-in</button>
                    </div>
                </div>
                <center>
                    <p id="awesomeProduct">EXPLORE AWESOME PRODUCTS</p>
                    <h2>RECOMMENDED FOR YOU</h2>
                </center>
                <div class="recommandedImg">
                    <div>
                        <img src={recommand1} alt="" />
                        <center>
                            <p id="singleTour">Single Tour</p>
                            <button id="price">$990</button>
                        </center>
                    </div>
                    <div>
                        <img src={recommand2} alt="" />
                        <center>
                            <p id="singleTour">Single Tour</p>
                            <button id="price">$990</button>
                        </center>
                    </div>
                    <div>
                        <img src={recommand3} alt="" />
                        <center>
                            <p id="singleTour">Single Tour</p>
                            <button id="price">$990</button>
                        </center>
                    </div>
                    <div>
                        <img src={recommand4} alt="" />
                        <center>
                            <p id="singleTour">Single Tour</p>
                            <button id="price">$990</button>
                        </center>
                    </div>
                </div>
            </section>

            <section class="section-2">
                <center>
                    <img id="tag" src="./img/tag-kids.png" alt="" />
                    <img class="backgroundImg" src={background2} alt="" />
                    <img id="tag" src="./img/tags-women.png" alt="" />
                    <img class="backgroundImg" src={background3} alt="" />
                    <img id="tag" src="./img/tags-men.png" alt="" />
                    <img class="backgroundImg" src={background4} alt="" />
                </center>
            </section>
            <Footer />
        </>
    );
}

export default Home;
