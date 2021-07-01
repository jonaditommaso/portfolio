import '../styles/skills.css';
import GoTopButton from './GoTopButton';

const Skills = () => {
    return ( 
        <>
            <div className="images">

                <figure>
                    <img src="/assets/img/icons/html.png" alt="html" style={{width: '110px'}}/>
                    <figcaption>HTML</figcaption>
                </figure>

                <figure>
                    <img src="/assets/img/icons/css.png" alt="css" style={{width: '100px', marginLeft: '20px'}}/>
                    <figcaption>CSS</figcaption>
                </figure>
                    
                <figure>
                    <img src="/assets/img/icons/javascript.png" alt="javascript" style={{width: '175px'}}/>
                    <figcaption>JAVASCRIPT</figcaption>
                </figure>
                     
            </div>

            <div className="images">

                <figure>
                    <img src="/assets/img/icons/react.png" alt="react" style={{width: '140px'}}/>
                    <figcaption>REACT</figcaption>
                </figure>

                <figure>
                    <img src="/assets/img/icons/redux.png" alt="redux" style={{marginRight: '20px'}}/>
                    <figcaption>REDUX</figcaption>
                </figure>

                <figure>
                    <img src="/assets/img/icons/typescript.png" alt="typescript" style={{marginRight: '20px'}}/>
                    <figcaption>TYPESCRIPT</figcaption>
                </figure>
                    
                <figure>
                    <img src="/assets/img/icons/node.png" alt="node" style={{width: '170px'}}/>
                    <figcaption>NODE JS</figcaption>
                </figure>

                
            </div>

            <div className="images">
                <figure>
                    <img src="/assets/img/icons/mongodb.png" alt="mongodb" style={{width: '170px'}}/>
                    <figcaption>MONGO DB</figcaption>
                </figure>
                    
                <figure>
                    <img src="/assets/img/icons/mongoose.png" alt="mongoose" style={{width: '170px'}}/>
                    <figcaption>MONGOOSE</figcaption>
                </figure>
                
                <figure>
                    <img src="/assets/img/icons/express.png" alt="express" style={{width: '170px'}}/>
                    <figcaption>EXPRESS</figcaption>
                </figure>
            </div>
            
            <div className="images">

                <figure>
                    <img src="/assets/img/icons/git.png" alt="git" style={{height: '110px'}} />
                    <figcaption>GIT</figcaption>
                </figure>

                <figure>
                    <img src="/assets/img/icons/material-ui.png" alt="material-ui" style={{height: '110px', width: '130px'}} />
                    <figcaption>MATERIAL-UI</figcaption>
                </figure>

                <figure>
                    <img src="/assets/img/icons/sass.png" alt="sass" style={{height: '110px'}} />
                    <figcaption>SASS</figcaption>
                </figure>

                <figure>
                    <img src="/assets/img/icons/firebase.png" alt="firebase"/>
                    <figcaption>FIREBASE</figcaption>
                </figure>
            </div>
            
            <GoTopButton />
            
        </>
    );
}
 
export default Skills;