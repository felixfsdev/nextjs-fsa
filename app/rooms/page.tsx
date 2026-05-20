import { Suspense } from "react";
import YourRooms from "./_components/your-rooms";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
      <Suspense fallback={<p>Loading your rooms...</p>}>
        <YourRooms />
      </Suspense>
      <Button>Create Room</Button>
    </div>
  );
}
