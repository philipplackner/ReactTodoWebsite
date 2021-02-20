import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: grid;
    height: auto;
    align-items: center;
    width: 100%;
    padding: 30px 20px;
    border-radius: 0 0 5px 5px;
    background-color: ${({isDarkMode}) => isDarkMode ? 'hsl(235, 24%, 19%)' : 'white'};
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'itemCount filter clearCompleted';

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50px 50px;
        grid-template-areas: 'itemCount clearCompleted'
                             'filter filter';
    }
`

export const FilterItemCountP = styled.p`
    text-align: left;
    font-size: 16px;
    color: hsl(236, 9%, 61%);
    grid-area: itemCount;
`

export const FilterClearCompletedP = styled.p`
  text-align: right;
  font-size: 16px;
  color: hsl(236, 9%, 61%);
  cursor: pointer;
  grid-area: clearCompleted;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: filter;

    @media screen and (max-width: 640px) {
        
    }
`

export const FilterSpan = styled.span`
    font-size: 16px;
    margin: 0 10px;
    cursor: pointer;
    color: ${({isSelected}) => isSelected ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'};
`