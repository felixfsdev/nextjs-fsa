import { Prose } from "@/components/typography/prose";
import SignInWithGitHub from "./sign-in-with-github";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="h-dvh w-full justify-center items-center flex">
      <div className="flex flex-col gap-6 text-center items-center justify-center">
        <h1 className="text-4xl font-bold">Sign In</h1>
        <p>
          If you don't have a GitHub account, then you are probably not meant to
          be here 🫵
        </p>
        <div className="not-prose w-min flex gap-2">
          <Link href="/">
            <Button variant="secondary" className="w-60">
              Go Back
            </Button>
          </Link>
          <SignInWithGitHub />
        </div>
      </div>
    </div>
  );
}
