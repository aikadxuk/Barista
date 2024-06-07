import { FaStar, FaRegStar } from "react-icons/fa";
import img1 from "./../../assets/reviews/young-woman-with-round-glasses-yellow-sweater.jpg";
import img2 from "./../../assets/reviews/senior-man-white-sweater-eyeglasses.jpg";
import img3 from "./../../assets/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg";

const Data = [
  {
    id: 1,
    name: "Sandra",
    img: img1,
    subtitle: "Customers",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: "3 Rating",
    stars: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
  {
    id: 2,
    name: "Dom",
    img: img2,
    subtitle: "Customers",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: "4.5 Rating",
    stars: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 1,
    name: "Olivia",
    img: img3,
    subtitle: "Customers",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: "2 Rating",
    stars: Array(2)
      .fill(<FaStar />)
      .concat(Array(3).fill(<FaRegStar />)),
  },
];

export default Data;