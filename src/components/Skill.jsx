import React, { useState, useEffect } from 'react';
import '../styles/skills.css';

const Skill = ({width, height, marginB, marginT, icon, figcaption, showSkills}) => {

    const [discovered, setDiscovered] = useState('none');
    const [damaged, setDamaged] = useState(false);
    const [shaking, setShaking] = useState('');
    const [changeBackground, setChangeBackground] = useState('#FFFFFF');

    useEffect(() => {
        if(showSkills === true) {
            setDamaged(false)
            setDiscovered('block')
            setChangeBackground('white')
        }
        if((showSkills === false) && (!damaged)) {
            setDiscovered('none')
        }
    }, [showSkills])

    const damageSkill = () => {
        if(!damaged && discovered === 'block') {
            return
        }
        if(!damaged) {
            setDamaged(true);
            setShaking('shaking');
            setTimeout(() => {
                setShaking('')
            }, 150);
        }
    }

    const handleDiscover = () => {
        setDamaged(false)
        setDiscovered('block')
        setChangeBackground('white')
    }

    return ( 
        <div 
            className={`skill ${shaking} ${discovered === 'none' && 'blur'}`} 
            onClick={damageSkill} 
            style={{background: changeBackground, cursor: discovered === 'block' && 'default'}}
        >
            {damaged ?
                <img 
                    src="/assets/img/crack.png" 
                    alt="crack" 
                    style={{width: '120px'}} 
                    onClick={handleDiscover} 
                /> 
                : <></>
            }
            {discovered && 
                <div className="container__skill" style={{display: discovered}}>
                    <img 
                    src={`/assets/img/icons/${icon}.png`} 
                    alt={`${icon}`} 
                    style={{
                        width: width && width, 
                        height: height && height, 
                        marginBottom: marginB && marginB, 
                        marginTop: marginT && marginT
                    }}
                    />
                    <figcaption>{figcaption}</figcaption>
                </div> 
            }
        </div>
    );
}
 
export default Skill;