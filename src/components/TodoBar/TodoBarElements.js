import styled from 'styled-components'

export const TodoBarContainer = styled.div`
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);
    height: 80px;
    width: 100%;
    margin-top: 40px;
    background-color: ${({isDarkMode}) => isDarkMode ? 'hsl(235, 24%, 19%)' : 'white'};
    padding: 20px;
`

export const TodoCircle = styled.div`
    justify-self: center;
    align-self: center;
    width: 30px;
    height: 30px;
    border: ${({isDarkMode}) => isDarkMode ? 'solid 1px hsl(205, 24%, 19%)' : 'solid 1px hsl(236, 33%, 92%)'};
    border-radius: 100px;
`

export const TodoTextField = styled.input`
    flex-basis: 100%;
    border: none;
    margin-left: 20px;
    font-size: 1.7em;
    background-color: ${({isDarkMode}) => isDarkMode ? 'hsl(235, 24%, 19%)' : 'white'};
    color: ${({isDarkMode}) => isDarkMode ? 'white' : 'hsl(235, 19%, 35%)'};
    caret-color: hsl(220, 98%, 61%);

    &:focus {
        outline: none;
    }
`