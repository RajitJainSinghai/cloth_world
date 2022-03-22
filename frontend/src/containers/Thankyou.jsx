import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function Thankyou() {
    return (
        <>
            <Header />
            <center>
                <h1 id="thankyouHeading">
                    Thank you for ordering. We received your request <br />
                    Our staff will be contacting with you to tell next steps.
                </h1>
                <button id="checkOutButton">Back to Home</button>
            </center>
            <Footer />
        </>
    );
}

export default Thankyou;
