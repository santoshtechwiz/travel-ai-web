import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
    return (
        <>
            <NavBar></NavBar>

            <div className="privacy-container">
                <h2>Privacy Policy</h2>

                <p>
                    Welcome to Tripcrafts.online! This Privacy Policy describes how your
                    personal information is collected, used, and shared when you visit or
                    make a purchase from tripcrafts.online (the "Site").
                </p>

                <h3>Personal Information We Collect</h3>
                <p>
                    We collect Device Information using the following technologies:
                    <ul>
                        <li>Information about your web browser</li>
                        <li>IP address</li>
                        <li>Time zone</li>
                        <li>Some of the cookies that are installed on your device</li>
                    </ul>
                </p>

                <h3>How Do We Use Your Personal Information?</h3>
                <p>
                    We use the collected information to:
                    <ul>
                        <li>Communicate with you</li>
                        <li>Screen our orders for potential risk or fraud</li>
                        <li>Provide you with information or advertising relating to our products or services</li>
                    </ul>
                </p>

                <h3>Sharing Your Personal Information</h3>
                <p>
                    We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.
                </p>

                <h3>Changes</h3>
                <p>
                    We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.
                </p>

                <h3>Contact Us</h3>
                <p>
                    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@tripcrafts.online.
                </p>

                <p>
                    <i>
                        Please note that this is a generic privacy policy. Consult with legal professionals to ensure compliance with privacy laws and regulations in your jurisdiction.
                    </i>
                </p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PrivacyPolicy;
