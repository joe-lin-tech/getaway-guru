import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import axios from 'axios'

import { verifyPassword } from '../../../lib/auth';
const User = require("../../../models/user.js");
import dbConnect from '../../../lib/dbConnect';
import {jwt} from 'jsonwebtoken'

const SignToken = async (email)=> {
    const token = await jwt.sign({id:email}, process.env.NEXT_PUBLIC_JWT_SECRET_KEY, {expiresIn: '1d'});
        return token
    }

export default NextAuth({
  session: {
    strategy: 'jwt',
  },providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],callbacks: {
    async signIn({ user, account, profile}) {
        console.log(profile);
        console.log("...");
        console.log(user);
        console.log("...");
        console.log(account);

        const response = await axios.post(
            "http://localhost:3000/api/users/findbyemail",
            { name:profile.name, email: profile.email }
          );
          if (response && response.data?.value === true) {        
              return true;
          } else {
            return true;
          }
        return true;
        },}
//     async jwt({ token, user, account }) {
//         if (account) {
//           console.log(user, token, account);
//           // call the signToken function which returns a JWT token
//           const token = await SignToken(user?.email); // TODO add some string thing
//           token.userToken = token;
//         }
//   // the token object is passed done to the session call back for persistence
//         return token;
//         // return true;
  
//       },
//       async session({ session, token, user }) {
//         // Send properties to the client, like an access_token from a provider.
//         session.loggedUser = token.userToken;
//         return session;
//       },
//     },
  })
  
//   callbacks:{
//     async jwt({ token, user }) {
//         if (user) {
//           token = user;
//           // token = user;
//           token.user=user
//         }
//         return Promise.resolve(token);
//       },
//       session: async ({ session, token }) => {
//         // session callback is called whenever a session for that particular user is checked
//        // in above function we created token.user=user
//         session.user = token.user;
//         // you might return this in new version
//         return Promise.resolve(session)
//       },
//   }
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         dbConnect()

//         console.log(credentials);
//         const user = await User.findOne({
//           email: credentials.email,
//         });
//         // console.log("hi");
//         // console.log(user);
//         if (!user) {
//           client.close();
//           throw new Error('No user found!');
//         }

//         const isValid = await verifyPassword(
//           credentials.password,
//           user.password
//         );

//         if (!isValid) {
//           client.close();
//           throw new Error('Could not log you in!');
//         }
//         console.log("Successful Login");
//         client.close();
//         return user;
//       },
//     }),
//   ],
// });