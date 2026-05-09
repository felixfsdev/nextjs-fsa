"use client";

export default function SignUpForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" type="email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
