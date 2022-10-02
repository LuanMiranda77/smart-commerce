import { DefaultTheme } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import roxo from '../styles/themes/roxo';
import userPersistState from '../utils/userPersistState';


export class ThemeContext {

    static ThemeProvider = () => {

        const [theme, setTheme] = userPersistState<DefaultTheme>("@theme-local", light);

        const setDefaultTheme =() => {
            setTheme(
                theme.title === 'dark'? light :
                theme.title === 'light' ? dark : roxo
            )
        };
        return {theme, setDefaultTheme};
    } 
}


