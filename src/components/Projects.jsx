import Project from './Project';
import '../styles/projects.css';
import { AMAZON, COVID, POKEMON } from '../utils/descriptionProject';

const Projects = () => {
    return ( 
         <div className="projects">
             <Project 
                image="/assets/img/amazon.png" 
                alt="amazon" 
                href="https://amazon-own-implementation-jonaditommaso.vercel.app/"
                description={AMAZON}
             />
             <Project 
                image="/assets/img/covid.png"
                alt="covid"
                href="https://covid19-real-time-monitoring-jonaditommaso.vercel.app/"
                description={COVID}
             />
             <Project
                image="/assets/img/pokemon.png"
                alt="pokemon"
                href="https://pokemon-search-game-jonaditommaso.vercel.app/"
                description={POKEMON}
             />
        </div>
    );
}
 
export default Projects;
