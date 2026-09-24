import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
   <Link
  href={`/workout/${workout.id}`}
  className="group card-surface block overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ff00] hover:shadow-[0_0_0_1px_#c8ff00,0_0_22px_rgba(200,255,0,0.18)]"
>
      <div className="aspect-[1.65/1] overflow-hidden bg-[#111318]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <div className="flex min-h-[22px] flex-wrap gap-1.5">
          {workout.muscleGroups.map((group) => (
            <span className="tag" key={group}>
              {group}
            </span>
          ))}
        </div>

        <h2 className="font-display mt-2.5 text-[17px] uppercase tracking-wide text-[#f0f1f3]">
          {workout.name}
        </h2>

        <p className="mt-1 text-[13px] text-[#9fa6b1]">
          {workout.equipment}
        </p>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-3.5 gap-y-2 text-[11px] text-[#d0d4da]">
          <span className="flex items-center gap-1">
            <Clock3 size={12} className="text-[#c8ff00]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={12} className="text-[#c8ff00]" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={12} className="text-[#c8ff00]" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}