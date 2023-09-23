// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., "Email and Password")
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Add your custom logic here to validate the username and password
        // For example, check against a database
        const user = { id: 1, name: 'Sample User', email: 'user@example.com' };

        if (
          user &&
          user.username === credentials.username &&
          user.password === credentials.password
        ) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // Add custom configurations if needed
});
