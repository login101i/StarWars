import styled from 'styled-components';

export const MovieContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 15px;
  margin-bottom: 40px;
  border-bottom: 2px solid grey;

`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0px 5px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Description = styled.div`
  font-size: 18px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
