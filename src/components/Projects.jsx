import Project from './Project';
import '../styles/projects.css';
import { AMAZON, COVID, POKEMON } from '../utils/descriptionProject';
import Separator from './Separator';

const Projects = () => {

   return ( 
         <div className="projects">
             <Project 
                image="/assets/img/amazon.png" 
                alt="amazon" 
                href="https://amazon-own-implementation-jonaditommaso.vercel.app/"
                description={AMAZON}
                codeDirection="https://github.com/jonaditommaso/amazon-clone"
             />
             <Project 
                image="/assets/img/covid.png"
                alt="covid"
                href="https://covid19-real-time-monitoring-jonaditommaso.vercel.app/"
                description={COVID}
                codeDirection="https://github.com/jonaditommaso/covid-19-tracker"
             />
             <Project
                image="/assets/img/pokemon.png"
                alt="pokemon"
                href="https://pokemon-search-game-jonaditommaso.vercel.app/"
                description={POKEMON}
                codeDirection="https://github.com/jonaditommaso/pokemon-search-game"
             />

             <Separator />
        </div>
   );
}
 
export default Projects;
