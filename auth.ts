import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
export const { auth, handlers } = NextAuth({
  providers: [Google],
  pages: { signIn: "/sign-in" },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});
