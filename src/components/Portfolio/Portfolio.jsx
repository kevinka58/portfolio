import React from 'react'
import "./Portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Games</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="Assets/portfolio1.png" alt="FC Board (Web App)" />
                    <h3>Final Fantasy 14: Free Company Finder</h3>
                </div>
                <div className="item">
                    <img src="Assets/portfolio1.png" alt="FC Board (Web App)" />
                    <h3>Final Fantasy 14: Free Company Finder</h3>
                </div>
                <div className="item">
                    <img src="Assets/portfolio1.png" alt="FC Board (Web App)" />
                    <h3>Final Fantasy 14: Free Company Finder</h3>
                </div>
                <div className="item">
                    <img src="Assets/portfolio1.png" alt="FC Board (Web App)" />
                    <h3>Final Fantasy 14: Free Company Finder</h3>
                </div>
            </div>
        </div>
    )
}
