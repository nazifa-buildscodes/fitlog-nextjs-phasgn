"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/FitLogContext";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function MyPlanClient() {
  const {
    plan,
    saved,
    hydrated,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const activeItems = activeTab === "plan" ? plan : saved;

  const sortedItems = useMemo(() => {
    return [...activeItems].sort((a, b) => {
      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return b.duration - a.duration;
    });
  }, [activeItems, sortBy]);

  const minutes = plan.reduce(
    (total, item) => total + Number(item.duration || 0),
    0
  );

  const calories = plan.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0
  );

  function handleRemove(id, savedItem) {
    if (savedItem) {
      removeFromSaved(id);
      toast.success("Removed from saved");
    } else {
      removeFromPlan(id);
      toast.success("Removed from today's plan");
    }
  }

  function handleDone(id) {
    markAsDone(id);
    toast.success("Workout marked as done");
  }

  if (!hydrated) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="font-display text-[40px] uppercase leading-none text-white sm:text-[46px]">
          My Plan
        </h1>

        <p className="mt-3 text-[15px] text-[#adb3bd]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-8 grid overflow-hidden rounded-[14px] border border-[#292e36] bg-[#191c22] sm:grid-cols-3">
        <Metric
          label="Exercises"
          value={plan.length}
          accent
        />

        <Metric
          label="Minutes"
          value={minutes}
        />

        <Metric
          label="Calories"
          value={calories}
        />
      </div>

      {/* Tabs + Sort */}
      <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
        
        <div className="flex rounded-[13px] bg-[#191c22] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-[10px] px-4 py-2.5 text-sm font-bold transition ${
              activeTab === "plan"
                ? "bg-[#111419] text-[#c8ff00]"
                : "text-[#aeb4be] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-[10px] px-4 py-2.5 text-sm font-bold transition ${
              activeTab === "saved"
                ? "bg-[#111419] text-[#c8ff00]"
                : "text-[#aeb4be] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

<label className="flex w-full flex-col items-start gap-2 text-sm font-bold text-[#d8dce1] sm:w-auto sm:flex-row sm:items-center sm:gap-3">          Sort By

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
className="w-full rounded-xl border border-[#424750] bg-[#0f1115] px-4 py-3 font-normal text-white outline-none focus:border-[#c8ff00] sm:w-[180px]"          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* Workout List */}
      <div className="mt-7 space-y-3">
        {sortedItems.length === 0 ? (
          <EmptyState saved={activeTab === "saved"} />
        ) : (
          sortedItems.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              isSaved={activeTab === "saved"}
              onDone={() => handleDone(workout.id)}
              onRemove={() =>
                handleRemove(
                  workout.id,
                  activeTab === "saved"
                )
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

function Metric({ label, value, accent }) {
  return (
    <div className="border-b border-[#292e36] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-sm text-[#a9afb9]">
        {label}
      </p>

      <p
        className={`mt-2 text-4xl font-black ${
          accent
            ? "text-[#c8ff00]"
            : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}