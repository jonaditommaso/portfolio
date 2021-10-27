import '../styles/about.css'

const MovingTextAbout = ({ text, movingClass }) => {
    return ( 
        <div className={movingClass}>
            {text}
        </div>
    );
}
 
export default MovingTextAbout;