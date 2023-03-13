import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const qty = useSelector(state => {
    // console.log('state: ', state);
    return state.cart;
  });

  const { data: session, loading } = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <nav className="flex items-center flex-wrap bg-Neutral-100 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-yellow-500 font-bold uppercase tracking-wide">
              IBOOK SHOP
            </span>
          </a>
        </Link>
        <button className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/allProducts">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                Shop All Books
              </a>
            </Link>
            <Link href="/cart">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                {/* <button
                  className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Cart"
                >
                <svg
               className="h-6 w-6" fill="none" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="absolute inset-0 object-right-top -mr-6"> */}
                {qty.length === 0 ? null : (
                  <div className=" absolute top-1 right-40 inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                    {qty.length}
                  </div>
                )}
                {/* </span>
                </button> */}
                View Cart
              </a>
            </Link>
            <Link href="/signup">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                Sign Up
              </a>
            </Link>
            <Link href="/signin">
              <a
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white"
                // onClick={() => signIn()}
              >
                {/* {!session && (
        <>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )} */}
                Login
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
