import React from 'react'
import "./Topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ setMenuOpen, menuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Kev.dev</a>
                    <div className="itemContainer">
                        <Person className="itemContainer"/>
                        <span>1 (818)-378-5620</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>kevinayala.dev@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}