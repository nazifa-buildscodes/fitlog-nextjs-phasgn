import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container-fit flex min-h-[65vh] items-center justify-center py-16">
      <div className="max-w-xl text-center">
        <Dumbbell size={42} className="mx-auto text-[#c8ff00]" />
        <p className="mt-6 text-sm font-black tracking-[.25em] text-[#c8ff00]">404</p>
        <h1 className="font-display mt-3 text-5xl uppercase">Workout not found</h1>
        <p className="mt-4 text-[#adb3bd]">The page you requested does not exist or the workout is no longer available.</p>
        <Link href="/" className="accent-button mt-7"><ArrowLeft size={16} /> Back to workouts</Link>
      </div>
    </main>
  );
}
