import {
  TestimonialAvatar,
  TestimonialCard,
  TestimonialCards,
  TestimonialHeader,
  TestimonialHeaderAvatarInfo,
  TestimonialInfo,
  TestimonialRate,
  TestimonialRating,
  TestimonialReview,
  TestimonialStar,
  TestimonialSubtitle,
  TestimonialText,
  TestimonialTitle,
  TestimonialsContainer,
  TestimonialsMainHeader,
  TestimonialsSubtitle,
  TestimonialsTitle,
} from "./style";
import Data from "./Data";

function Testimonials() {
  return (
    <TestimonialsContainer>
      <TestimonialsMainHeader>
        <TestimonialsSubtitle>Reviews by customers</TestimonialsSubtitle>
        <TestimonialsTitle>Testimonials</TestimonialsTitle>
      </TestimonialsMainHeader>
      <TestimonialCards>
        {Data.map((card) => (
          <TestimonialCard key={card.id}>
            <TestimonialHeader>
              <TestimonialHeaderAvatarInfo>
                <TestimonialAvatar src={card.img}></TestimonialAvatar>
                <TestimonialInfo>
                  <TestimonialTitle>{card.name}</TestimonialTitle>
                  <TestimonialSubtitle>{card.subtitle}</TestimonialSubtitle>
                </TestimonialInfo>
              </TestimonialHeaderAvatarInfo>
            </TestimonialHeader>
            <TestimonialReview>
              <TestimonialText>{card.text}</TestimonialText>
              <TestimonialRating>
                <TestimonialRate>{card.rating}</TestimonialRate>
                <TestimonialStar>{card.stars}</TestimonialStar>
              </TestimonialRating>
            </TestimonialReview>
          </TestimonialCard>
        ))}
      </TestimonialCards>
    </TestimonialsContainer>
  );
}

export default Testimonials;
