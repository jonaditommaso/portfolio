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
                    href="https://drive.google.com/file/d/18PViw_FSVBw-kZCMCJXi8-IB9gs6QHyz/view?usp=sharing" 
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