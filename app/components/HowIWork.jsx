'use client';

import Link from 'next/link';


const IMAGE = '/images/how-i-work.jpg';

const paragraph = 'font-sans text-base font-light leading-[1.67] text-body lg:text-[18px]';

export default function HowIWork() {
  return (
    <section className="bg-dusk py-16 lg:py-28">
      <div className="grid lg:grid-cols-[77.4%_22.6%] lg:items-stretch">
       
        <div className="px-6 lg:pl-16 lg:pr-8 xl:pl-[120px] xl:pr-[124px]">
       
          <p className="mb-20 font-sans text-[15px] font-normal uppercase tracking-[0.1em] text-ink lg:mb-32">
            HOW I WORK
          </p>

         
          <h2 className="mb-12 font-serif text-3xl font-light leading-[1.2] text-ink sm:mb-16 sm:text-4xl lg:mb-[50px] lg:text-[50px]">
            Structured, but never rushed.
          </h2>

        
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-[23px]">
            <div>
              <p className="mb-4 font-sans text-[15px] font-medium uppercase leading-[1.8] tracking-[0.08em] text-ink">
                You know yourself better than anyone, so we’ll work on this together, and you’ll always have a say in where we go.
              </p>
              <p className={paragraph}>
                Our sessions have enough structure that you’re never left wondering where we’re headed, with space to slow down and look at what’s underneath. Depending on what fits you, I draw on CBT, EMDR, mindfulness, and body-oriented techniques, so the work reaches both how you think and how your body responds.
              </p>
            </div>

            <p className={paragraph}>
              When we’re working through trauma, we’ll go carefully, starting with safety and stability before anything heavier. I want you to feel more settled in your everyday life, not only while you’re in the room with me. Therapy works best when you feel respected and heard, so your voice matters in how we work. My goal is more than symptom relief: it’s that you leave with more insight, more resilience, and a stronger relationship with yourself.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-14 inline-block border-b border-ink pb-1.5 font-sans text-[13px] uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-mauve hover:text-mauve"
          >
            LEARN MORE ABOUT ME
          </Link>
        </div>

        <div className="relative mt-14 h-[480px] sm:h-[580px] lg:mt-0 lg:h-auto">
          <img
            src={IMAGE}
            alt="Two people walking side by side along the seashore at sunset"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}