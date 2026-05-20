import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function YourRooms() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session === null) {
    return <p>We were unable to get your session. Are you signed in?</p>;
  }

  const rooms = await db.query.room.findMany({
    where: (room, { eq }) => eq(room.ownerId, session.user.id),
  });

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Your Rooms</h2>
      {rooms.length === 0 ? (
        <p>You don't have any rooms yet. Create one to get started!</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {rooms.map((room) => (
            <li key={room.id}>
              <h3 className="text-xl font-semibold">{room.id}</h3>
            </li>
          ))}
        </ul>
      )}

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              variant={rooms.length === 0 ? "default" : "outline"}
              className="w-full"
            >
              Create Room
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm text-foreground">
            <DialogHeader>
              <DialogTitle>Create Room</DialogTitle>
              <DialogDescription>
                Invite your friends with a secure link. No sign in required for
                them.
              </DialogDescription>
            </DialogHeader>
            <Label htmlFor="username">Name</Label>
            <Input
              id="username"
              name="username"
              placeholder="The name of the chatroom"
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="w-28">
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
