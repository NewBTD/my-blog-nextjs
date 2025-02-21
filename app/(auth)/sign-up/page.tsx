"use client";
import React from "react";
import { signUp } from "@/actions/signUp";

const Page = () => {
  const handleSignUp = (data: FormData) => {
    if (
      (data.get("password") as string) !==
      (data.get("confirmedPassword") as string)
    ) {
      alert("Passwords do not match");
      throw new Error("Passwords do not match");
    } else {
      signUp(data);
    }
  };
  return (
    <div className="container mx-auto flex items-center justify-center flex-col">
      <h1 className="text-2xl pb-8">Sign Up</h1>
      <form className="flex flex-col gap-4 p-4 rounded" action={handleSignUp}>
        <div>
          
          <input
            className="border-2 border-gray-300 p-2 rounded-md w-[280px]"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          
          <input
            className="border-2 border-gray-300 p-2 rounded-md w-[280px]"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          
          <input
            className="border-2 border-gray-300 p-2 rounded-md w-[280px]"
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <div>
          
          <input
            className="border-2 border-gray-300 p-2 rounded-md w-[280px]"
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            required
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Page;
