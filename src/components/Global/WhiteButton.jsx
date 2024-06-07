import styled from "styled-components";

function WhiteButton({ text }) {
  const Button = styled.a`
    border: 2px solid var(--white);
    background: none;
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    padding: 7px 20px;
    border-radius: 20px;
    transition: 0.5s;
    text-decoration: none;

    &:hover {
      color: var(--orange);
      border: 2px solid var(--orange);
    }
  `;

  return <Button href="#">{text}</Button>;
}

export default WhiteButton;
