import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Rotator = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 18px;
`;
