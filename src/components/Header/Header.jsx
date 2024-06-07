import {
  Bar,
  ButtonsContainer,
  FixedHeader,
  Hamburguer,
  KlangButton,
  KlangLink,
  KlangParagraph,
  KlangSubtitle,
  KlangTitle,
  Logo,
  LogoImg,
  LogoText,
  MainContainer,
  MainKlangAbsoluteCard,
  NavLinks,
  Navigation,
  Navmenu,
  SlideCard,
  SlideContainer,
} from "./style";
import Logoimage from "./../../assets/coffee-beans.png";
import WhiteButton from "./../Global/WhiteButton";
import { useState, useEffect } from "react";

function Header() {
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const [moveSlide, setMoveSlide] = useState(0);
  const openMenu = () => {
    setOpenMenuBar(!openMenuBar);
  };

  const totalCards = 3;
  useEffect(() => {
    const interval = setInterval(() => {
      setMoveSlide((prevMoveSlide) => {
        const newMoveSlide = prevMoveSlide + 100;
        return newMoveSlide >= totalCards * 100 ? 0 : newMoveSlide;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, totalCards);

  return (
    <MainContainer>
      <FixedHeader>
        <Logo>
          <LogoImg src={Logoimage}></LogoImg>
          <LogoText>Barista</LogoText>
        </Logo>
        <Navigation>
          <Navmenu openMenuBar={openMenuBar}>
            <NavLinks href="#">Home</NavLinks>
            <NavLinks href="#">About</NavLinks>
            <NavLinks href="#">Our Menu</NavLinks>
            <NavLinks href="#">Reviews</NavLinks>
            <NavLinks href="#">Contact</NavLinks>
          </Navmenu>
          <WhiteButton text="Reservation" />
          <Hamburguer onClick={openMenu}>
            <Bar openMenuBar={openMenuBar}></Bar>
            <Bar openMenuBar={openMenuBar}></Bar>
            <Bar openMenuBar={openMenuBar}></Bar>
          </Hamburguer>
        </Navigation>
      </FixedHeader>
      <SlideContainer moveSlide={moveSlide}>
        <SlideCard></SlideCard>
        <SlideCard></SlideCard>
        <SlideCard></SlideCard>
      </SlideContainer>
      <MainKlangAbsoluteCard>
        <KlangSubtitle href="#">WelcomeToBarista.co</KlangSubtitle>
        <KlangTitle>Cafe Klang</KlangTitle>
        <KlangParagraph>Your favorite coffee daily lives.</KlangParagraph>
        <ButtonsContainer>
          <KlangButton>
            <KlangLink href="#">Our Story</KlangLink>
          </KlangButton>
          <KlangButton>
            <KlangLink href="#">Check Menu</KlangLink>
          </KlangButton>
        </ButtonsContainer>
      </MainKlangAbsoluteCard>
    </MainContainer>
  );
}

export default Header;
