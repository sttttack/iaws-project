import "./App.css";
import NavBar from "./UI/Header/NavBar";
import Footer from "./UI/Footer/Footer";

import Heading from "./UI/MainPage/Heading";
import About from "./UI/MainPage/About";
import OurMission from "./UI/MainPage/OurMission";
import OurValues from "./UI/MainPage/OurValues";
import MembershipBenefits from "./UI/MainPage/MembershipBenefits";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Heading />
        <About />
        <OurMission />
        <OurValues />
        <MembershipBenefits />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
