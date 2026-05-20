import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-dvh w-full justify-center items-center flex">
      <Spinner />
    </div>
  );
}
