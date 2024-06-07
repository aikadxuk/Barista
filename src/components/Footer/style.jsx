import styled from "styled-components";
import Background from "./../../assets/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg";

export const FooterContainer = styled.footer`
  background: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--orange));
    z-index: -1;
  }
`;

export const FooterHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
`;

export const FooterHeaderSubtitle = styled.span`
  color: var(--white);
  font-style: italic;
  font-size: 1.2rem;
`;

export const FooterHeaderTitle = styled.h2`
  color: var(--white);
  font-size: 3rem;
  font-weight: 600;
`;

export const FooterInputContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 400px));
  grid-template-rows: repeat(1, 100px) 300px;
  gap: 40px;

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(300px, 500px));
    grid-template-rows: repeat(2, 100px) 300px;
  }
`;

export const FooterInputName = styled.label`
  color: var(--white);
  font-size: 1.5rem;
  font-style: italic;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  &:nth-child(1) {
    grid-column: 1/2;

    @media (max-width: 650px) {
      grid-column: 1;
    }
  }
  &:nth-child(2) {
    grid-column: 2;

    @media (max-width: 650px) {
      grid-column: 1;
      grid-row: 2;
    }
  }

  &:nth-child(3) {
    grid-column: 1/3;
    grid-row: 2/3;

    @media (max-width: 650px) {
      grid-column: 1;
      grid-row: 3;
    }
  }
`;

export const FooterInput = styled.input`
  background: none;
  border: 1px solid var(--white);
  color: var(--white);
  height: 50px;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 600;
  padding-left: 10px;

  &:hover {
    background: var(--orange);
    transition: 0.4s;
  }

  &::placeholder {
    color: var(--white);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--white);
    color: var(--white);
  }
`;

export const FooterTextarea = styled.textarea`
  resize: none;
  background: none;
  border: 1px solid var(--white);
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 10px;
  height: 100%;

  &::placeholder {
    color: var(--white);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--white);
    color: var(--white);
  }

  &:hover {
    background: var(--orange);
    transition: 0.4s;
  }
`;

export const Button = styled.a`
  background: var(--light-brown);
  color: var(--white);
  font-weight: 600;
  text-decoration: none;
  margin-right: auto;
  padding: 15px 6%;
  border-radius: 25px;
  transition: 0.3s;

  &:hover {
    background: var(--brown);
  }
`;
