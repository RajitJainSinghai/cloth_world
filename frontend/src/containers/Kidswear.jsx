import React from 'react';
import Header from '../components/common/Header';
import kids1 from '../assets/img/kids1.png';
import Footer from '../components/common/Footer';

function Kidswear() {
    return (
        <>
            <Header />
            <ul class="container">
                <li class="menu">
                    <div class="cart">
                        <img class="image" src={kids1} alt="" />
                        <p id="name">Nike Court Air</p>
                        <div class="button">
                            <p id="price">$ 58</p>
                            <button id="addButton">ADD</button>
                        </div>
                    </div>

                    <div class="cart">
                        <img class="image" src={kids1} alt="" />
                        <p id="name">Nike Court Air</p>
                        <div class="button">
                            <p id="price">$ 58</p>
                            <button id="addButton">ADD</button>
                        </div>
                    </div>

                    <div class="cart">
                        <img class="image" src={kids1} alt="" />
                        <p id="name">Nike Court Air</p>
                        <div class="button">
                            <p id="price">$ 58</p>
                            <button id="addButton">ADD</button>
                        </div>
                    </div>
                </li>
            </ul>
            <Footer />
        </>
    );
}

export default Kidswear;
