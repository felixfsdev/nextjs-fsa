import SignInForm from "./sign-in-form";

export default function SignInPage() {
  return (
    <div className="max-w-2xl w-full mx-auto p-4 py-8">
      <h1 className="text-2xl font-bold mb-3">Sign In</h1>
      <SignInForm />
    </div>
  );
}
