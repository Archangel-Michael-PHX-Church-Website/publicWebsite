import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrthodoxArticles.css";
import articles from "./OrthodoxArticles_Data";

export default function OrthodoxArticles() {
    const navigate = useNavigate();

    return (
        <div className="articles-container">
            {articles.map((a, i) => (
                <div className="card" key={i}>
                    <img src={a.image} alt={a.title} className="card-image" />

                    <div className="card-content">
                        <h2 className="card-title">{a.title}</h2>
                        <p className="card-description">{a.description}</p>

                        <button
                            className="card-btn"
                            onClick={() => navigate(a.link)}
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
