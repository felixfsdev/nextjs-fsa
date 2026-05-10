"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function SignOutPage() {
  const [error, setError] = useState(false);

  useEffect(() => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
        onError: (error) => {
          setError(true);
        },
      },
    });
  }, []);

  return error ? <p>Failed :(</p> : <p>Signing out...</p>;
}
