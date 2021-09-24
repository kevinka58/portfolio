import React from 'react'
import "./Skills.scss"

export default function Skills() {

    const data = [
        {
            name: "HTML",
            icon: <i className="user" class="devicon-html5-plain colored"></i>,
        },
        {
            name: "CSS3",
            icon: <i className="user" class="devicon-css3-plain colored"></i>,
        },
        {
            name: "JavaScript",
            icon: <i className="user" class="devicon-javascript-plain colored"></i>,
        },
        {
            name: "Python",
            icon: <i className="user" class="devicon-python-plain colored"></i>,
        },
        {
            name: "React",
            icon: <i className="user" class="devicon-react-original colored"></i>,
        },
        {
            name: "Django",
            icon: <i className="user" class="devicon-django-plain colored"></i>,
        },
        {
            name: "Node JS",
            icon: <i className="user" class="devicon-nodejs-plain colored"></i>,
        },
        {
            name: "Express JS",
            icon: <i className="user" class="devicon-express-original colored"></i>,
        },
        {
            name: "MongoDB",
            icon: <i className="user" class="devicon-mongodb-plain colored"></i>,
        },
        {
            name: "PostgreSQL",
            icon: <i className="user" class="devicon-postgresql-plain colored"></i>,
        },
    ]
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="container">
                {data.map(d=>(

                    <div className={d.featured ? "card featured" : "card"}>
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
