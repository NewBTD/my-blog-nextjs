"use client";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogOut = () => {
  const handleSignOut = () => {
    signOut();
  };
  return <LogOutIcon onClick={handleSignOut}></LogOutIcon>;
};

export default LogOut;
