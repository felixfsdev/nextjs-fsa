import { MessageSquareDashed } from "lucide-react";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-full">
      <MessageSquareDashed className="text-muted-foreground size-8" />
      <p className="text-muted-foreground">Select a room to start chatting</p>
    </div>
  );
}
