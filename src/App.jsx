import "./App.css";
import Global from "./components/Global/Global";
import Header from "./components/Header/Header";
import DescriptionVideo from "./components/DescriptionCafeKlVideo/DescriptionCafeKlVideo";
import StaffCards from "./components/StaffCards/StaffCards";
import Menu from "./components/Menu/Menu";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Global />
      <Header />
      <DescriptionVideo />
      <StaffCards />
      <Menu />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
