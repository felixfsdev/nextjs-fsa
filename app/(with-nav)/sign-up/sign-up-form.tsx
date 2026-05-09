"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function SignUpForm() {
  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    alert(JSON.stringify(data, null, 2));
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
