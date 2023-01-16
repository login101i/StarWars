import styled from 'styled-components';
const headerHeight = '80px';

export const HomePageContainer = styled.div`
  position: relative;
  height: calc(100vh - ${headerHeight});
  width: 100%;
  filter: ${(props) => props.isBlur && 'blur(5px)'};
  cursor: ${(props) => (props.isBlur ? 'pointer' : 'cursor')};
`;

export const CharacterName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid grey;
  margin: 10px;
  font-size: 18px;
  border-radius: 5px;
  background-color: #e9eef2;
  font-size: 25px;

  border-bottom: 1px solid grey;
  align-items: center;
  cursor: ${(props) => (props.isBlur ? 'cursor' : 'pointer')};
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

export const MovieListContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => (props.isShowMovieInfo ? '0px' : '-670px')};
  bottom: 0;
  height: calc(100vh- ${headerHeight});
  width: 570px;
  padding: 50px 40px;
  background-color: white;

  transition: 0.4s all ease-in-out;
  overflow-y: scroll;
  -webkit-box-shadow: -5px -1px 6px 0px rgba(66, 68, 90, 0.37);
  -moz-box-shadow: -5px -1px 6px 0px rgba(66, 68, 90, 0.37);
  box-shadow: -5px -1px 6px 0px rgba(66, 68, 90, 0.37);
  @media (max-width: 850px) {
    width: 400px;
  }
  @media (max-width: 550px) {
    width: 250px;
  }
  @media (max-width: 450px) {
    width: 150px;
  }
`;

export const LoadingDetails = styled.div`
  color: grey;
`;
