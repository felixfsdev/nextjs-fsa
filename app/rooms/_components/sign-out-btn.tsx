"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function SignOutBtn() {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = "Signing Out";

    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
        onError: (error) => {
          event.currentTarget.disabled = false;
          event.currentTarget.innerText = "Sign Out";
        },
      },
    });
  }

  return (
    <Button variant="ghost" onClick={handleClick}>
      Sign Out
    </Button>
  );
}
