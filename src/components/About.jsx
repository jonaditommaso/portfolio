import React, { useState } from 'react';
import '../styles/about.css';
import CustomButton from '../utils/CustomButton.jsx';
import GoTopButton from './GoTopButton';

const About = () => {

    const [showDescription, setShowDescription] = useState('none');

    return ( 

        <>
        <div className="about">
        
            <div className="movingText"> 
                <div className="movingText__One">{`<Enthusiastic />`}</div>  
                <div className="movingText__Two">{`<Resilient />`}</div>  
                <div className="movingText__Three">{`<Creative />`}</div> 
            </div>

            <div className="content">
                <img className="image" src="/assets/img/jonathan.png" alt="me"/>
                <CustomButton handleClick={setShowDescription} />
            </div>


            <div className="movingText"> 
                <div className="movingText__Four">{`<Methodical />`}</div>  
                <div className="movingText__Five">{`<Competent />`}</div>  
                <div className="movingText__Six">{`<Engaged />`}</div> 
            </div>
           

        </div>

        <div 
        className="description" 
        style={{display: showDescription}}
        >
            <div className="text">
            My name is Jonathan Manuel Campos. To dispel doubts in advance, Di Tommaso is my maternal surname. I am a Frontend Developer looking for my first work experience as a programmer. 
            I consider myself an enthusiastic, curious and resilient person. And this is reflected in my experience as the owner of my own business. There I developed many fundamental interpersonal skills such as communication, conflict resolution, ability to improve processes and above all I faced situations that revealed my character. 
            Therefore, if something is difficult for me, I also look for a way to understand it and solve it no matter how much effort I have to make or how much personal time it demands of me. More than a year ago, I immersed myself in the world of software for various reasons. 
            First of all because I realized that I love the challenge, where I put myself to the test day by day; secondly because my curiosity and enthusiasm is fueled by such a vast and fascinating industry. And mainly because I realized that software positively influences people's quality of life, and I want to be part of it. 
            My goals are summarized in the desire to be able to obtain a job opportunity that allows me to continue learning, continue growing and continue advancing. I hope we can get to know each other, and you will see how willing I am to give my best, waiting to be able to match with your goals.
            </div>

        </div>

        <GoTopButton />

        </>
    );
}
 
export default About;