import styled from "styled-components";
import Background from "./../../assets/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg";

export const MenuContainer = styled.section`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
  justify-content: center;
  gap: 30px;
  padding: 3%;
`;

export const MenuCard = styled.article`
  --black: #00000070;
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  border-radius: 20px;
  padding: 30px;
  gap: 20px;
`;

export const MenuHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MenuSubtitle = styled.span`
  color: var(--white);
  font-style: italic;
  font-size: 1rem;
`;

export const MenuTitle = styled.h4`
  color: var(--white);
  font-size: 2rem;
  font-weight: 600;
`;

export const MenuItems = styled.section`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const MenuItem = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f070;
  gap: 13px;
  padding-bottom: 15px;
`;

export const MenuItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItemTitle = styled.h5`
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  @media (max-width: 540px) {
    /* font-size: 1.3rem; */
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`;

export const MenuItemPrice = styled.span`
  color: var(--light-brown);
  font-weight: 600;
  font-size: 1.2rem;

  @media (max-width: 540px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`;

export const MenuItemDiscount = styled.span`
  margin-right: 20px;
  color: var(--white);
  text-decoration: line-through;
  font-weight: 600;

  @media (max-width: 540px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`;

export const MenuItemLabel = styled.span`
  color: var(--white);
  font-size: 0.7rem;
  background: var(--light-brown);
  margin-left: 10px;
  padding: 3px 7px 3px 30px;
  border-radius: 5px;
  clip-path: polygon(23% 0%, 100% 1%, 100% 100%, 23% 100%, 0% 50%);
  
  @media (max-width: 540px){
      font-size: clamp(.6rem, 2vw,7rem);
      padding: 3px 5px 3px 20px;
  }
`;

export const MenuItemDescription = styled.p`
  color: var(--white);
  font-weight: 400;

  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`;
