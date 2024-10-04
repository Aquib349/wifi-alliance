import React from "react";
import Welcome from "./component/welcome/welcome";
import Navbar from "./shared/Navbar";
import NewResource from "./component/new resource/new-resource";
import KeySolution from "./component/key solution/key-solution";
import Membership from "./component/membership/membership";
import CarouselSection from "./component/carousel";
import Footer from "./component/footer";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-red-50">
        <section className="navbar">
          <Navbar />
          <Welcome />
        </section>

        <section className="new-resource">
          <NewResource />
        </section>

        <section className="key-solution">
          <KeySolution />
        </section>

        <section className="membership">
          <Membership />
        </section>

        <section className="carousel">
          <CarouselSection />
        </section>

        <section className="footer">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
