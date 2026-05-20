import { db } from "@/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold">Your Rooms</h2>
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
    </div>
  );
}
