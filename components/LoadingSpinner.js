import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({ label = "Loading workouts…" }) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 text-[#adb3bd]">
      <LoaderCircle size={32} className="spin text-[#c8ff00]" />
      <p>{label}</p>
    </div>
  );
}
