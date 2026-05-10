"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import SignInWithGitHub from "@/components/ui/sign-in-with-github";
import React, { useState } from "react";

export default function SignInForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (typeof email !== "string" || typeof password !== "string") {
      setError("An error occured. Please try again.");
      setLoading(false);
      return;
    }

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/",
        rememberMe: false,
      },
      {
        //callbacks
      },
    );

    if (error) {
      setError(
        error.message
          ? error.message
          : "An unknown error occured. Please try again.",
      );
      setLoading(false);
      return;
    }

    window.location.href = "/";
  }

  return (
    <form className="flex flex-col gap-2" noValidate onSubmit={handleSubmit}>
      {/* <label htmlFor="email">Email</label>
      <Input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <Input type="password" name="password" />
      {error && <p className="text-destructive">{error}</p>}
      <div className="mt-3 flex justify-between">
        <Link href="/">
          <Button variant="outline">Go Back</Button>
        </Link>
        <Button type="submit" className="w-50" disabled={loading}>
          {loading ? (
            <>
              <Spinner />
              Signing In
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </div>
      <div className="flex items-center gap-4 my-2">
        <div className="flex-1 border-b" />
        <div>or</div>
        <div className="flex-1 border-b" />
      </div> */}
      <SignInWithGitHub />
    </form>
  );
}
