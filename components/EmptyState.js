import Link from "next/link";

export default function EmptyState({ saved }) {
  return (
    <div className="card-surface flex min-h-[210px] flex-col items-center justify-center px-5 py-10 text-center">
      <h2 className="font-display text-2xl uppercase text-white">Nothing here yet</h2>
      <p className="mt-3 max-w-lg text-[#adb3bd]">
        {saved ? "Save workouts from the library to keep them here for later." : "Browse the library and add a lift to get today moving."}
      </p>
      <Link href="/" className="accent-button mt-5">Go to workouts</Link>
    </div>
  );
}
