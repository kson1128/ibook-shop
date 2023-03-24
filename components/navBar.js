import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const qty = useSelector(state => {
    return state.cart;
  });

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav class="flex items-center flex-wrap bg-Neutral-100 p-3 ">
        <Link href="/">
          <a class="inline-flex items-center p-2 mr-4 ">
            <span class="text-xl text-yellow-500 font-bold uppercase tracking-wide">
              IBOOK SHOP
            </span>
          </a>
        </Link>

        {showSidebar ? (
          <button
            class="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <button
            class=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-red ml-auto hover:text-white outline-none"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg
              class="w-6 h-6"
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
        )}

        <div
          class={`top-0 right-0 w-[35vw] bg-green-200  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          }`}
        >
          <ul class="list-none flex flex-col space-y-4 mt-10">
            <li>
              <Link href="/">
                <a class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white ">
                  Home
                </a>
              </Link>
            </li>
            <li>
              {' '}
              <Link href="/allProducts">
                <a class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                  Shop All Books
                </a>
              </Link>
            </li>
            <li>
              {' '}
              <Link href="/cart">
                <a class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                  {qty.length === 0 ? null : (
                    <div className=" absolute top-1 right-40 inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                      {qty.length}
                    </div>
                  )}
                  View Cart
                </a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                  Sign Up
                </a>
              </Link>
            </li>
            <li>
              {' '}
              <Link href="/signin">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>

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
                {qty.length === 0 ? null : (
                  <div className=" absolute top-1 right-40 inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                    {qty.length}
                  </div>
                )}
                View Cart
              </a>
            </Link>
            <Link href="/signup">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
                Sign Up
              </a>
            </Link>
            <Link href="/signin">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-yellow-500 font-bold items-center justify-center hover:bg-green-700 hover:text-white">
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
