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
                            <img src="/assets/img/icons/react.png" alt="react" style={{width: '95px', height: '70px'}}/>
                            <figcaption>REACT</figcaption>
                        </div>

                        <div className="skill">
                            <img src="/assets/img/icons/redux.png" alt="redux" style={{width:'70px', height: '70px'}}/>
                            <figcaption>REDUX</figcaption>
                        </div>
                    </div>

                   
                </div>

                <Separator />

                <div className="skills__direction">
                    <div className="skills__wrapResponsive">
                        <div className="skill">
                            <img src="/assets/img/icons/mongodb.png" alt="mongodb" style={{width: '100px', marginBottom: '7%', marginTop: '20%'}}/>
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
                            <img src="/assets/img/icons/typescript.png" alt="typescript" style={{width:'70px', height: '70px'}}/>
                            <figcaption>TYPESCRIPT</figcaption>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="skills__direction">
                    {/* <div className="skills__wrap"> */}
                    <div className="skills__wrapResponsive">

<div className="wrapSkill">
                        <div className="skill">
                            <img src="/assets/img/icons/sql.png" alt="sql" style={{width: '110px', marginTop: '15%'}}/>
                            <figcaption>SQL</figcaption>
                        </div>
                        </div>
                        <div className="wrapSkill">
                        <div className="skill">
                            <img src="/assets/img/icons/mysql.png" alt="mysql" style={{width: '100px', height: '70px'}}/>
                            <figcaption>MYSQL</figcaption>
                        </div></div>

                        <div className="skill">
                            <img src="/assets/img/icons/python.png" alt="python" style={{width: '80px'}}/>
                            <figcaption>PYTHON</figcaption>
                        </div>
                    </div>

                    <div className="skills__wrapResponsive">

                        <div className="skill">
                            <img src="/assets/img/icons/firebase.png" alt="firebase" style={{width:'70px', height: '70px'}}/>
                            <figcaption>FIREBASE</figcaption>
                        </div>

                    {/* <div className="skill">
                        <img src="/assets/img/icons/django.png" alt="django" style={{width: '100px', height: '70px'}}/>
                        <figcaption>DJANGO</figcaption>
                    </div> */}

                        <div className="skill">
                            <img src="/assets/img/icons/next.png" alt="next" style={{width: '110px', height: '70px'}}/>
                            <figcaption>NEXT JS</figcaption>
                        </div>

                    {/* <div className="skill">
                        <img src="/assets/img/icons/git.png" alt="git"  style={{ height: '70px'}}/>
                        <figcaption>GIT</figcaption>
                    </div> */}

                    {/* </div> */}
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
                            <img src="/assets/img/icons/git.png" alt="git"  style={{ height: '70px'}}/>
                            <figcaption>GIT</figcaption>
                        </div>
                    </div>
                    {/* <div className="skill">
                        <img src="/assets/img/icons/react-bootstrap.png" alt="react-bootstrap" style={{height: '70px'}} />
                            <figcaption>REACT BOOTSTRAP</figcaption>
                    </div> */}
                </div>

                    
                        
                   
                
                        
                   
                     
                    

                    {/* </div>
                    <figure>
                        <img src="/assets/img/icons/html.png" alt="html" style={{width: '80px', height: '50px'}}/>
                        <figcaption>HTML</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/css.png" alt="css" style={{width: '80px', height: '80px', marginLeft: '20px'}}/>
                        <figcaption>CSS</figcaption>
                    </figure>
                
                    <figure>
                        <img src="/assets/img/icons/javascript.png" alt="javascript" style={{width: '80px', height: '80px'}}/>
                        <figcaption>JAVASCRIPT</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/icons/react.png" alt="react" style={{width: '80px', height: '80px'}}/>
                        <figcaption>REACT</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/redux.png" alt="redux" style={{marginRight: '20px'}}/>
                        <figcaption>REDUX</figcaption>
                    </figure>
                </div>
            </div> */}

            {/* <Separator/>

            <div className="skills">
                <div className="skills__direction">
                    
                </div>
                <div className="skills__direction">
                    
                        
                    <figure>
                        <img src="/assets/img/icons/next.png" alt="next" style={{width: '170px'}}/>
                        <figcaption>NEXT JS</figcaption>
                    </figure>
                </div>   
            </div> */}

            {/* <Separator /> */}

            {/* <div className="skills">
                <div className="skills__direction">
                    <figure>
                        <img src="/assets/img/icons/mongodb.png" alt="mongodb" style={{width: '80px', height: '80px'}}/>
                        <figcaption>MONGO DB</figcaption>
                    </figure>
                        
                    <figure>
                        <img src="/assets/img/icons/mongoose.png" alt="mongoose" style={{width: '80px', height: '80px'}}/>
                        <figcaption>MONGOOSE</figcaption>
                    </figure>
                </div>
                <div className="skills__direction">
                    <figure>
                        <img src="/assets/img/icons/express.png" alt="express" style={{width: '80px', height: '80px'}}/>
                        <figcaption>EXPRESS</figcaption>
                    </figure>
                    
                    <figure>
                        <img src="/assets/img/icons/node.png" alt="node" style={{width: '80px', height: '80px'}}/>
                        <figcaption>NODE JS</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/typescript.png" alt="typescript" style={{marginRight: '20px'}}/>
                        <figcaption>TYPESCRIPT</figcaption>
                    </figure>
                </div>
            </div>

            <Separator />
            
            <div className="skills">
                <div className="skills__direction">
                    <figure>
                        <img src="/assets/img/icons/python.png" alt="python" style={{width: '140px'}}/>
                        <figcaption>PYTHON</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/django.png" alt="django" style={{width: '180px', height: '110px'}}/>
                        <figcaption>DJANGO</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/next.png" alt="next" style={{width: '170px'}}/>
                        <figcaption>NEXT JS</figcaption>
                    </figure>
                </div>

                
                <div className="skills__direction">
                    <figure>
                        <img src="/assets/img/icons/git.png" alt="git" style={{height: '110px'}} />
                        <figcaption>GIT</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/firebase.png" alt="firebase"/>
                        <figcaption>FIREBASE</figcaption>
                    </figure>
                </div>
            </div>

            <Separator />

            <div className="skills">
                <div className="skills__direction">
                    <figure>
                        <img src="/assets/img/icons/sass.png" alt="sass" style={{height: '110px'}} />
                        <figcaption>SASS</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/material-ui.png" alt="material-ui" style={{height: '110px', width: '130px'}} />
                        <figcaption>MATERIAL-UI</figcaption>
                    </figure>
                </div>
                <div className="skills__direction">
                    <figure>
                        <img src="/assets/img/icons/bootstrap.png" alt="bootstrap" style={{height: '110px',  width: '150px'}} />
                        <figcaption>BOOTSTRAP</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/img/icons/react-bootstrap.png" alt="react-bootstrap" style={{height: '110px'}} />
                        <figcaption>REACT BOOTSTRAP</figcaption>
                    </figure>
                </div> */}
            </div>

            <Separator />
            
            <GoTopButton />
            
        </>
    );
}
 
export default Skills;