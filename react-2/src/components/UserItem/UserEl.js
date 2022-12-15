import styled from "styled-components";

export const User = styled.div`
  padding: 10px;
  border: 1px solid aqua;
  ${(props) => `color: ${props.color ?? "#000"}`}
`;
