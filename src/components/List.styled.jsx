import styled from "styled-components";

function getColor({color}){
    if(!color){
        return "transparent"
    }
    return color
}

function getSelected({selected}){
    if(!selected){
        return "transparent"
    }
    return "2px solid black"
}

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 50px;
width: 500px;
margin-left: 100px;
`;

export const Item = styled.li`
width: 100px;
height: 70px;
background-color: ${getColor};
border: ${getSelected}
`;