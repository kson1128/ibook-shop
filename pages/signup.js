import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { supabase } from '../supabase/utils/supabase';

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: 'John',
        },
      },
    });
    console.log('data', data);
    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push('/signin');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-white">
          Create new account
        </h1>

        <form className="mt-2 flex flex-col p-6" onSubmit={handleSubmit}>
          {/* <label htmlFor="first_name" className="text-gray-200">
            first_name
          </label>
          <input
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
            type="first_name"
            id="first_name"
            value={first_name}
            onChange={e => setName(e.target.value)}
          /> */}

          <label htmlFor="email" className="text-gray-200">
            Email
          </label>
          <input
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="mt-6 text-gray-200">
            Password
          </label>
          <input
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className="mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
