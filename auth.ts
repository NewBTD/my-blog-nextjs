import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import dbConnect from "./lib/mongoose";
import User from "./models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      authorize: async (credentials) => {
        let user = null;
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid credentials. !crendentials");
        }
        if (typeof credentials.password !== "string") {
          throw new Error("Invalid credentials. typeof password");
        }
        await dbConnect();
        user = await User.findOne({ email: credentials.email });
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!user || !isMatch) {
          throw new Error("Invalid credentials. not match");
        }

        return { id: user._id, email: user.email };
      },
    }),
  ],
});
