import React from 'react';
import "./Donation.css";
import PaypalLogo from "../../Assets/Images/PayPal_logo.png";
import ZelleLogo  from "../../Assets/Images/zelle.png"

export default function Donation() {
    return (
        <div className="donation-card">
            <h2 className="donation-title">God loves a cheerful giver!</h2>
            <p className="donation-text">
                His lord said to him, "Well done, good and faithful servant; you were faithful over a few things,
                I will make you ruler over many things. Enter into the joy of your lord." (Matt. 25:21)
            </p>

            <div className="donation-buttons">
                {/* PayPal Donation */}
                <a
                    href="https://www.paypal.com/ncp/payment/2FQ68ABH9DT38"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donation-button"
                >
                    <img
                        src={PaypalLogo}
                        alt="PayPal Logo"
                        className="donation-icon"
                    />
                    Donate via PayPal
                </a>

                {/* Zeffy Donation */}
                <a
                    href="https://www.zeffy.com/en-US/embed/donation-form/af1d8c53-b220-415e-a8aa-e0764f21f45d?modal=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donation-button secondary"
                >
                    <img
                        src="https://www.zeffy.com/favicon.ico"
                        alt="Zeffy Logo"
                        className="donation-icon"
                    />
                    Donate via Zeffy
                </a>

                {/* Zelle Donation */}
                <a
                    href="mailto:archangelphx@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donation-button zelle"
                >
                    <img
                        src={ZelleLogo}
                        alt="Zelle Logo"
                        className="donation-icon"
                    />
                    Donate via Zelle
                </a>
            </div>

            <p className="donation-verse"></p>
        </div>
    );
}