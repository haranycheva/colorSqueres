import styled from "styled-components";

function getColor({ color }) {
  if (!color) {
    return "transparent";
  }
  return color;
}

export const ColorDiv = styled.div`
  width: 300px;
  height: 200px;
  border: 2px solid black;
  background-color: ${getColor};
`;

export const Wrapper = styled.div`
margin-top: 50px;
display: flex;
gap: 100px;
`;
export const Button = styled.button`
margin-top: 50px;
padding: 10px 20px;
`;


