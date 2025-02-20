import Link from "next/link";
import React from "react";
import { ThemeButton } from "./ThemeButton";
import { LogIn } from "lucide-react";
import { auth } from "@/auth";
import LogOut from "./LogOut";

const NavBar = async () => {
  const session = await auth();
  return (
    <nav className="container mx-auto flex gap-4 justify-between items-center p-4 drop-shadow-lg">
      <Link href="/">
        MyLogo
      </Link>
      <ul className="flex items-center gap-4">
        <Link href="/admin/create-blog">Create</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/sign-up">Sign Up</Link>
        <ThemeButton></ThemeButton>
        {session ? (
          <LogOut></LogOut>
        ) : (
          <Link href={"/sign-in"}>
            <LogIn></LogIn>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
