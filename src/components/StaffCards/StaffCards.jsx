import StaffInfos from "./Staff";
import {
  StaffAvatar,
  StaffCard,
  StaffCards,
  StaffImg,
  StaffInfo,
  StaffName,
  StaffParagraph,
  StaffTicket,
} from "./style";

function Staff() {
  return (
    <StaffCards>
      {StaffInfos.map((card) => (
        <StaffCard key={card.id}>
          <StaffImg src={card.img}></StaffImg>
          <StaffInfo>
            <StaffAvatar>
              <StaffName>{card.name}</StaffName>
              <StaffTicket>{card.ticket}</StaffTicket>
            </StaffAvatar>
            <StaffParagraph>{card.text}</StaffParagraph>
          </StaffInfo>
        </StaffCard>
      ))}
    </StaffCards>
  );
}

export default Staff;
