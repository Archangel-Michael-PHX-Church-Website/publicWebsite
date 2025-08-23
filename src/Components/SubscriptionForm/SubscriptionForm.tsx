import React, { useState } from "react";
import axios from "axios";
import {FormData} from "./SubscriptionFormData";
import config from "../../config"
import "./SubscriptionForm.css"

const SubscriptionForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await axios.post(`${config.API_URL}/subscriptionForm`, formData);
            setSubmitted(true);
        } catch (err) {
            setError("Failed to submit the form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="subscription-success">
                <h2>Thank you!</h2>
                <p>Your subscription was successful.</p>
            </div>
        );
    }

    return (
        <form className="subscription-form" onSubmit={handleSubmit}>
            <h2>Subscribe Now</h2>

            {/* Two inputs in the same row */}
            <div className="input-row">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="input-row">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
            />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Subscribe"}
            </button>
            {error && <p className="error">{error}</p>}
        </form>

    );
};

export default SubscriptionForm;