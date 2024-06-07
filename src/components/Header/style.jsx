import styled from "styled-components";
import img1 from "./../../assets/slides/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg";
import img2 from "./../../assets/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg";
import img3 from "./../../assets/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg";

export const MainContainer = styled.main`
  height: 100vh;
  position: relative;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideContainer = styled.section`
  display: flex;
  align-items: center;
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -${({ moveSlide }) => moveSlide}%;
  z-index: -10;
  transition: 0.5s;
`;

export const SlideCard = styled.article`
  &:nth-child(1) {
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }
  &:nth-child(2) {
    background-image: url(${img2});
    background-position: center;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  &:nth-child(3) {
    background-image: url(${img3});
    background-position: center;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

export const FixedHeader = styled.header`
  --black: #00000080;
  position: fixed;
  width: 97%;
  top: 20px;
  left: 1.4%;
  height: 70px;
  background-color: var(--black);
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  z-index: 11;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImg = styled.img`
  width: 50px;
  filter: invert(1);
`;

export const LogoText = styled.span`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Navigation = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 400px) {
    gap: 10px;
  }
`;

export const Navmenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  transition: 0.6s;

  @media (max-width: 900px) {
    display: flex;
    position: fixed;
    left: ${({ openMenuBar }) => (openMenuBar ? "0px" : "-100%")};
    top: 0;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 50%;
    background: var(--light-brown);
    z-index: 10000;
  }
`;

export const NavLinks = styled.a`
  color: var(--white);
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: var(--orange);
  }

  @media (max-width: 900px) {
    &:hover {
      color: var(--black);
    }
  }
`;

export const Hamburguer = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid var(--white);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const Bar = styled.nav`
  width: 40px;
  height: 3px;
  background: var(--white);
  border-radius: 5px;
  transition: 0.6s;

  &:nth-child(1) {
    position: ${({ openMenuBar }) => (openMenuBar ? "absolute" : "static")};
    transform: ${({ openMenuBar }) =>
      openMenuBar ? "rotate(45deg)" : "rotate(0deg)"};
  }
  &:nth-child(2) {
    position: ${({ openMenuBar }) => (openMenuBar ? "absolute" : "static")};
    opacity: ${({ openMenuBar }) => (openMenuBar ? "0" : "1")};
  }
  &:nth-child(3) {
    position: ${({ openMenuBar }) => (openMenuBar ? "absolute" : "static")};
    transform: ${({ openMenuBar }) =>
      openMenuBar ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`;

export const MainKlangAbsoluteCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  transform: rotate(0deg);
  z-index: -1;

  &::before {
    position: absolute;
    content: "";
    --black: #00000090;
    border-radius: 10px;
    background: var(--black);
    transform: rotate(45deg);
    width: 200px;
    height: 300px;
    z-index: -1;
  }
`;

export const KlangSubtitle = styled.a`
  color: var(--light-brown);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
`;

export const KlangTitle = styled.h1`
  color: var(--white);
  font-size: 4rem;
`;

export const KlangParagraph = styled.p`
  color: var(--white);
  font-size: 1.3rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const KlangButton = styled.button`
  background: none;
  border: 2px solid var(--white);
  padding: 10px 20px;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    background: var(--light-brown);
  }
`;

export const KlangLink = styled.a`
  color: var(--white);
  font-size: 1rem;
  text-decoration: none;
`;
