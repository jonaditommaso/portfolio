import React, { useState } from 'react';
import '../styles/about.css';
import CustomButton from '../utils/CustomButton.jsx';
import MovingTextAbout from '../utils/MovingTextAbout';
import GoTopButton from './GoTopButton';
import Separator from './Separator';

const About = () => {

    const [showDescription, setShowDescription] = useState('none');

    return ( 

        <>
        <div className="about">
        
            <div className="movingText"> 
                <MovingTextAbout movingClass="movingText__One" text={`<Enthusiastic />`} />
                <MovingTextAbout movingClass="movingText__Two" text={`<Resilient />`} />
                <MovingTextAbout movingClass="movingText__Three" text={`<Creative />`} />
                {/* fijarse si directamente puedo pasarle una prop que sea el tiempo que tarda en aparecer */}
            </div>

            <div className="content">
                <img className="image" src="/assets/img/jonathan.png" alt="me" loading="lazy" decoding="async" />
                <CustomButton handleClick={setShowDescription} />
            </div>


            <div className="movingText"> 
                <MovingTextAbout movingClass="movingText__Four" text={`<Methodical />`} />
                <MovingTextAbout movingClass="movingText__Five" text={`<Competent />`} />
                <MovingTextAbout movingClass="movingText__Six" text={`<Engaged />`} />
            </div>
           

        </div>

        <div 
        className="descriptionAboutMe" 
        style={{display: showDescription}}
        >
            <div className="text">
                My name is <strong><i>Jonathan Manuel Campos</i></strong>. I am a Frontend Developer looking to reinforce my experience as a programmer. 
                <br/>
                <br/>
                I consider myself an enthusiastic, curious and resilient person. If something is difficult for me, I look for a way to understand it and solve it no matter how much effort I have to make or how much personal time it demands of me. 
                <br/>
                <br/>
                I realized that software positively influences people's quality of life, and I want to be part of it.
                <br/>
                <br/>
                My current goals are summarized in the desire to be able to obtain a job opportunity that allows me to continue learning, continue growing and continue advancing. 
                <br/>
                <br/>
                I hope we can get to know each other, and you will see how willing I am to give my best, waiting to be able to match with your goals.
            </div>

        </div>

        <Separator />

        <GoTopButton />

        </>
    );
}
 
export default About;