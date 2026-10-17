

import Link from 'next/link';


const CARDS = [
  {
    title: 'CBT',
    href: '/methods/cbt',
    text: 'Overthinking can feel like a loop you can’t step out of. With CBT, we’ll notice the thought patterns that keep anxiety going, test whether they’re really true, and practice new ways of responding that you can use between sessions.',
  },
  {
    title: 'EMDR',
    href: '/methods/emdr',
    text: 'EMDR can help with trauma when painful memories still feel as if they’re happening now. It lets your brain reprocess those experiences at a manageable pace, so they feel less intense and more like something that happened in the past.',
  },
  {
    title: 'Mindfulness',
    href: '/methods/mindfulness',
    text: 'When your mind never seems to stop, mindfulness gives you a way to pause. We’ll practice noticing your thoughts and feelings as they come up, without getting pulled under by them, so there’s a little more room between what you feel and how you react.',
  },
  {
    title: 'Body-Oriented Therapy',
    href: '/methods/body-oriented-therapy',
    text: 'Stress doesn’t only live in your head. We’ll pay attention to what shows up physically, like tension, restlessness, or trouble sleeping, and use grounding techniques to help your body feel safe enough to settle.',
  },
];

export default function ApproachSection() {
  return (
    <section id="methods" className="bg-mist">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 lg:grid-cols-[35%_1fr] lg:gap-0 lg:py-32 lg:pl-16 lg:pr-12 xl:pl-[120px] xl:pr-[68px]">
        
        <h2 className="font-serif text-4xl font-light leading-[1.25] text-ink lg:text-[42px]">
          My <span className="font-script text-[1.4em] italic text-mauve">approach</span>
          <span className="block">includes...</span>
        </h2>

      
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-16 lg:gap-y-[117px]">
          {CARDS.map(({ title, href, text }) => (
            <article key={title} className="flex flex-col">
              <h3 className="mb-6 font-serif text-2xl font-light leading-[1.2] text-ink lg:mb-8 lg:text-[28px]">
                {title}
              </h3>
              <p className="mb-8 font-sans text-base font-light leading-[1.67] text-body lg:mb-4 lg:text-[18px]">
                {text}
              </p>
              <Link
                href={href}
                className="mt-auto inline-block self-start border-b border-ink pb-1.5 font-sans text-[13px] uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-mauve hover:text-mauve"
              >
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}