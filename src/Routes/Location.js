import Hero from "../component/Hero/Hero";
// import Card from "../component/Card/Card";
import Map from "../component/Map/Map";
import NavBar from "../component/NavBar/Navbar";

// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";

function Location() {
  return (
    <>
      <NavBar />
      <Hero cName="hero" heroImg="images/bgcar.jpg" />

      {/* <Card 
                image = "images/location.png"
                title = "Location"
                body = "Etown_2"
            /> */}

      {/* <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <Map />
                </div>
            </div> */}

      <Map />
    </>
  );
}

export default Location;
