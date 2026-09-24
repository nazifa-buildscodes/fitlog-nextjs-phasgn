"use client";

import { Bookmark, Check, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutDetails({ workout }) {
  const { plan, saved, addToPlan, saveWorkout } = useFitLog();

  const alreadyPlanned = plan.some((item) => item.id === workout.id);
  const alreadySaved = saved.some((item) => item.id === workout.id);
  const planFull = plan.length >= 5 && !alreadyPlanned;

  function handleAdd() {
    const result = addToPlan(workout);

    if (result.ok) {
      toast.success("Added to today's plan");
      return;
    }

    if (result.reason === "limit") {
      toast.error("Today's plan is full (5 lifts max)");
    }

    if (result.reason === "duplicate") {
      toast("Already in today's plan");
    }
  }

  function handleSave() {
    const result = saveWorkout(workout);

    if (result.ok) {
      toast.success("Saved for later");
    } else {
      toast("Already saved");
    }
  }

  return (
    <main className="container-fit py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-start lg:gap-10">
        
        {/* Workout Image */}
        <div className="overflow-hidden rounded-[13px] border border-[#292e36] bg-[#191c22]">
          <img
            src={workout.image}
            alt={workout.name}
            className="aspect-[0.69/1] w-full object-cover"
          />
        </div>

        {/* Workout Informations */}
        <section className="fade-in">
          <h1 className="font-display text-[38px] uppercase leading-[1.05] text-white sm:text-[44px]">
            {workout.name}
          </h1>

          <p className="mt-4 text-[15px] leading-6 text-[#b4bac4]">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span className="tag" key={group}>
                {group}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-6 overflow-hidden rounded-[13px] border border-[#292e36] bg-[#191c22]">
            {[
              ["EQUIPMENT", workout.equipment],
              ["DIFFICULTY", workout.difficulty],
              ["SETS", workout.sets],
              ["REPS", workout.reps],
              ["DURATION", `${workout.duration} min`],
              ["CALORIES", `${workout.caloriesBurned} kcal`],
              ["RATING", workout.rating],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[1fr_1fr] border-b border-[#292e36] last:border-b-0"
              >
                <span className="px-4 py-4 text-xs font-black text-[#e8ebee]">
                  {label}
                </span>

                <span className="px-4 py-4 text-sm text-[#d8dce1]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="font-display text-2xl uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3 text-[15px] leading-6 text-[#d2d6dc]">
              {workout.instructions.map((instruction, index) => (
                <li key={instruction} className="flex gap-2">
                  <span className="shrink-0">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={handleAdd}
              disabled={alreadyPlanned || planFull}
              className="accent-button"
            >
              {alreadyPlanned ? (
                <Check size={17} />
              ) : (
                <Plus size={17} />
              )}

              {alreadyPlanned
                ? "Added to today's plan"
                : "Add to today's plan"}
            </button>

            <button
              onClick={handleSave}
              disabled={alreadySaved}
              className="outline-button"
            >
              {alreadySaved ? (
                <Check size={17} />
              ) : (
                <Bookmark size={17} />
              )}

              {alreadySaved ? "Saved" : "Save for later"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}