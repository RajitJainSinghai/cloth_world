import React from 'react';
import womens1 from '../assets/img/women1.png';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function Womenswear() {
    return (
        <>
            <Header />
            <ul class="container">
                <li class="menu">
                    <div class="cart">
                        <img class="image" src={womens1} alt="" />
                        <p id="name">Nike Court Air</p>
                        <div class="button">
                            <p id="price">$ 58</p>
                            <button id="addButton">ADD</button>
                        </div>
                    </div>

                    <div class="cart">
                        <img class="image" src={womens1} alt="" />
                        <p id="name">Nike Court Air</p>
                        <div class="button">
                            <p id="price">$ 58</p>
                            <button id="addButton">ADD</button>
                        </div>
                    </div>

                    <div class="cart">
                        <img class="image" src={womens1} alt="" />
                        <p id="name">Nike Court Air</p>
                        <div class="button">
                            <p id="price">$ 58</p>
                            <button id="addButton">ADD</button>
                        </div>
                    </div>

                    <div class="cart">
                        <img class="image" src={womens1} alt="" />
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

export default Womenswear;
