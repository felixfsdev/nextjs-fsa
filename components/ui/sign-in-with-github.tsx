"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./button";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { Spinner } from "./spinner";

export default function SignInWithGitHub() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
      errorCallbackURL: "/",
      newUserCallbackURL: "/",
      disableRedirect: false,
    });
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full p-2"
      onClick={handleClick}
      disabled={loading}
    >
      <SiGithub className="mr-2 h-4 w-4" />
      Sign in with GitHub
      {loading && <Spinner />}
    </Button>
  );
}
