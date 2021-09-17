import React, { useState } from 'react';
import '../styles/project.css';
import CustomButton from '../utils/CustomButton.jsx';
import GoTopButton from './GoTopButton';
import SeeCodeButton from './SeeCodeButton';

const Project = ({image, alt, href, description, codeDirection, title}) => {

    const [showDescription, setShowDescription] = useState('none');

    return ( 
        <>
            
            <a target='_blank' rel="noopener noreferrer" href={href}>
                <img src={image} alt={alt} />
            </a>

            <div><p className="project__title">{title}</p></div>

            <div className="project__buttons">
                <div className="buttons">
                    <CustomButton handleClick={setShowDescription} />
                    <SeeCodeButton code={codeDirection} />
                </div>
                
            </div>    

            <div 
                className="description" 
                style={{display: showDescription}}
            >
                <div className="text">
                    {description}
                </div>

            </div>

            <GoTopButton />
        </>
    );
}
 
export default Project;