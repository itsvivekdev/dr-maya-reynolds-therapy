'use client';

const IMAGE = '/images/narrative.jpg';

export default function SplitNarrative() {
  return (
    <section className="overflow-hidden bg-fog pb-16 pt-16 lg:pb-32 lg:pt-40">
      <div className="grid lg:grid-cols-[69.8%_30.2%] lg:items-start">
      
        <div className="px-6 lg:pl-16 lg:pr-12 lg:pt-32 xl:pl-[120px] xl:pr-[123px]">
        
          <h2 className="mb-12 max-w-[700px] font-serif text-3xl font-light leading-[1.2] text-ink sm:mb-16 sm:text-4xl lg:text-[50px]">
            On the outside you’re handling everything. On the inside, you’re worn out.
          </h2>

          
          <div className="grid gap-8 md:grid-cols-2 lg:gap-[25px]">
           
            <div>
              <p className="mb-5 font-sans text-[15px] font-medium uppercase leading-[1.8] tracking-[0.08em] text-ink">
                In my Santa Monica office, you don’t have to hold it all together.
              </p>
              <p className="font-sans text-base font-light leading-[1.67] text-body lg:text-[18px]">
                Maybe it’s worry that never really switches off. Maybe it’s something from your past that still shows up in your relationships, or years of pushing through that left you feeling like a stranger to yourself. Whatever brought you here, we can start there.
              </p>
            </div>

          
            <div>
              <p className="font-sans text-base font-light leading-[1.67] text-body lg:text-[18px]">
                I work with adults who are used to pushing through. In our sessions, we’ll talk about what’s weighing on you, and we’ll also pay attention to what it’s doing to your body, like the tension, the restless nights, the feeling of always bracing for something to go wrong. We’ll go at a pace that feels okay to you. You can see me in my Santa Monica office or meet online from anywhere in California.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-0">
          <img
            src={IMAGE}
            alt="Person resting on a sofa beside a softly lit window"
            className="h-[480px] w-full object-cover object-center sm:h-[580px] lg:h-[641px]"
          />
        </div>
      </div>
    </section>
  );
}