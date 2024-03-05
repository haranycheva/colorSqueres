import styled from "styled-components";

function getColor({ bgColor }) {
  if (!bgColor) {
    return "transparent";
  }
  return bgColor;
}

function getSelected({ selected }) {
  if (!selected) {
    return "transparent";
  }
  return "2px solid black";
}

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  width: 800px;
  margin-left: 100px;
`;

export const Item = styled.li`
  width: 100px;
  height: 70px;
  background-color: ${getColor};
  border: ${getSelected};
`;
