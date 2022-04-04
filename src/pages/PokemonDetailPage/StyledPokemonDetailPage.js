import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";


export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  height: 25vh;
  background: ${backgroundCard};
`;

export const StatsContainer = styled.div`
  background: ${backgroundCard};
  align-self: center;
  height: 90%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;


export const TypesContainer = styled.div`
  background: ${backgroundCard};
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
  background: ${backgroundCard};
  align-self: center;
  height: 90%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const ButtonsContainer = styled.div`
  
  
  display: flex;
  align-items: baseline;
    

`;
