import {React, useEffect, useRef} from 'react'
import "./Intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Developer", "Designer", "Engineer"]
        });
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="Assets/avatar.png" alt="Developer avatar icon" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome!, I'm</h2>
                    <h1>Kevin Ayala</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreIcon className="expandIcon"/>
                </a>
            </div>
        </div>
    )
}
