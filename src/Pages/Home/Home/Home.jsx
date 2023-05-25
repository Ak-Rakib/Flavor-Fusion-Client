import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Swipe from "../Swipe/Swipe";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/gRHqLJt/Banner3.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/XZ8Ybx2/Banner5.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/Mhq6tDb/Banner1.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/PZTDG2s/Banner2.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/0hmxxSW/Banner4.png" />
        </div>
      </Carousel>
      <Swipe></Swipe>
      <ExtraSection></ExtraSection>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
