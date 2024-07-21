import React,{useState} from "react";


const Mycontext=React.createContext();

const Myprovider = ({children}) => {
    const [Count,SetCount]=useState(0);

    // const increment = ()=>{
    //     SetCount((prevcount)=>(prevcount+1));
    // }

    // const decrement = ()=>{
    //     SetCount((prevcount)=>(prevcount-1));
    // }

    return(
        <Mycontext.Provider value={{Count,SetCount}}>
            {children}
        </Mycontext.Provider>
    )
}

export {Mycontext,Myprovider}