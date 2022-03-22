import React from 'react';
import Home from '../../containers/Home';

function Signup() {
    return (
        <>
            <section class="popup">
                <div class="popup-inner">
                    <p class="createHeading">
                        Create an account and <br />
                        discover the benefits
                    </p>
                    <p class="signUpParagraph">
                        Lorem Ipsum is simply dummy text of <br />
                        the printing and typesetting industry.
                        <br />
                        Lorem Ipsum has been the industry's{' '}
                    </p>
                    <div class="popup-input">
                        <input id="inputBox" type="name" required placeholder="Name" />
                        <br />
                        <br />
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
                        <button class="signUpButton">SIGN UP</button> <br />
                        <a class="loginLink" href="./Signin.html">
                            Already a Member?
                        </a>
                    </div>
                </div>
            </section>
            <Home />
        </>
    );
}

export default Signup;
