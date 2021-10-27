import Project from './Project';
import '../styles/projects.css';
import { AMAZON, COVID, POKEMON, JONES } from '../utils/descriptionProject';
import Separator from './Separator';

const Projects = () => {

   return ( 
      <>
         <div className="projects">
            <div className="projects__wrap">
               <Project
                  image="/assets/img/jones.png"
                  alt="jones"
                  href="https://jones-magazine.vercel.app/"
                  description={JONES}
                  codeDirection="https://github.com/jonaditommaso/jones-magazine"
                  title="Check the news, create conversations, and buy books. All in one!"
               />
               <Project 
                  image="/assets/img/amazon.png" 
                  alt="amazon" 
                  href="https://amazon-own-implementation-jonaditommaso.vercel.app/"
                  description={AMAZON}
                  codeDirection="https://github.com/jonaditommaso/amazon-clone"
                  title="Add products to the cart, buy them and verify your invoice!"
               />
            </div>
            
            <div className="projects__wrap">
               <Project
                  image="/assets/img/pokemon.png"
                  alt="pokemon"
                  href="https://pokemon-search-game-jonaditommaso.vercel.app/"
                  description={POKEMON}
                  codeDirection="https://github.com/jonaditommaso/pokemon-search-game"
                  title="Search all the Pokémon you want, fight with them and remember the old days!"
               />
               
               <Project 
                  image="/assets/img/covid.png"
                  alt="covid"
                  href="https://covid19-real-time-monitoring-jonaditommaso.vercel.app/"
                  description={COVID}
                  codeDirection="https://github.com/jonaditommaso/covid-19-tracker"
                  title="Find out about the cases, deaths and recovered from coronavirus in the world!"
               />
            </div>
             
        </div>
        <Separator />
      </>
   );
}
 
export default Projects;
