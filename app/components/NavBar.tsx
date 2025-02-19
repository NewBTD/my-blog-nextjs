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
      <div>MyLogo</div>
      <ul className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Blogs">Blogs</Link>
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
