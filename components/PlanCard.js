"use client";

import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";

export default function PlanCard({
  workout,
  isSaved,
  onDone,
  onRemove,
}) {
  return (
    <article
      className={`card-surface overflow-hidden p-3 sm:flex sm:gap-4 sm:p-4 ${
        workout.done ? "opacity-65" : ""
      }`}
    >
      {/* Workout Image */}
      <img
        src={workout.image}
        alt={workout.name}
        className="h-[118px] w-full rounded-lg object-cover sm:h-24 sm:w-36 sm:shrink-0"
      />

      <div className="min-w-0 flex-1 pt-3 sm:pt-0">

        {/* Title + Remove */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`font-display text-[20px] uppercase leading-tight ${
                workout.done ? "line-through" : ""
              }`}
            >
              {workout.name}
            </h3>

            <p className="mt-1 text-sm text-[#9fa6b1]">
              {workout.equipment}
            </p>
          </div>

          <button
            onClick={onRemove}
            aria-label="Remove workout"
            className="shrink-0 rounded-lg p-1.5 text-[#aab0ba] transition hover:bg-[#252a31] hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#d0d4da]">
          <span className="flex items-center gap-1">
            <Clock3
              size={13}
              className="text-[#c8ff00]"
            />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame
              size={13}
              className="text-[#c8ff00]"
            />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star
              size={13}
              className="text-[#c8ff00]"
            />
            {workout.rating}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={`/workout/${workout.id}`}
            className="rounded-lg border border-[#4b515c] px-3 py-2 text-xs font-bold transition hover:bg-[#242930]"
          >
            View Details
          </Link>

          {!isSaved && (
            <button
              onClick={onDone}
              disabled={workout.done}
              className="rounded-lg border border-[#c8ff00] px-3 py-2 text-xs font-bold text-[#c8ff00] transition hover:bg-[#c8ff00] hover:text-[#11150b] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="inline-flex items-center gap-1">
                <Check size={13} />

                {workout.done ? "Done" : "Mark as Done"}
              </span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}