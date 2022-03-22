import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer'

function Shipping() {
    return (
        <>
            <Header />

            <div class="shipping">
                <h2 id="shipment">Shipment Details</h2>
                <p id="detail">Please check your details and confirm it</p>
                <table>
                    <tr id="name">
                        <td>Trinidad</td>
                        <td>1</td>
                        <td>$ 89</td>
                    </tr>
                    <tr id="name">
                        <td>Pergamino</td>
                        <td>1</td>
                        <td>$ 80</td>
                    </tr>

                    <tr id="totalPrice">
                        <td>Total Price</td>
                        <td>2</td>
                        <td>$ 169</td>
                    </tr>
                </table>
            </div>

            <ul class="container">
                <li>
                    <p id="fullName">Full Name</p>
                    <input id="input" type="text" placeholder="Enter receipient name" />
                </li>
                <li>
                    <p id="fullName">Phone Number</p>
                    <input id="input" type="text" placeholder="Enter phone no." />
                </li>
                <li>
                    <p id="fullName">Street Address or P.O Box</p>
                    <input id="input" type="text" placeholder="Enter Street Address or P.O Box" />
                </li>
                <li>
                    <p id="fullName">Pin Code</p>
                    <input id="input" type="text" placeholder="Enter Pin Code " />
                </li>

                <li>
                    <p id="fullName">Apt, Suite, Unit, Building, Floor, etc.</p>
                    <input id="input" type="text" placeholder="Enter Apt, Suite, Unit, Building, Floor, etc." />
                </li>
                <li>
                    <p id="fullName">City</p>
                    <input id="input" type="text" placeholder="Enter City" />
                </li>
                <li>
                    <p id="fullName">State</p>
                    <input id="input" type="text" placeholder="Enter State" />
                </li>
                <li>
                    <button id="checkOutButton">Submit</button>
                </li>
            </ul>

            <Footer />
        </>
    );
}

export default Shipping;
