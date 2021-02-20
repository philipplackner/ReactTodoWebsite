import styled from 'styled-components'

export const TodoItemContainer = styled.li`
    display: flex;
    padding: 40px 20px;
    width: 100%;
    height: 80px;
    border-radius: 5px;
    background-color: ${({isDarkMode}) => isDarkMode ? 'hsl(235, 24%, 19%)' : 'white'};
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({isDarkMode}) => isDarkMode ? 'solid 1px hsl(235, 21%, 11%)' : 'solid 1px hsl(236, 33%, 92%)'};
`

export const TodoItemCheckBox = styled.label`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  cursor: pointer;
  background: ${({ isChecked, isDarkMode }) => {
    if (isChecked) {
      return "linear-gradient(-225deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
    } else {
      return isDarkMode ? "hsl(235, 24%, 19%)" : "white";
    }
  }};
  position: relative;
`;

export const TodoItemCheckBoxInput = styled.input`
    position: absolute;
    opacity: 1;
    cursor: pointer;
    height: 0;
    width: 0;
`

export const TodoCheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: ${({ isChecked, isDarkMode }) => {
    if (isChecked) {
      return "transparent";
    } else {
      return isDarkMode ? "hsl(235, 24%, 19%)" : "white";
    }
  }};
    border-radius: 50%;
    border: ${({isDarkMode}) => isDarkMode ? 'solid 1px hsl(235, 21%, 11%)' : 'solid 1px hsl(236, 33%, 92%)'};
    background-image: ${({isChecked}) => isChecked ? "url('/images/icon-check.svg')" : 'none'};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
    background-color: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

    &:hover {
        border-color: hsl(230, 100%, 67%);
        border-width: 2px;
    }
`

export const TodoItemText = styled.span`
  font-size: 24px;
  color: ${({ isChecked, isDarkMode }) => {
    if (isDarkMode) {
      return isChecked ? "hsl(235, 19%, 35%)" : "hsl(233, 11%, 84%)";
    } else {
      return isChecked ? "hsl(233, 11%, 84%)" : "hsl(235, 19%, 35%)";
    }
  }};
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  flex-basis: 80%;
  cursor: pointer;
`;

export const TodoItemCloseButton = styled.img`
    opacity: ${({isMouseOver}) => isMouseOver ? '1' : '0'};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
`