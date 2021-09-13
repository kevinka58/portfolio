import React from 'react'
import "./Skills.scss"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function Skills() {

    const data = [
        {
            name: "HTML",
            icon: <i className="user" class="devicon-html5-plain colored"></i>,
        },
    ]
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="container">
                {data.map(d=>(

                    <div className="card">
                    <div className="top">
                        <div>{d.icon}</div>
                   </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    )
}
