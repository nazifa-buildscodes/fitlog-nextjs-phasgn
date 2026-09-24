"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = JSON.parse(localStorage.getItem("fitlog-plan") || "[]");
      const storedSaved = JSON.parse(localStorage.getItem("fitlog-saved") || "[]");
      setPlan(Array.isArray(storedPlan) ? storedPlan : []);
      setSaved(Array.isArray(storedSaved) ? storedSaved : []);
    } catch {
      setPlan([]);
      setSaved([]);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [plan, saved, hydrated]);

  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      return { ok: false, reason: "limit" };
    }

    if (plan.some((item) => item.id === workout.id)) {
      return { ok: false, reason: "duplicate" };
    }

    setPlan((current) => [...current, { ...workout, done: false }]);
    return { ok: true };
  };

  const saveWorkout = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return { ok: false, reason: "duplicate" };
    }

    setSaved((current) => [...current, workout]);
    return { ok: true };
  };

  const removeFromPlan = (id) => {
    setPlan((current) => current.filter((item) => item.id !== id));
  };

  const removeFromSaved = (id) => {
    setSaved((current) => current.filter((item) => item.id !== id));
  };

  const markAsDone = (id) => {
    setPlan((current) =>
      current.map((item) =>
        item.id === id ? { ...item, done: true } : item
      )
    );
  };

  const value = useMemo(
    () => ({
      plan,
      saved,
      hydrated,
      addToPlan,
      saveWorkout,
      removeFromPlan,
      removeFromSaved,
      markAsDone,
    }),
    [plan, saved, hydrated]
  );

  return <FitLogContext.Provider value={value}>{children}</FitLogContext.Provider>;
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}
