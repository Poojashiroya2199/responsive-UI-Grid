import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: blue;
  cursor: pointer;
  outline: none;
  min-width: 100px;
  padding: 5px;
  margin: 5px;
  border: none;
  border-radius: 5px;
`;

export const Input = styled.input`
  margin: 5px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 15px
`;

export const StyleWrapper = styled.div`
  width: 80%;
`;