import { Fireworks } from 'fireworks-js/dist/react';

export const Congratulations = () => {
    const options = {
        speed: 5,
    }

    const style = {
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#1E1E1E',
        borderRadius: '15px'
    }

    return <Fireworks options={options} style={style} />
};