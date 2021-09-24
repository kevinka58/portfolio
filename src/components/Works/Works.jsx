import {React, useState} from 'react'
import "./Works.scss"
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: <PhoneAndroidIcon />,
            title: "Web Design",
            desc: "This is how I design my site",
            img: "Assets/programming.jpeg",
        },
        {
            id: "2",
            icon: <PhoneAndroidIcon />,
            title: "A bit about me!",
            desc: "I was born and raised in the San Fernando Valley, apart of the Greater Los Angeles Area. I really enjoy tech, video games, and all things cars!",
            img: "Assets/programming.jpeg",
        },
    ];

    const handleClick = (way) => {
        way === "left" ? currentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
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
                                    <div className="phoneIcon">{d.icon}</div>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
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
