import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../styles/customButton.css';

const CustomButton = ({handleClick}) => {

    const [isClose, setIsClose] = useState(true);

    const textOfButton = () => {
        if(isClose) {
            return 'LEARN MORE'
        }
        else { return 'HIDE' }
    }

    const showAndHide = () => {
        if(isClose) {
            handleClick('flex');
            setIsClose(false)
        }
        else { 
            handleClick('none');
            setIsClose(true);
        }
    }


    return ( 
        <div className="learnMore">
            <Button size="small" variant="outlined" onClick={() => showAndHide() }>{textOfButton()}</Button>
        </div>
    );
}
 
export default CustomButton;