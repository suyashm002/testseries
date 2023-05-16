import React from "react";
import './header.css';

export default function Header() {
    return (
        <header className="head-continer">
            <div className="heade-bar">
                <h1>New to TestSeries? Lucky You.</h1>
                <h3>Try Mock Test for free.</h3>
            </div>
            <img src="https://i.ibb.co/2qHbQqM/download.png" alt="alarm" className="alarmphoto" />
        </header>
    )
}