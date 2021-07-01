import { Link } from 'react-router-dom';
import '../styles/header.css';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
    return ( 
        <div className="header">
            
            <Link className="homeIcon" to='/'>
                <HomeIcon fontSize="large" />
            </Link>
                
            <div className="links" >
                <Link to='/projects' className="link">
                    PROJECTS
                </Link>
                <Link to='/skills' className="link">
                    SKILLS
                </Link>
                <Link to='/about' className="link">
                    PROFILE
                </Link>

                <a className="link"
                    href="https://drive.google.com/file/d/1rlM1eNOIgBtuccz5nlisraBoe0l_a0cQ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    CV
                </a>
            </div>
        </div>
    );
}
 
export default Header;