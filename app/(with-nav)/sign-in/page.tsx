import { Prose } from "@/components/typography/prose";
import SignInWithGitHub from "./sign-in-with-github";

export default function SignInPage() {
  return (
    <Prose>
      <h1>Sign In</h1>
      <p>
        If you don't have a GitHub account, then you are probably not meant to
        be here 🫵
      </p>
      <div className="not-prose">
        <SignInWithGitHub />
      </div>
    </Prose>
  );
}
