import React, { useContext } from 'react'
import { TitleBarContext } from '../TitleBar/TitleBarContext'
import { BackgroundContainer } from './BackgroundElements'

const Background = (props) => {

    const [isDarkMode] = useContext(TitleBarContext)

    return (
        <BackgroundContainer isDarkMode={isDarkMode}>
            {props.children}
        </BackgroundContainer>
    )
}

export default Background
