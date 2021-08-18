import '../styles/presentationCode.css';
import TypewriterComponent from 'typewriter-effect';

const PresentationCode = () => {

    const CONSTRUCTOR = 'constructor';
    const CLASS = 'class ';
    const DEVELOPER = 'Developer';

    return ( 
        <div className="presentationCode">
            {/* <div> */}
                {/* <TypewriterComponent 
                    onInit={typewriter => {
                        typewriter.typeString('<span style="color: #3676BB">class </span>')
                        .typeString(' <span style="color: #45B791">Developer </span>')
                        .typeString(' <span style="color: #B078AA">{</span>')
                        .start()  
                    }} */}

                    {/* // options={{ */}
                    {/* //     cursor: null */}
                    {/* // }} */}
                    
                {/* // /> */}
             {/* </div> */}
            {/* <div> */}
                {/* <TypewriterComponent 
                    onInit={typewriter => {
                        typewriter.typeString('<span style="color: #3676BB">constructor</span>')
                        .typeString('<span style="color: #62baf8, marginLeft: 15px">(name<span style="color: white">,</span> technology<span style="color: white">,</span> hired) {</span>')
                        // .typeString(' <span style="color: #B078AA">{</span>')
                        .start()  
                        
                    }}
                    
                /> */}
            

            <div><span style={{color: '#3676BB'}}>{CLASS}</span> <span style={{color: '#45B791'}}>{DEVELOPER}</span> <span style={{color: '#B078AA'}}>{`{`}</span></div>
            <div style={{color: '#62baf8', marginLeft: '15px'}}><span style={{color: '#3676BB'}}>{CONSTRUCTOR}</span> (name<span style={{color: 'white'}}>,</span> technology<span style={{color: 'white'}}>,</span> hired) {`{`}</div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>name <span style={{color: 'white'}}>=</span> name<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>technology <span style={{color: 'white'}}>=</span> technology<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>hired <span style={{color: 'white'}}>=</span> hired<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '15px'}}>{`}`}<span style={{color: 'white'}}>;</span></div>
            <div><span style={{color: '#B078AA'}}>{`}`}</span><span>;</span></div>

            <br />

            <div className="finalCode">
                {/* <span style={{color: '#3676BB'}}>const</span> <span style={{color: '#289df1'}}>hired</span> = <span style={{color: '#3676BB'}}>new </span><span style={{color: '#45B791'}}>{DEVELOPER}</span> <span style={{color: '#B078AA'}}>{`(`}</span><span style={{color: '#AB6647'}}>"Jonathan"</span>, <span style={{color: '#AB6647'}}>"Javascript"</span>, <span style={{color: '#3676BB'}}>true</span><span style={{color: '#B078AA'}}>)</span>; */}
                <TypewriterComponent 
                    onInit={tw => {
                        tw.typeString('<span style="color: #3676BB">const </span><span style="color: #289df1">hired </span> = <span style="color: #3676BB">new </span><span style="color: #45B791">Developer </span><span style="color: #B078AA">(</span><span style="color: #AB6647">"Jonathan"</span>, <span style="color: #AB6647">"Javascript"</span>, ')
                        .start() 
                    }}

                    options={{
                        delay: 70
                    }}
                />
                <input className="hiredEntry"/>
            </div>
        </div>
    );
}
 
export default PresentationCode;