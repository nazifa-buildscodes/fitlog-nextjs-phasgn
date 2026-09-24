import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/WorkoutDetails";
import { getWorkout } from "@/lib/api";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}
