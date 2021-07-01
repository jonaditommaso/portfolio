import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="presentation">
        <div className="hi">
          Hello<span style={{color: '#ed6c87'}}>.</span>
        </div>

        <div className="name">
            I'm Jona<span style={{color: '#86d9f3'}}>.</span>
        </div>      
      </div>

      <div className="job">   
        {`<Frontend Developer />`}
      </div>


    </div>
  );
}

export default Home;