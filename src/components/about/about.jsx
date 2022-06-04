import React from "react";
import './about.css'
import ME from '../../assets/me2.jpg'
import {Si1001Tracklists} from 'react-icons/si'
import {TiPointOfInterest} from 'react-icons/ti'
import {FaMedal} from 'react-icons/fa'
const about =  () => {
    return (
    <section id="about">
        <h5>
            Get To Know
        </h5>
        <h2>
            About Me
        </h2>
        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                <img src={ME} alt = "about-pic"/>
                </div>
            </div>
        <div className="about_content">
            <div className="about_cards">
                <article className="about_card">
                    <Si1001Tracklists className="about_icon"/>
                    <h5>Hobbies</h5>
                    <small>Basketball, Travelling , Cooking</small>
                </article>
                <article className="about_card">
                    <TiPointOfInterest className="about_icon"/>
                    <h5>Hobbies</h5>
                    <small>Basketball, Travelling , Cooking</small>
                </article>
                <article className="about_card">
                    <FaMedal className="about_icon"/>
                    <h5>Hobbies</h5>
                    <small>Basketball, Travelling , Cooking</small>
                </article>
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quos ullam, porro recusandae accusamus possimus sapiente quia temporibus quae nemo quod velit inventore. Mollitia temporibus ab esse veniam ipsam veritatis?
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a> 
        </div>
        </div>

    </section>
    )
}

export default about