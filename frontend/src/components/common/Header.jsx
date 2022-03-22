import React from 'react';
import logo from '../../assets/img/Cloth-World-Logo.png';
import searchIcon from '../../assets/img/Search-icon.png';
import userIcon from '../../assets/img/User-icon.png';
import cartIcon from '../../assets/img/Cart-icon.png';

function Header() {
    const myFunction = () => {
        var x = document.getElementById('myTopnav');
        if (x.className === 'topnav') {
            x.className += ' responsive';
        } else {
            x.className = 'topnav';
        }
    };

    return (
        <>
            <header>
                <img class="logo" src={logo} alt="" />
                <div class="searchBar">
                    <input id="searchbar" type="text" placeholder="Search for products,Brands & Categories" />
                    <img id="searchIcon" src={searchIcon} alt="" />
                </div>
                <div class="carts">
                    <img class="userIcon" src={userIcon} alt="" />
                    <img class="cartIcon" src={cartIcon} alt="" />
                </div>
            </header>
            <hr />
            <div class="topnav" id="myTopnav">
                <a href=""></a>
                <a href=""></a>
                <a>
                    <select id="home">
                        <option value="course">All categories</option>
                        <option value="web-dev">Home</option>
                        <option value="data-s">Women</option>
                        <option value="data-s">Men</option>
                    </select>
                </a>
                <a id="home" href="#">
                    Home
                </a>
                <a id="home" href="#">
                    Kids
                </a>
                <a id="home" href="#">
                    Women
                </a>
                <a id="home" href="#">
                    Men
                </a>
                <a class="icon" onclick={myFunction}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <hr />
        </>
    );
}

export default Header;
