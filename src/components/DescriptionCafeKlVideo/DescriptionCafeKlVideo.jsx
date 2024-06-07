import {
  DoubleContainer,
  TextContainer,
  TextParagraph,
  TextTitle,
  Tooplate,
  Video,
  VideoContainer,
  VideoText,
  VideoTextContainer,
} from "./style";
import WhiteButton from "./../Global/WhiteButton";
import VideoSrc from "./../../assets/videos/pexels-mike-jones-9046237.mp4";

function DescriptionCafeKlVideo() {
  return (
    <DoubleContainer>
      <VideoContainer>
        <Video src={VideoSrc} autoPlay></Video>
        <VideoTextContainer>
          <VideoText>We Started Since 2009. Best Cafe in Klang.</VideoText>
        </VideoTextContainer>
      </VideoContainer>
      <TextContainer>
        <TextTitle>Cafe KL</TextTitle>
        <TextParagraph>
          The café had been in the town for as long as anyone could remember,
          and it had become a beloved institution among the locals.
        </TextParagraph>
        <TextParagraph>
          The café was run by a friendly and hospitable couple, Mr. and Mrs.
          Johnson. Barista Cafe is free Bootstrap 5 HTML layout provided by
          <Tooplate>Tooplate</Tooplate>.
        </TextParagraph>
        <WhiteButton text="Meet Barista" />
      </TextContainer>
    </DoubleContainer>
  );
}

export default DescriptionCafeKlVideo;
