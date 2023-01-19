import styled from "styled-components";

export const Loader = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  border-top: 1px solid blueviolet;
  border-right: 1px solid blueviolet;

  animation: loader 1s ease-in-out;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
