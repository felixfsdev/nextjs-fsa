"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

export default function SignUpForm() {
  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    if (!email || !password || !name) {
      return;
    }

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof name !== "string"
    ) {
      return;
    }

    // Sign up the user
    const { data, error } = await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      },
    );
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <Input type="text" name="name" />
      <label htmlFor="email">Email</label>
      <Input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <Input type="password" name="password" />
      <div className="mt-3 flex justify-between">
        <Link href="/">
          <Button variant="outline">Go Back</Button>
        </Link>
        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
}
