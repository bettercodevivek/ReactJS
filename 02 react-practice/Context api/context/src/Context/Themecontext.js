import React, { Children, useState } from "react";

const Themecontext=React.createContext();

const Themeprovider = ({Children}) =>{

    const [theme,Settheme] = useState('light');
 
    const toggletheme = () =>{
        Settheme((prevtheme)=>(prevtheme === 'light' ? 'dark'  : 'light' ))
    };

    return(
        <Themecontext.Provider value={{theme,Settheme}}>
            {Children}
        </Themecontext.Provider>
    )

}

export {Themecontext,Themeprovider}