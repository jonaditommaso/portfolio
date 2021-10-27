import { SnackbarProvider } from 'notistack';
import { Notistack } from './Notistack';

const Snackbar = () => {
    return ( 
        <SnackbarProvider maxSnack={3} autoHideDuration={1400}>
            <Notistack/>
        </SnackbarProvider>
    );
}
 
export default Snackbar;