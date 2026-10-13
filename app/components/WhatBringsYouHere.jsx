'use client';

const SERVICES = [
  {
    title: 'Anxiety & Panic',
    image: '/images/anxiety.jpg',
    alt: 'Woman sitting quietly on a blanket at the shoreline, looking out to sea',
    text: 'Always on edge, overthinking everything, or lying awake at night? We’ll look at where the worry comes from and find ways to calm both your mind and your body, so it has less hold on your days.',
  },
  {
    title: 'Trauma',
    image: '/images/trauma.jpg',
    alt: 'Stack of balanced stones on warm sand',
    text: 'Whether it was one painful event or something that went on for years, it can still affect your relationships and how safe you feel. We’ll start with steadiness and safety, and move at a pace you can handle.',
  },
  {
    title: 'Burnout',
    image: '/images/burnout.jpg',
    alt: 'Person pausing at a window, looking out at the ocean at sunset',
    text: 'After years of pushing hard, you may feel flat, disconnected, or never good enough. Therapy can be a place to slow down, ease the pressure you put on yourself, and build a way of working and living you can sustain.',
  },
];

export default function WhatBringsYouHere() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:py-24 lg:pl-20 lg:pr-[68px]">
      
        <h2 className="mb-12 font-serif text-4xl font-light leading-[1.2] text-ink lg:mb-16 lg:text-[50px]">
          What brings you <span className="font-script text-[1.4em] italic text-mauve">here</span>
        </h2>

        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-5 lg:pl-24 xl:pl-36">
          {SERVICES.map(({ title, image, alt, text }) => (
            <article key={title}>
              <img
                src={image}
                alt={alt}
                className="mb-6 aspect-17/20 w-full object-cover lg:mb-12"
              />
              <h3 className="mb-4 font-serif text-2xl font-light leading-[1.2] text-ink lg:mb-8 lg:text-[28px]">
                {title}
              </h3>
              <p className="font-sans text-base font-light leading-[1.67] text-body lg:text-[18px]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}