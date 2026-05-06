import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="prose max-w-2xl w-full mx-auto p-4 dark:prose-invert">
      <h1>Hello world!</h1>
      <p>This is a Next.js website.</p>
      <div className="not-prose flex flex-wrap gap-2">
        <Button>Click Me!</Button>
        <Button variant="outline">Me Too!</Button>
        <Button variant="secondary">I'm Secondary</Button>
        <Button disabled>I'm Disabled</Button>
      </div>
      <h2>Heading 2</h2>
      <p className="text-xs text-muted-foreground">
        I am not that important :(
      </p>
      <p>
        Next.js is a React framework that enables you to build static and
        server-rendered applications. It provides features like automatic code
        splitting, optimized performance, and a great developer experience.
      </p>
    </div>
  );
}
