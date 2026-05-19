"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function SignInWithGitHub() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/rooms",
      errorCallbackURL: "/sign-in",
      newUserCallbackURL: "/rooms",
      disableRedirect: false,
    });
  }

  return (
    <Button
      type="button"
      className="w-60"
      onClick={handleClick}
      disabled={loading}
    >
      <SiGithub className="mr-2 h-4 w-4" />
      Sign in with GitHub
      {loading && <Spinner />}
    </Button>
  );
}
