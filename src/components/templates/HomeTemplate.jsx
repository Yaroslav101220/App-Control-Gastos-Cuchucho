import styled from "styled-components";
import { Carousel, Btnsave, v } from "../../index";

export function HomeTemplate() {
  return (
    <Main>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Title>
          ¡Bienvenido a tu nuevo espacio para poner en orden tus finanzas!
          <br /> 😎
        </Title>
        <SubText>
          Cuchucho nació para que tu plata no desaparezca como por arte de
          magia. Anota, revisa y ahorra... ¡con estilo!
          <br />
          Pronto armaremos un curso genial en nuestro canal de YouTube. Si
          quieres aprender y pasarla bien, suscríbete y no te lo pierdas. ¡Tu
          apoyo hace que Cuchucho siga creciendo!❤️
          <br /> MUCHAS GRACIAS POR APOYAR ESTE PROYECTO
        </SubText>
        <ContainerAutor>
          <div className="contentImg">
            <img src="/mifoto.jpeg" />
          </div>
          <div className="contentDescripcion">
            <b>Ing. Yaroslav Sanabria</b>
            <span>"Todo gran código nace de un “Hola Mundo”."</span>
          </div>
        </ContainerAutor>
        <ButtonContainer>
          <Btnsave
            url="https://www.youtube.com/channel/UCkKz0HqT8dgZRxAoBJAD6kA"
            titulo="Visita nuestro Canal"
            bgcolor="#fc6a6ad6"
            icono={<v.iconoyout />}
          />
          <Btnsave
            url="https://mi-portafolio-yaro.vercel.app/"
            titulo="Mi Portafolio"
            bgcolor="#a86335f4"
            icono={<v.iconocorona />}
          />
        </ButtonContainer>
      </Container>
    </Main>
  );
}
const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #8e8c86;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const ContainerAutor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .contentImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .contentDescripcion {
    display: flex;
    flex-direction: column;
    b {
      color: ${(props) => props.theme.text};
    }
    span {
      color: #666666;
      /* Modo oscuro */
      @media (prefers-color-scheme: dark) {
        color: #cccccc;
      }
    }
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: center;
  justify-content: center;
  display: flex;
  gap: 20px;
  @media (max-width: 64em) {
    width: 100%;
  }
`;
