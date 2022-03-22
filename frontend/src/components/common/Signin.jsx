import React from 'react';
import Home from '../../containers/Home';

function Signin() {
    return (
        <>
            <section class="popup">
                <div class="popup-inner">
                    <p class="createHeading">Log In</p>
                    <p class="signUpParagraph">
                        Lorem Ipsum is simply dummy text of <br />
                        the printing ..
                    </p>
                    <div class="popup-input">
                        <input id="inputBox" type="email" required placeholder="Email-address" />
                        <br />
                        <br />
                        <input id="inputBox" type="password" required placeholder="Password" />
                        <br /> <br />
                        <div class="checkBoxDiv">
                            <input id="checkBox" type="checkbox" />
                            <p>
                                I agree to the Google Terms of Service and <br />
                                Privacy Policy{' '}
                            </p>{' '}
                            <br />
                        </div>
                        <button class="signUpButton">LOGIN</button> <br />
                        <a class="loginLink" href="./Signup.html">
                            Not a member Yet?
                        </a>
                    </div>
                </div>
            </section>
            <Home />
        </>
    );
}

export default Signin;
