import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import HomeIcon from '@material-ui/icons/Home';
import NavigationLinks from './NavigationLinks';
import { links } from '../utils/links';

const Header = () => {

    return ( 
        <div>
            <div className="header">
                
                <Link className="homeIcon" to='/'>
                    <HomeIcon fontSize="large" />
                </Link>
                    
                <div className="links" >
                    { links.map((link) => <NavigationLinks key={link}>{link}</NavigationLinks>) }

                    <a className="link"
                        href="https://drive.google.com/file/d/1jDv_4S3xEnTIirRuUVy5NhIKPVxBfhls/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>RESUME</span>
                    </a>
                </div>
            </div>
            <hr style={{width: '100%'}} />
        </div>
    );
}
 
export default Header;