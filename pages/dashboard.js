import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabase/utils/supabase';
import { useSession, signIn, signOut } from 'next-auth/react';

const Dashboard = ({ session }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  console.log('THIS IS SESSION IN DASHBOARD', session);

  const handleLogOut = async e => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push('/signin');
    }
  };

  useEffect(() => {
    const getProfile = () => {
      const profile = supabase.auth.user();

      if (profile) {
        setUser(profile);
      } else {
        router.push('/signin');
      }
    };

    getProfile();
  }, []);

  // console.log('WHATS USER-', user);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-2xl font-semibold text-white">
          {user
            ? `Welcome, your email is ${user.email}`
            : 'something went wrong :('}
        </h1>

        <button
          className="mt-6 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
