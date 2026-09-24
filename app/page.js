import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  let workouts = [];
  let error = false;

  try {
    workouts = await getWorkouts();
  } catch {
    error = true;
  }

  return (
    <main>
      <Hero />

      <section id="library"   className="container-fit scroll-mt-24 pt-8 pb-10 sm:pt-9 sm:pb-12"
>
        <div className="mb-5">
          <h2 className="font-display text-[30px] uppercase sm:text-[34px]">The Library</h2>
          <p className="mt-1.5 text-sm text-[#aab0ba]">Twelve lifts covering every major muscle group.</p>
        </div>

        {error ? (
          <div className="card-surface flex min-h-[220px] items-center justify-center p-8 text-center">
            <div>
              <h3 className="font-display text-2xl uppercase">Couldn&apos;t load workouts</h3>
              <p className="mt-2 text-[#aab0ba]">Please refresh the page and try again.</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
          </div>
        )}
      </section>
    </main>
  );
}
