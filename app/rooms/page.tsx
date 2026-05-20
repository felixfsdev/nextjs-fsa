import { Suspense } from "react";
import YourRooms from "./_components/your-rooms";
import { Button } from "@/components/ui/button";
import Chat from "./_components/chat";

export default function Home() {
  return (
    <div className="flex gap-2 p-2 w-full h-full min-w-xl">
      <div className="flex flex-2 border h-full flex-col p-4 gap-2 overflow-y-auto">
        <Suspense fallback={<p>Loading your rooms...</p>}>
          <YourRooms />
        </Suspense>
      </div>
      <div className="flex-3 border overflow-y-auto">
        <Chat />
      </div>
    </div>
  );
}
