import Image from 'next/image';

const BookList = ({ bookList }) => {
  return (
    <div>
      <div>
        {bookList.map(book => (
          <>
            <h2>Title: {book.title}</h2>
            <h3>Author: {book.author}</h3>
            <h3>Price: {book.price}</h3>

            <Image
              alt="my image"
              src={`${book.image}`}
              width={200}
              height={300}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default BookList;
