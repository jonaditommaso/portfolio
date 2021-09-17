import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import '../styles/goTopButton.css';

function GoTopButton() {

    const [showButton, setShowButton] = useState(false);

    window.onscroll = () => {
        if(document.documentElement.scrollTop > 65) {
            setShowButton(true);
        }
        else {
            setShowButton(false);
        }
    }

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <>
            <div className={`container ${showButton ? '' : 'hide'}`}>
                <div className="goTopContainer" onClick={()=> goTop()}>
                    <div className="goTop">
                        <ExpandLessIcon fontSize="large" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GoTopButton;
