import React, { useState } from 'react';
import '../styles/about.css';
import CustomButton from '../utils/CustomButton.jsx';
import GoTopButton from './GoTopButton';
import Separator from './Separator';

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