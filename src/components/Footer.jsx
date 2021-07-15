import '../styles/footer.css';

const Footer = () => {
    return ( 
            <footer className="footer">
                <figure className="footer__images">
                    
                    <a href="https://github.com/jonaditommaso" target="_blank" rel="noreferrer">
                        <img src="/assets/img/github.png" alt="github" style={{width: '35px', height: '35px'}} />
                    </a>

                    <a href="mailto:jonaditommaso@gmail.com" target="_blank" rel="noreferrer">
                        <img src="/assets/img/gmail.png" alt="gmail" style={{width: '75px', height: '75px'}}/>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/jonacampos" target="_blank" rel="noreferrer">
                        <img src="/assets/img/linkedin.png" alt="linkedin" style={{width: '55px', height: '55px'}}/>
                    </a>
                    
                </figure>
            </footer>
    );
}
 
export default Footer;