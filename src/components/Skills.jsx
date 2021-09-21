import React from 'react';
import '../styles/skills.css';
import GoTopButton from './GoTopButton';
import Separator from './Separator';

const Skills = () => {
    return ( 
        <>
            <div className="skills">
                <div className="skills__direction">

                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/html.png" alt="html" style={{width: '80px'}}/>
                            <figcaption>HTML</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/css.png" alt="css" style={{width: '70px', height: '70px'}}/>
                            <figcaption>CSS</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/javascript.png" alt="javascript" style={{width: '120px', height: '70px'}}/>
                            <figcaption>JAVASCRIPT</figcaption>
                        </div>
                    </div>

                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/react.png" alt="react" style={{width: '105px', height: '70px'}}/>
                            <figcaption>REACT</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/redux.png" alt="redux" style={{width:'70px', height: '70px'}}/>
                            <figcaption>REDUX</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/typescript.png" alt="typescript" style={{width:'70px', height: '70px'}}/>
                            <figcaption>TYPESCRIPT</figcaption>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="skills__direction">
                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/mongodb.png" alt="mongodb" style={{width: '100px', height: '50px', marginBottom: '4%', marginTop: '10%'}}/>
                            <figcaption>MONGO DB</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/mongoose.png" alt="mongoose" style={{width: '120px', height: '70px'}}/>
                            <figcaption>MONGOOSE</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/express.png" alt="express" style={{width: '110px', height: '65px', marginTop: '5%', marginBottom: '0%'}}/>
                            <figcaption>EXPRESS</figcaption>
                        </div>
                    </div>

                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/node.png" alt="node" style={{width: '105px', height: '70px'}}/>
                            <figcaption>NODE JS</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/sql.png" alt="sql" style={{width: '110px', marginTop: '14%'}}/>
                            <figcaption>SQL</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/mysql.png" alt="mysql" style={{width: '100px', height: '70px'}}/>
                            <figcaption>MYSQL</figcaption>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="skills__direction">

                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/jest.png" alt="jest" style={{height: '75px', width: '85px', marginTop: '-2px'}}/>
                            <figcaption>JEST</figcaption>
                        </div>
                        <div className="skill">
                            <img src="/assets/img/icons/graphql.png" alt="graphql" style={{height: '70px',width: '70px'}}/>
                            <figcaption>GRAPHQL</figcaption>
                        </div>
                        <div className="skill">
                            <img src="/assets/img/icons/next.png" alt="next" style={{width: '110px', height: '70px'}}/>
                            <figcaption>NEXT JS</figcaption>
                        </div>
                    </div>

                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/firebase.png" alt="firebase" style={{width:'70px', height: '70px'}}/>
                            <figcaption>FIREBASE</figcaption>
                        </div>
                        
                        <div className="skill">
                            <img src="/assets/img/icons/python.png" alt="python" style={{width: '80px'}}/>
                            <figcaption>PYTHON</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/git.png" alt="git"  style={{ height: '70px'}}/>
                            <figcaption>GIT</figcaption>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="skills__direction">

                    <div className="skills__wrapResponsive">
                        <div className="skill">
                                <img src="/assets/img/icons/sass.png" alt="sass" style={{height: '72px'}} />
                                <figcaption>SASS</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/material-ui.png" alt="material-ui" style={{width: '70px'}} />
                                <figcaption>MATERIAL-UI</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/bootstrap.png" alt="bootstrap" style={{width: '109px'}} />
                                <figcaption>BOOTSTRAP</figcaption>
                        </div>
                    </div>

                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/react-bootstrap.png" alt="react-bootstrap" style={{height: '70px'}} />
                                <figcaption>REACT BOOTSTRAP</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/styled.png" alt="styled components"  style={{ height: '70px'}}/>
                            <figcaption>STYLED COMPONENTS</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/tailwindcss.png" alt="tailwind"  style={{ height: '45px', width: '155px', marginBottom: '3%', marginTop: '13%'}}/>
                            <figcaption>TAILWIND CSS</figcaption>
                        </div>
                    </div>
                </div>

            </div>

            <Separator />
            
            <GoTopButton />
            
        </>
    );
}
 
export default Skills;