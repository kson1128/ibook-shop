import NextAuth from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  // jwt: {
  //   encryption: true,
  // },
  secret: process.env.NEXTAUTH_URL,
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      // console.log('URL: ' + url);
      if (url === '/profile') {
        return Promise.resolve('/');
      }
      return Promise.resolve('/profile');
    },
  },
});
