import React, { useEffect, useState, useRef } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselHome = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        transitionTime={500}
        showThumbs={false}
      >
        <div>
          <img
            src="https://i.imgur.com/tDNwxpS.png"
            alt="image1"
            style={{ maxHeight: 490 }}
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/n3KQWJU.png"
            alt="image2"
            style={{ minHeight: 490 }}
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/kT6Xs6E.png"
            alt="image3"
            style={{ minHeight: 490 }}
          />
        </div>

        <div>
          <img src="/4.png" alt="image4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
