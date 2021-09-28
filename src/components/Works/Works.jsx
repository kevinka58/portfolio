import {React, useState} from 'react'
import "./Works.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "Assets/GAIcon.png",
            title: "General Assembly",
            desc: "Have been certified through a full-stack software engineering immersive course comprising of a twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.",
            img: "Assets/GAlogo.png",
        },
        {
            id: "2",
            icon: "Assets/avatar3.png",
            title: "A bit about me!",
            desc: "I was born and raised in the San Fernando Valley, apart of the Greater Los Angeles Area. I really enjoy tech, video games, and all things cars!",
            img: "Assets/portfolio-collage.jpg",
        },
        {
            id: "3",
            icon: "Assets/certificateicon.png",
            title: "Checkout my LinkedIn Profile",
            link: <a href="https://www.linkedin.com/in/kevinayala4/">Click Here</a>,
            desc: "Come connect with me on LinkedIn!",
            img: "Assets/LinkedIn.jpeg",
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)` }}>
                {data.map((d) => (

                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img className="phoneIcon" src={d.icon} alt="General Assembly Logo" />
                                </div>
                                <h2>{d.title} {d.link}</h2>
                                <p>{d.desc}</p>
                                {/* <span>Projects</span> */}
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="display of programming technologies" />
                        </div>
                    </div>               
                </div>
                ))}
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={() =>handleClick("left")}/>
            <ArrowForwardIosIcon className="arrow right" onClick={() =>handleClick()}/>
        </div>
    );
}
