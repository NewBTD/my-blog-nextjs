import { DefaultSession, DefaultUser } from "next-auth";

// Extend User type to include `role`
declare module "next-auth" {
  interface User extends DefaultUser {
    role: "admin" | "user"; // Define allowed roles
  }

  interface Session {
    user: User & DefaultSession["user"];
  }

  interface JWT {
    role: string; // Ensure JWT includes role
  }
}
