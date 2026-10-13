'use client';


const COLUMNS = [
  ['ANXIETY', 'PANIC', 'TRAUMA', 'COMPLEX TRAUMA', 'BURNOUT', 'PERFECTIONISM'],
  ['OVERTHINKING', 'EMOTIONAL EXHAUSTION', 'SLEEP & BODY TENSION', 'RELATIONSHIPS & CONFIDENCE', 'WORK STRESS', '...AND MORE.'],
];

export default function FocusAreas() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 lg:grid-cols-[32%_1fr] lg:gap-0 lg:px-16 lg:py-32 xl:px-[120px]">
      
        <h2 className="font-serif text-3xl font-light leading-[1.2] text-ink lg:self-start lg:pt-7 lg:text-[42px]">
          What I
          <span className="block font-script text-[1.4em] italic text-mauve">focus on</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:gap-x-[62px]">
          {COLUMNS.map((items, i) => (
            <ul key={i}>
              {items.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-6 font-sans text-[15px] font-normal uppercase tracking-[0.08em] text-ink md:last:border-b-0 lg:py-[25px]"
                >
                  <span className="cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}