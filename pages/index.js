import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';

import BookList from '../components/allProducts';
import Navbar from '../components/navBar';
import CarouselHome from '../components/carousel';

export default function Home({ bookList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div>
      <Navbar />
      <CarouselHome />
      <Image
        alt="my image"
        src={'https://i.imgur.com/2D9ef63.png'}
        width={140}
        height={140}
      />
      <BookList bookList={bookList} />
    </div>
  );
}

export const getServerSideProps = async ctx => {
  // const myCookie = ctx.req?.cookies || '';
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get('http://localhost:8000/products');
  return {
    props: {
      bookList: res.data,
      // admin,
    },
  };
};

// export default function Home() {
//   return (
//     <div className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:text-center">
//           <h2 className="text-base text-red-500 font-semibold">Good Morning</h2>
//           <p className="mt-2 text-blue-800 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
//             Welcome to KindaCode.com
//           </p>
//         </div>

//         <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//           <div className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
//             <div className="mt-2 font-bold">John Doe</div>
//             <div className="font-light">Some description</div>
//           </div>

//           <div className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
//             <div className="mt-2 font-bold">John Doe</div>
//             <div className="font-light">Some description</div>
//           </div>

//           <div className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
//             <div className="mt-2 font-bold">John Doe</div>
//             <div className="font-light">Some description</div>
//           </div>

//           <div className="bg-purple-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
//             <div className="mt-2 font-bold">John Doe</div>
//             <div className="font-light">Some description</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
