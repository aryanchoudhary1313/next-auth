import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handlre = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
});

export { handlre as GET, handlre as POST };
