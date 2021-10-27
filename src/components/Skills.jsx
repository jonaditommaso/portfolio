import React, { useEffect, useState } from 'react';
import '../styles/skills.css';
import GoTopButton from './GoTopButton';
import Separator from './Separator';
import Skill from './Skill';
import Button from '@material-ui/core/Button';
import { BsInfoCircle } from 'react-icons/bs';
import Modal from './Modal';

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
    }, [showAll]);

    const renderButton = () =>  <Button onClick={()=>setShowModal(false)}>Got it</Button>

    return ( 
        <>
            <div className="indications">
                <Button 
                    size="small" 
                    variant="outlined"
                    onClick={()=> setShowAll(!showAll)} 
                    
                >
                    {!showAll ? 'I got tired, I want to see all of them!' : 'Restore crystals'}
                </Button>
                <BsInfoCircle onClick={() => setShowModal(true)} size={23} style={{cursor: 'pointer'}} />

                <Modal
                    title="Hit the crystals to see the skills!"
                    actions={renderButton()}
                    open={showModal}
                />
            </div>
            
            <div className="skills">
                <div className="skills__direction">

                    <div className="skills__wrapResponsive">
                        <Skill icon="html" width="80px" figcaption="HTML" showSkills={showAll} />
                        <Skill icon="css" width="70px" height="70px" figcaption="CSS" showSkills={showAll} />
                        <Skill icon="javascript" width="120px" height="70px" figcaption="JAVASCRIPT" showSkills={showAll} />
                    </div>

                    <div className="skills__wrapResponsive">
                        <Skill icon="react" figcaption="REACT" width="105px" height="70px" showSkills={showAll} />
                        <Skill icon="redux" figcaption="REDUX" width="70px" height="70px" showSkills={showAll} />
                        <Skill icon="typescript" figcaption="TYPESCRIPT" width="70px" height="70px" showSkills={showAll} />
                    </div>
                </div>

                <Separator />

                <div className="skills__direction">
                    <div className="skills__wrapResponsive">
                        <Skill icon="mongodb" figcaption="MONGO DB" width="100px" height="50px" marginB="4%" marginT="10%" showSkills={showAll} />
                        <Skill icon="mongoose" figcaption="MONGOOSE" width="120px" height="70px" showSkills={showAll} />
                        <Skill icon="express" figcaption="EXPRESS" width="110px" height="65px"  marginB="5%" marginT="0%" showSkills={showAll} />
                    </div>

                    <div className="skills__wrapResponsive">
                        <Skill icon="node" figcaption="NODE JS" width="105px" height="70px" showSkills={showAll} />
                        <Skill icon="sql" figcaption="SQL" width="110px" marginT="14%" showSkills={showAll} />
                        <Skill icon="mysql" figcaption="MYSQL" width="100px" height="70px" showSkills={showAll} />
                    </div>
                </div>

                <Separator />

                <div className="skills__direction">

                    <div className="skills__wrapResponsive">
                        <Skill icon="jest" figcaption="JEST" width="85px" height="75px" showSkills={showAll} />
                        <Skill icon="next" figcaption="NEXT JS" width="110px" height="70px" showSkills={showAll} />
                        <Skill icon="graphql" figcaption="GRAPHQL" width="70px" height="70px" showSkills={showAll} />
                    </div>

                    <div className="skills__wrapResponsive">
                        <Skill icon="firebase" figcaption="FIREBASE" width="70px" height="70px" showSkills={showAll} />
                        <Skill icon="python" figcaption="PYTHON" width="80px" showSkills={showAll} />
                        <Skill icon="git" figcaption="GIT" height="70px" showSkills={showAll} />
                    </div>
                </div>

                <Separator />

                <div className="skills__direction">

                    <div className="skills__wrapResponsive">
                        <Skill icon="sass" figcaption="SASS" height="72px" showSkills={showAll} />
                        <Skill icon="material-ui" figcaption="MATERIAL-UI" width="70px" showSkills={showAll} />
                        <Skill icon="bootstrap" figcaption="BOOTSTRAP" width="109px" showSkills={showAll} />
                    </div>

                    <div className="skills__wrapResponsive">
                        <Skill icon="react-bootstrap" figcaption="REACT BOOTSTRAP" height="70px" showSkills={showAll} />
                        <Skill icon="styled" figcaption="STYLED COMPONENTS" height="70px" showSkills={showAll} />
                        <Skill icon="tailwindcss" figcaption="TAILWIND CSS" width="155px" height="45px" marginB="3%" marginT="13%" showSkills={showAll} />
                    </div>
                </div>

            </div>

            <Separator />
            
            <GoTopButton />
            
        </>
    );
}
 
export default Skills;