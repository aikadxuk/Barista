import styled from "styled-components";

export const DoubleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 100px 7%;
  background: var(--brown);
  gap: 50px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;

export const VideoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 750px;
  max-height: 600px;
  width: 100%;
  max-width: 750px;
  border-radius: 20px;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, var(--orange));
    z-index: 1;
  }
`;

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoTextContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  max-width: 350px;
  bottom: 40px;
  left: 7%;
  z-index: 2;
`;

export const VideoText = styled.p`
  color: var(--white);
  font-size: clamp(1.2rem, 2.2vw, 2rem);
  font-weight: 600;

  @media (max-width: 940px) {
    font-size: clamp(1.7rem, 3.8vw, 3rem);
  }
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;

export const TextTitle = styled.h2`
  font-size: 3rem;
  color: var(--white);

  @media (max-width: 540px) {
    font-size: clamp(2rem, 9vw, 3rem);
  }
`;

export const TextParagraph = styled.p`
  color: var(--white);
  font-size: 1.4rem;
  max-width: 500px;

  @media (max-width: 540px) {
    /* font-size: 1.1rem; */
    font-size: clamp(1.1rem, 4vw, 1.3rem);
  }
`;

export const Tooplate = styled.span`
  color: var(--orange);
  margin-left: 7px;
`;
