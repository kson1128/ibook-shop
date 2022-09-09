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
        showStatus={false}
      >
        <div style={{ maxHeight: '100%', maxWidth: '100%' }}>
          <img
            src="https://i.imgur.com/GQnWEZf.png"
            alt="image1"
            // style={{ height: 'auto' }}
          />
        </div>
        <div>
          <img src="https://i.imgur.com/LmskPGf.png" alt="image2" />
        </div>
        <div>
          <img src="https://i.imgur.com/kT6Xs6E.png" alt="image3" />
        </div>
        <div>
          <img src="https://i.imgur.com/qTTbsNq.png" alt="image4" />
        </div>
        <div>
          <img src="https://i.imgur.com/lxgnoCI.png" alt="image5" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
