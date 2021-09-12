import React from 'react'
import "./Works.scss"
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Works() {

    const data = [
        {
            id: "1",
            icon: <PhoneAndroidIcon />,
            title: "Web Design",
            desc: "This is how I design my site",
            img: "Assets/programming.jpeg",
        },
    ];
    return (
        <div className="works" id="works">
            <div className="slider">
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
            <ArrowBackIosIcon className="arrow left"/>
            <ArrowForwardIosIcon className="arrow right"/>
        </div>
    );
}
