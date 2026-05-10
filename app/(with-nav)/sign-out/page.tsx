"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default async function SignOutPage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/");
      },
      onError: (error) => {
        setError(true);
      },
    },
  });

  return error ? <p>Failed :(</p> : <p>Signing out...</p>;
}
