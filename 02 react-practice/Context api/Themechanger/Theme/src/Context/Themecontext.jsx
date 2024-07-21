import React, {useState, useContext} from "react";

const ThemeContext=React.createContext();

export const ThemeProvider =({children})=>{
    const [Theme,SetTheme] = useState('light');

    const ThemeToggler = ()=>{
     SetTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'))
    }

    return(
     <ThemeContext.Provider value={{Theme,ThemeToggler}}>
        {children}
     </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext); 