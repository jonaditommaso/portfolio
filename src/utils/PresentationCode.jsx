import React, { useEffect, useRef, useState } from 'react';
import '../styles/presentationCode.css';
import TypewriterComponent from 'typewriter-effect';
import { Congratulations } from './Congratulations';
import { CONSTRUCTOR, CLASS, DEVELOPER, WRITE } from '../utils/wordsToPresentationCode.js';
import Swal from 'sweetalert2'

const PresentationCode = () => {

    const [param, setParam] = useState('');

    const writeParam = useRef(null);

    useEffect(() => {
        writeParam.current.focus();
    }, []);


    const resultCode = () => {
        if(param.includes('true')) {
            return <Congratulations />
        }
        else if (param === 'false') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error has occurred, please try again.',
                confirmButtonColor: '#86d9f3',
                backdrop: false
            }).then((result) => {
                if (result.value) {
                    setParam('');
                }
            }); 
        }
    }

    return ( 
        <div className="presentationCode">

            <div><span style={{color: '#3676BB'}}>{CLASS}</span> <span style={{color: '#45B791'}}>{DEVELOPER}</span> <span style={{color: '#B078AA'}}>{`{`}</span></div>
            <div style={{color: '#62baf8', marginLeft: '15px'}}><span style={{color: '#3676BB'}}>{CONSTRUCTOR}</span> (name<span style={{color: 'white'}}>,</span> technology<span style={{color: 'white'}}>,</span> hired) {`{`}</div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>name <span style={{color: 'white'}}>=</span> name<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>technology <span style={{color: 'white'}}>=</span> technology<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>hired <span style={{color: 'white'}}>=</span> hired<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '15px'}}>{`}`}<span style={{color: 'white'}}>;</span></div>
            <div><span style={{color: '#B078AA'}}>{`}`}</span><span>;</span></div>

            <br />

            <div className="finalCode">
                 <TypewriterComponent 
                    onInit={tw => {
                        tw.typeString(WRITE)
                        .start() 
                    }}

                    options={{
                        delay: 70,
                        cursor: null
                    }}
                />
                <input 
                    className="hiredEntry" 
                    maxLength="7" 
                    ref={writeParam} 
                    value={param}
                    onChange={e => setParam(e.target.value)} 
                /> 
                
            </div>
            {resultCode()}
        </div>
    );
}
 
export default PresentationCode;