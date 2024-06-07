import {
  Button,
  FooterContainer,
  FooterHeader,
  FooterHeaderSubtitle,
  FooterHeaderTitle,
  FooterInput,
  FooterInputContainer,
  FooterInputName,
  FooterTextarea,
} from "./style";

function Footer() {
  return (
    <FooterContainer>
      <FooterHeader>
        <FooterHeaderSubtitle>Say hello</FooterHeaderSubtitle>
        <FooterHeaderTitle>Contact</FooterHeaderTitle>
      </FooterHeader>
      <FooterInputContainer>
        <FooterInputName>
          Name
          <FooterInput type="text" placeholder="Jackson"></FooterInput>
        </FooterInputName>
        <FooterInputName>
          Email Address
          <FooterInput type="email" placeholder="jack@gmail.com"></FooterInput>
        </FooterInputName>
        <FooterInputName>
          How can we help?
          <FooterTextarea placeholder="Message"></FooterTextarea>
        </FooterInputName>
        <Button href="#">Send Message</Button>
      </FooterInputContainer>
    </FooterContainer>
  );
}

export default Footer;
