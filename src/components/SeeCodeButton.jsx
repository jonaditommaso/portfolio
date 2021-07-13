import React from 'react';
import { Button } from '@material-ui/core';
import '../styles/seeCodeButton.css';
import GitHubIcon from '@material-ui/icons/GitHub';

const SeeCodeButton = ({code}) => {
    return ( 
        <>
            <a 
                href={code}
                target="_blank"
                rel="noreferrer">
                    <div className="myButton">
                        <Button  size="small" variant="contained">
                            <GitHubIcon fontSize="small"/>
                            <span className="seeCodeTextButton">SEE CODE</span> 
                        </Button>
                    </div>
            </a>
        </>
    );
}
 
export default SeeCodeButton;