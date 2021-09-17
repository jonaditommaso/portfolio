import '../styles/home.css';
import PresentationCode from '../utils/PresentationCode';
import Separator from './Separator';

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__left">
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

        <div className="home__right">
          <PresentationCode />
        </div>
      </div>

    <div className="home__hr">
      <Separator />
    </div>
    

    </>
  );
}

export default Home;