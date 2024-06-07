import {
  MenuCard,
  MenuContainer,
  MenuHeader,
  MenuItem,
  MenuItemDescription,
  MenuItemDiscount,
  MenuItemLabel,
  MenuItemName,
  MenuItemPrice,
  MenuItemTitle,
  MenuItems,
  MenuSubtitle,
  MenuTitle,
} from "./style";
import { ListTitle, List } from "./MenuList";

function Menu() {
  const doubleCard = Math.ceil(List.length / 2);
  const firstCard = List.slice(0, doubleCard);
  const secondCard = List.slice(doubleCard);
  return (
    <MenuContainer>
      {ListTitle.map((title, index) => (
        <MenuCard key={title.id}>
          <MenuHeader>
            <MenuSubtitle>{title.subtitle}</MenuSubtitle>
            <MenuTitle>{title.title}</MenuTitle>
          </MenuHeader>
          <MenuItems>
            {(index === 0 ? firstCard : secondCard).map((card) => (
              <MenuItem key={card.id}>
                <MenuItemName>
                  <MenuItemTitle>
                    {card.item}
                    {card.label && <MenuItemLabel>{card.label}</MenuItemLabel>}
                  </MenuItemTitle>
                  <MenuItemPrice>
                    {card.discount && (
                      <MenuItemDiscount>{card.discount}</MenuItemDiscount>
                    )}
                    {card.price}
                  </MenuItemPrice>
                </MenuItemName>
                <MenuItemDescription>{card.description}</MenuItemDescription>
              </MenuItem>
            ))}
          </MenuItems>
        </MenuCard>
      ))}
    </MenuContainer>
  );
}

export default Menu;
