import React, { useState } from 'react';
import '../styles/project.css';
import CustomButton from '../utils/CustomButton.jsx';
import GoTopButton from './GoTopButton';

const Project = ({image, alt, href, description}) => {

    const [showDescription, setShowDescription] = useState('none');

    return ( 
        <>
            <a target='_blank' rel="noopener noreferrer" href={href}>
                <img src={image} alt={alt} />
            </a>

            <>
                <CustomButton handleClick={setShowDescription} />
            </>    

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