import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../Context";
import './Footer.css';

export default function Footer() {

    const { YRef } = useContext(Context);

    return (
        <footer className="footer" id="_footer" ref={YRef}>
            <div className="topFooter">
                <div className="_links">
                <Link to={'/'} > Test series</Link>
                <Link to={'/'}>About us</Link>
                <Link to={'/'}>Contact us</Link>
                
            </div>
            <div className="_links">
                <Link to={'/'}>Help and Support</Link>
            </div>
            <div className="_links">
                <Link to={'/'}>Terms</Link>
                <Link to={'/'}>Privacy Policy</Link>
                <Link to={'/'}>Cookie settings</Link>
            </div>
            <div className="button">
                <button className="Globe_Button"><span className="material-symbols-outlined">language</span> <span> English</span> </button>
            </div>
            </div>
            <Link className='bottomFooter' to={'/'}>
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="udemy logo"/>
                <p>© 2022 Udemy, Inc.</p>
            </Link>
            <div className="forSticky"></div>
        </footer>
    )
}