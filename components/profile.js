import { useSession } from 'next-auth/client';

const Profile = () => {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;

  if (!session) return <p>You are not authenciated</p>;

  return <p>You are authenciated</p>;
};

export default Profile;
