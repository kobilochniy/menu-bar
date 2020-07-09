import React, {useEffect} from 'react';
import {Menu} from '../types/Menu';

const useNodeService = () => {
    const [state, setState] = React.useState<Menu[]>([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kobilochniy/menu-bar/master/config/menu.json')
            .then(response => response.json())
            .then(response => setState(response))
            .catch(error => setState([]));
    }, []);

    return state;
};

export default useNodeService;
