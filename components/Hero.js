import Link from "next/link";
import { ArrowDown, Dumbbell } from "lucide-react";

const heroImage = "/assets/banner.png";

export default function Hero() {
  return (
    <section className="container-fit pt-7 sm:pt-8">
      <div className="overflow-hidden rounded-[13px] border border-[#292e36] bg-[#191c22]">
<div className="grid min-h-[620px] grid-cols-1 items-center md:grid-cols-[1.05fr_.95fr]">
          {/* Hero Content */}
          <div className="px-7 py-10 sm:px-10 md:py-12">
            <span className="text-[11px] font-black tracking-wide text-[#c8ff00]">
              WORKOUT LIBRARY
            </span>

            <h1 className="font-display mt-4 max-w-[570px] text-[39px] leading-[1.08] uppercase text-[#eef0f3] sm:text-[52px]">
              Train with intent. Log every set.
            </h1>

            <p className="mt-4 max-w-[540px] text-[15px] leading-6 text-[#b2b8c2]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link href="#library" className="accent-button mt-6">
                      {/*  <Dumbbell size={16} /> */}

              Browse Workouts
                                    {/*  <ArrowDown size={15} /> */}

              
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex h-full min-h-[500px] items-center justify-center overflow-hidden px-5">
            <img
              src={heroImage}
              alt="Workout illustration"
              className="h-[500px] w-full max-w-[520px] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,.45)] sm:h-[530px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}