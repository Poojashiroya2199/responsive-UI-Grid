import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: grid;
  column-gap: 30px;
  grid-template-columns: 50% 50%;
`;

export const ContentTitle = styled.div`
  padding: 5px;
  margin: 5px;
  width: 80%;
  height: fit-content;
  border: 1px solid black;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.bold ? 'bold': 'normal'};
  font-style: ${props => props.italic ? 'italic': 'normal'};
  text-decoration: ${props => props.underLine ? 'underline' : 'none'};
`;