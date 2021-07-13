import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {

    const [changeColorProjects, setChangeColorProjects] = useState('');
    const [changeColorSkills, setChangeColorSkills] = useState('');
    const [changeColorProfile, setChangeColorProfile] = useState('');
    const [changeColorCV, setChangeColorCV] = useState('');

    const linkClicked = (path) => {
        switch (path) {
            case 'projects':
                setChangeColorProjects('link__projects');
                setChangeColorSkills('');
                setChangeColorProfile('');
                setChangeColorCV('');
                break;
            case 'skills':
                setChangeColorSkills('link__skills');
                setChangeColorProjects('');
                setChangeColorProfile('');
                setChangeColorCV('');
                break;
            case 'profile':
                setChangeColorProfile('link__profile');
                setChangeColorSkills('');
                setChangeColorProjects('');
                setChangeColorCV('');
                    break;
            case 'cv':
                setChangeColorCV('link__cv');
                setChangeColorSkills('');
                setChangeColorProfile('');
                setChangeColorProjects('');
                break;
            case 'home':
                setChangeColorSkills('');
                setChangeColorProfile('');
                setChangeColorProjects('');
                break;
            default:
                break;
        }
    }

    return ( 
        <div className="header">
            
            <Link className="homeIcon" to='/' onClick={() => linkClicked('home')}>
                <HomeIcon fontSize="large" />
            </Link>
                
            <div className="links" >
                <Link to='/projects' className="link">
                    <span className={changeColorProjects} onClick={() => linkClicked('projects')}>PROJECTS</span>
                </Link>
                <Link to='/skills' className="link">
                    <span className={changeColorSkills} onClick={() => linkClicked('skills')}>SKILLS</span>
                </Link>
                <Link to='/about' className="link">
                    <span className={changeColorProfile} onClick={() => linkClicked('profile')}>PROFILE</span>
                </Link>

                <a className="link"
                    href="https://drive.google.com/file/d/1rlM1eNOIgBtuccz5nlisraBoe0l_a0cQ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={changeColorCV} onClick={() => linkClicked('cv')}>CV</span>
                </a>
            </div>
        </div>
    );
}
 
export default Header;