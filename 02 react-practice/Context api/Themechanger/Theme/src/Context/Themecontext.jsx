import React from "react";

const ThemeContext=React.createContext();


const ThemeProvider = ({children}) => {

    const [Theme,SetTheme]=useState('light');

    return(
      <ThemeContext.Provider value={{Theme,SetTheme}} >
        {children}
      </ThemeContext.Provider>
    )
}



export {ThemeContext,ThemeProvider}