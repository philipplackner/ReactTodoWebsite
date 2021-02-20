import styled from 'styled-components'

export const TodoListContainer = styled.ul`
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    box-sizing: content-box;
    scrollbar-width: none;
    background-color: ${({isDarkMode}) => isDarkMode ? 'hsl(235, 24%, 19%)' : 'white'};
    overflow-y: scroll;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const TodoListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 40px;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);
`