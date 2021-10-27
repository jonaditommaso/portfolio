import '../styles/footer.css';
import Snackbar from '../utils/Snackbar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Footer = () => {

    const messageAndGoGmail = (e) => {
        e.preventDefault()
        setTimeout(() => {
            window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');
        }, 1500);
    }

    return ( 
        <footer className="footer">
            <figure className="footer__images">
                
                <a href="https://github.com/jonaditommaso" target="_blank" rel="noreferrer">
                    <img 
                        src="/assets/img/github.png" 
                        alt="github" 
                        style={{width: '36px', height: '36px'}} 
                        loading="lazy" 
                        decoding="async"
                    />
                    
                </a>

                <a
                    onClick={e => messageAndGoGmail(e) }
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <CopyToClipboard text="jonaditommaso@gmail.com">
                        <Snackbar />
                    </CopyToClipboard>
                </a>
                
                <a href="https://www.linkedin.com/in/jonacampos" target="_blank" rel="noreferrer">
                    <img 
                        src="/assets/img/linkedin.png" 
                        alt="linkedin" 
                        style={{width: '57px', height: '57px'}}
                        loading="lazy" 
                        decoding="async"
                    />
                </a>
                
            </figure>
        </footer>
    );
}
 
export default Footer;