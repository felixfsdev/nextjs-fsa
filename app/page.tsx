import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="w-full flex-col sm:flex-row max-w-md mx-auto h-dvh flex items-center text-center justify-center gap-8">
      <h1 className="text-6xl">fsa</h1>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p>
          Easy and fast chatrooms
          <br />
          Privacy <i>not</i> guaranteed
        </p>
        <Button className="animate-pulse">Let's Chat</Button>
      </div>
    </div>
  );
}
