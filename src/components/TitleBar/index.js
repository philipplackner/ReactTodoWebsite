import React, { useContext } from 'react'
import { TitleBarContext } from './TitleBarContext'
import { DarkModeToggle, LogoText, TitleBarContainer } from './TitleBarElements'

const TitleBar = () => {

    const [isDarkMode, setIsDarkMode] = useContext(TitleBarContext)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <>
           <TitleBarContainer>
                <LogoText>TODO</LogoText>   
                <DarkModeToggle 
                    src={isDarkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
                    onClick={toggleDarkMode} />
            </TitleBarContainer>    
        </>
    )
}

export default TitleBar
