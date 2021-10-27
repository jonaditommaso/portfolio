import { useSnackbar } from 'notistack';
import '../styles/footer.css'

export const Notistack = () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = (variant) => {
        enqueueSnackbar('Email copied! Redirecting to Gmail...', {variant});
    }
        
  
    return (
      <>
        <div onClick={() => handleClick('info')}>
            <img 
                src="/assets/img/gmail.png" 
                alt="gmail" 
                style={{width: '67px', height: '54px', marginTop: '10px', marginLeft: '6px'}} 
                loading="lazy" 
                decoding="async"
            />
        </div>
      </>
    );
}