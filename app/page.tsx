import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 min-w-2xl mx-auto">
      <h1 className="text-2xl">Hello world!</h1>
      <p>This is a Next.js website.</p>
      <div className="flex gap-2">
        <Button className="w-min">Click Me!</Button>
        <Button variant="outline">Me Too!</Button>
        <Button className="w-min" disabled>
          Not Me
        </Button>
      </div>
    </div>
  );
}
