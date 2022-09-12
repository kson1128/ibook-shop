import * as React from 'react';
import Image from 'next/image';
import axios from 'axios';

const SingleProductPage = ({ singleBook }) => {
  //   const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>THIS IS SINGLE BOOK PAGE:</h1>
        <h1>{singleBook.title}</h1>
        <h3>by:{singleBook.author}</h3>
        <h4>price:{singleBook.price}</h4>
        <Image
          src={singleBook.image}
          alt={'image'}
          height={300}
          width={220}
        ></Image>
      </div>
    </div>
  );
};

export const getServerSideProps = async context => {
  const res = await axios.get(
    `http://localhost:8000/api/allProducts/${context.params.id}`
  );
  return {
    props: {
      singleBook: res.data,
    },
  };
};

export default SingleProductPage;
