import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, bgImage, description, leftBtnTxt, rightBtnTxt }) {
  return (
    <>
      <Wrap bgImages={bgImage}>
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Buttonss>
          <Fade bottom>
            <ButtonsGroup>
              <LeftButton>{leftBtnTxt}</LeftButton>

              {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
            </ButtonsGroup>
            <ImageArrow src="/tesla-clone-image/down-arrow.svg" />
          </Fade>
        </Buttonss>
      </Wrap>
    </>
  );
}

export default Section;

const Wrap = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background:${(props) => `url("/tesla-clone-image/${props.bgImages}")`}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image:${(props) => `url("/tesla-clone-image/${props.bgImages}")`}
  
`;

const Buttonss = styled.div`
  display: flex;

  flex-direction: column;
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  color: white;
  border-radius: 100px;
  margin: 8px;
  width: 256px;
  height: 40px;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
`;

const ImageArrow = styled.img`
  height: 40px;
  animation: animate infinite 1.5s;
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;
