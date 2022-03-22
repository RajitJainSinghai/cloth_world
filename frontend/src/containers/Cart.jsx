import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function Cart() {
    return (
        <>
            <Header />
            <hr id="hr2" />
            <table>
                <tr>
                    <td>Product</td>
                    <td>Size</td>
                    <td>Count</td>
                    <td>Price</td>
                </tr>
                <tr id="cart1">
                    <td>
                        <img id="user1" src="./img/mens1.png" alt="" />
                    </td>
                    <td>XL</td>
                    <td>
                        <button id="countButton">
                            <span> - </span>1 <span> + </span>
                        </button>
                    </td>
                    <td>$ 78.90</td>
                    <td>
                        <button id="cancel">
                            <img id="cancelImg" src="./img/cancel.png" alt="" />
                        </button>
                    </td>
                </tr>
                <tr id="cart1">
                    <td>
                        <img id="user1" src="./img/mens2.png" alt="" />
                    </td>
                    <td>XL</td>
                    <td>
                        <button id="countButton">
                            <span> - </span>1 <span> + </span>
                        </button>
                    </td>
                    <td>$ 78.90</td>
                    <td>
                        <button id="cancel">
                            <img id="cancelImg" src="./img/cancel.png" alt="" />
                        </button>
                    </td>
                </tr>
            </table>

            <div class="subtotal">
                <p id="tag">
                    No of Items: <span id="NoOfItem">5</span>
                </p>
                <hr />
                <p id="tag">
                    SUBTOTAL: <span id="total">$34567 </span>
                </p>
                <button id="checkOutButton">Proceed to checkout </button>
            </div>

            <Footer />
        </>
    );
}
export default Cart;
