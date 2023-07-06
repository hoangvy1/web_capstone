import Hero from "../component/Hero/Hero";
import Cards from "../component/Card/Cards";

import NavBar from "../component/NavBar/Navbar";
// // import Card from "../component/Card";
import Footer from "../component/Footer/Footer.js";

function Home() {
  return (
    <>
      <NavBar />
      <div className="Home">
        <Hero cName="hero" heroImg="images/bgcar.jpg" />
        <Cards />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
