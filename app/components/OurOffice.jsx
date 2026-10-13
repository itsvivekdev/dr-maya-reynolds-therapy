'use client';

const IMAGES = [
  {
    src: '/images/office1.jpeg',
    alt: 'Dr. Maya Reynolds’ therapy office in Santa Monica with natural light',
  },
  {
    src: '/images/office2.jpeg',
    alt: 'A quiet, uncluttered seating area in the therapy office',
  },
];

const DETAILS = [
  { label: 'In person', value: 'Santa Monica, CA' },
  { label: 'Online', value: 'Secure telehealth across California' },
  { label: 'Address', value: '123th Street 45 W, Santa Monica, CA 90401' },
];

const bodyText = 'font-sans text-base font-light leading-[1.67] text-body lg:text-[18px]';

export default function OurOffice() {
  return (
    <section id="office" className="overflow-hidden bg-dusk py-16 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
      
        <div className="px-6 lg:col-span-5 lg:pl-16 lg:pr-8 xl:pl-[120px]">
       
          <p className="mb-8 font-sans text-[15px] font-normal uppercase tracking-[0.1em] text-ink lg:mb-12">
            My office in Santa Monica
          </p>

          {/* Heading */}
          <h2 className="mb-8 font-serif text-4xl font-light leading-[1.2] text-ink lg:text-[50px]">
            A calm space to <span className="font-script text-[1.4em] italic text-mauve">arrive.</span>
          </h2>

          <div className="space-y-5">
            <p className={bodyText}>
              My office is a quiet, private space with plenty of natural light and a comfortable, uncluttered feel.
              It’s designed to feel calm and grounding, and many clients tell me the room itself helps them feel
              more at ease.
            </p>
            <p className={bodyText}>
              I see clients in person here in Santa Monica, and I also offer secure telehealth sessions for anyone
              located in California.
            </p>
          </div>

         
          <dl className="mt-10 lg:mt-12">
            {DETAILS.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 border-b border-ink/15 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="font-sans text-[15px] font-medium uppercase tracking-[0.08em] text-ink">
                  {label}
                </dt>
                <dd className="font-sans text-base font-light text-body sm:text-right lg:text-[18px]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>


        <div className="grid grid-cols-2 gap-4 px-6 lg:col-span-7 lg:gap-6 lg:px-0 lg:pl-4">
          {IMAGES.map(({ src, alt }, i) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className={`aspect-[4/5] w-full object-cover ${i === 1 ? 'mt-8 lg:mt-24' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}