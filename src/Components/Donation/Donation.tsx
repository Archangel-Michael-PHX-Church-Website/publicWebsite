import React, { useState, useEffect } from 'react';
import "./Donation.css";
import PaypalLogo from "../../Assets/Images/PayPal_logo.png";
import ZelleLogo from "../../Assets/Images/zelle.png";

export default function Donation() {
    const [showZellePopup, setShowZellePopup] = useState(false);

    // // ✅ Prevent background scroll (fix flicker)
    // useEffect(() => {
    //     document.body.style.overflow = showZellePopup ? "hidden" : "auto";
    //     return () => {
    //         document.body.style.overflow = "auto";
    //     };
    // }, [showZellePopup]);

    return (
        <div className="donation-card">
            <h2 className="donation-title">God loves a cheerful giver!</h2>

            <p className="donation-text">
                His lord said to him, "Well done, good and faithful servant; you were faithful over a few things,
                I will make you ruler over many things. Enter into the joy of your lord." (Matt. 25:21)
            </p>

            <div className="donation-buttons">

                {/* Zeffy */}
                <div className="donation-option">
                    <span className="fee free">No transaction fee</span>
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
                </div>

                {/* Zelle */}
                <div className="donation-option">
                    <span className="fee free">No transaction fee</span>
                    <button
                        onClick={() => setShowZellePopup(true)}
                        className="donation-button zelle"
                    >
                        <img src={ZelleLogo} alt="Zelle Logo" className="donation-icon" />
                        Donate via Zelle
                    </button>
                </div>

                {/* PayPal */}
                <div className="donation-option">
                    <span className="fee paid">2.9% transaction fee</span>
                    <a
                        href="https://www.paypal.com/ncp/payment/2FQ68ABH9DT38"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="donation-button"
                    >
                        <img src={PaypalLogo} alt="PayPal Logo" className="donation-icon" />
                        Donate via PayPal
                    </a>
                </div>

            </div>

            {/* ✅ Popup */}
            {showZellePopup && (
                <div className="popup-overlay">
                    <div
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            className="close-btn"
                            onClick={() => setShowZellePopup(false)}
                        >
                            ✕
                        </button>

                        <h3>Zelle Donation</h3>
                        <p>Send your donation to:</p>

                        <strong className="zelle-email">
                            archangelphx@gmail.com
                        </strong>

                        <button
                            className="copy-btn"
                            onClick={() =>
                                navigator.clipboard.writeText("archangelphx@gmail.com")
                            }
                        >
                            Copy Email
                        </button>
                    </div>
                </div>
            )}

            <p className="donation-verse">
                Donation Cheques can also be mailed to 13221 N. 34th st., Phoenix, AZ, 85032.
            </p>
        </div>
    );
}