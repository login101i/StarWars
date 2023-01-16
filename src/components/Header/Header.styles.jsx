import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #2d8de0;
  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 3px 3px 0px rgba(45, 141, 244, 0.52);
  -moz-box-shadow: 0px 3px 3px 0px rgba(45, 141, 244, 0.52);
  box-shadow: 0px 3px 3px 0px rgba(45, 141, 244, 0.52);
`;

export const HeaderInput = styled.input`
  width: 250px;
  height: 40px;
  padding: 0px 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #0c66b3;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  outline: none;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;

  &:hover {
    font-size: 14px;
  }
`;
