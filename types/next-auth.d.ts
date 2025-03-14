import { DefaultSession } from "next-auth";

// Extend User & Session types
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    role: "admin" | "user";
  }

  interface Session {
    user: User & DefaultSession["user"];
  }

  interface JWT {
    role: "admin" | "user";
  }
}
