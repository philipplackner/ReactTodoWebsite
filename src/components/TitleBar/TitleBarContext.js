import React, {useState, createContext} from 'react'

export const TitleBarContext = createContext();

export const TitleBarProvider = props => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return(
        <TitleBarContext.Provider value={[isDarkMode, setIsDarkMode]}>
            {props.children}
        </TitleBarContext.Provider>
    );
}