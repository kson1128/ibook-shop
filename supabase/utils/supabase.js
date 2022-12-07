import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(url, key);

const useSupabase = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [session, setSession] = useState(supabase.auth.session());

  supabase.auth.onAuthStateChange(async (_event, session) => {
    setSession(session);
  });

  useEffect(async () => {
    const getCurrentUser = async () => {
      if (session?.user.id) {
        const { data: currentUser } = await supabase
          .from('User')
          .select('*')
          .eq('id', session.user.id);

        if (currentUser.length) {
          const foundUser = currentUser[0];
          const sub = await supabase
            .from(`user:id=eq.${foundUser.id}`)
            .on('UPDATE', ({ new: newUser }) => {
              setCurrentUser(newUser);
            })
            .subscribe();
          return foundUser;
        } else {
          return null;
        }
      }

      return null;
    };

    const newCurrentUser = await getCurrentUser();
    setCurrentUser(newCurrentUser);
  }, [session]);

  return { currentUser, session, supabase };
};

export default useSupabase;
