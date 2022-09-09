import axios from 'axios';
import { useState } from 'react';

import Navbar from '../components/navBar';
import CarouselHome from '../components/carousel';
import Icons from '../components/iconsGroup';

export default function Home({ bookList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div>
      <Navbar />
      <CarouselHome />
      <Icons />
    </div>
  );
}
