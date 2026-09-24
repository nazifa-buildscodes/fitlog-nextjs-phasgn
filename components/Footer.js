import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#292e36] bg-[#191c22]">
      <div className="container-fit flex min-h-[80px] items-center justify-between gap-5 py-5 text-sm text-[#aeb4be] max-sm:flex-col max-sm:items-start">
        <div className="flex items-center gap-2 font-display text-lg text-white">
          <Dumbbell
            size={19}
            strokeWidth={3}
            className="text-[#c8ff00]"
          />
          FITLOG
        </div>

        <p>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}