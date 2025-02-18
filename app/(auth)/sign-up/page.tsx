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
    <div>
      <h1>Sign Up</h1>
      <form action={handleSignUp}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label htmlFor="confirmedPassword">confirmedPassword</label>
          <input
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
