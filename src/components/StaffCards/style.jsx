import styled from "styled-components";

export const StaffCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  /* grid-template-rows: repeat(4, 1fr); */
  gap: 20px;
  padding: 70px 7%;
  background: var(--light-brown);
  /* height: 80vh; */
`;

export const StaffCard = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  height: 500px;
  /* max-width: 100%; */

  &::before {
    position: absolute;
    content: "";
    background: linear-gradient(to bottom, transparent 10%, var(--orange));
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;

export const StaffImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StaffInfo = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  bottom: 20px;
  /* left: 10%; */
  padding: 0 8%;
  z-index: 10;
`;

export const StaffAvatar = styled.div`
  display: flex;
  align-items: center;
  /* gap: 20px; */
`;

export const StaffName = styled.h3`
  color: var(--white);
  font-size: 2.1rem;
  font-weight: 600;
  padding-right: 7%;
`;

export const StaffTicket = styled.span`
  background: var(--light-brown);
  padding: 5px 10px 5px 15px;
  color: var(--white);
  font-size: 0.9rem;
  border-radius: 5px;
  font-weight: 600;
  clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);
`;

export const StaffParagraph = styled.p`
  color: var(--white);
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 25px;
  max-width: 200px;
`;
