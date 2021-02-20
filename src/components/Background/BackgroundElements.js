import styled from 'styled-components'

export const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 100%;
    height: 1000px;
    background-repeat: no-repeat;
    background-image: ${({isDarkMode}) => isDarkMode ? 'url("/images/bg-desktop-dark.jpg")' : 'url("/images/bg-desktop-light.jpg")'};
    background-color: ${({isDarkMode}) => isDarkMode ? 'hsl(235, 21%, 11%)' : 'white'};
    z-index: -1;

    @media screen and (min-width: 1430px) {
        background-size: 100%;
    }
`

export const MainContainer = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    margin: auto;
    
    @media screen and (max-width: 640px) {
        width: 90%;
    }
`