import styled from "styled-components";
import BackgroundImg from "./../../assets/mid-section-waitress-wiping-espresso-machine-with-napkin-cafa-c.jpg";

export const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: var(--brown);
  padding: 50px 0;
`;

export const TestimonialsMainHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TestimonialsSubtitle = styled.span`
  color: var(--white);
  font-style: italic;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const TestimonialsTitle = styled.h2`
  color: var(--white);
  font-size: 3rem;
  font-weight: 600;
`;

export const TestimonialCards = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(300px, 500px));
  grid-template-rows: repeat(3, 250px);
  gap: 50px 100px;
  padding: 20px 3% 0 15%;

  @media (max-width: 860px) {
    grid-template-columns: repeat(1, minmax(300px, 500px));
  }
`;

export const TestimonialCard = styled.article`
  display: flex;
  flex-direction: column;
  border: 3px solid var(--white);
  border-radius: 15px;
  position: relative;

  &:nth-child(1) {
    grid-column: 1;
    grid-row: 1;

    &::before {
      position: absolute;
      content: "";
      width: 5px;
      height: 870px;
      background: var(--white);
      right: -55px;

      @media (max-width: 840px) {
        left: -11%;
      }

      @media (max-width: 540px) {
        left: -55px;
      }

      @media (max-width: 450px) {
        left: -38px;
      }
    }

    &::after {
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      background: var(--white);
      border-radius: 50%;
      right: -73px;
      top: 10px;
      border: 5px solid var(--brown);

      @media (max-width: 840px) {
        left: -72px;
      }
      @media (max-width: 450px) {
        left: -55px;
      }
    }
  }
  &:nth-child(2) {
    grid-column: 2;
    grid-row: 2;
    @media (max-width: 840px) {
      grid-column: 1;
      grid-row: 2;
    }

    &::after {
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      background: var(--white);
      border-radius: 50%;
      left: -73px;
      top: 10px;
      border: 5px solid var(--brown);

      @media (max-width: 450px) {
        left: -55px;
      }
    }
  }
  &:nth-child(3) {
    grid-column: 1;
    grid-row: 3;

    &::after {
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      background: var(--white);
      border-radius: 50%;
      right: -73px;
      top: 10px;
      border: 5px solid var(--brown);

      @media (max-width: 840px) {
        left: -73px;
      }

      @media (max-width: 450px) {
        left: -55px;
      }
    }
  }
`;

export const TestimonialHeader = styled.header`
  background-image: url(${BackgroundImg});
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0 20px 20px;
  border-radius: 12px 12px 0px 0px;
`;

export const TestimonialHeaderAvatarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TestimonialAvatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TestimonialTitle = styled.h4`
  color: var(--white);
  font-weight: 600;
  font-size: 1.5rem;
`;

export const TestimonialSubtitle = styled.span`
  color: var(--white);
  font-size: 1rem;
  font-style: italic;
`;

export const TestimonialReview = styled.section`
  background: var(--light-brown);
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border-radius: 0px 0px 12px 12px;
`;

export const TestimonialText = styled.p`
  color: var(--white);
  font-style: italic;
  font-size: 1.2rem;
  max-width: 450px;
  @media (max-width: 840px) {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
  }
`;

export const TestimonialRating = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TestimonialRate = styled.span`
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
`;

export const TestimonialStar = styled.i`
  color: var(--white);
  font-size: 1rem;
`;
