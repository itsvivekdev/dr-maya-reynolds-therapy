

import Link from 'next/link';

const IMAGES = {
  slice: '/images/book-slice.jpg',
  main: '/images/book-main.jpg',
};

const bodyText = 'font-sans text-base font-light leading-[1.67] text-body lg:text-[18px]';

export default function BookASession() {
  return (
    <section id="contact" className="overflow-hidden bg-fog lg:pb-[126px] lg:pt-[90px]">
      <div className="grid lg:grid-cols-[16.6%_48.9%_34.5%] lg:items-end">
     
        <div className="hidden lg:block">
          <img
            src={IMAGES.slice}
            alt=""
            aria-hidden="true"
            className="h-[479px] w-full -translate-x-[29%] object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-12 px-6 py-16 lg:h-[591px] lg:gap-0 lg:px-12 lg:py-0">
      
          <p className="font-sans text-[15px] font-normal uppercase tracking-[0.1em] text-ink">
            BOOK A SESSION
          </p>

          <div className="max-w-[500px]">
            <h2 className="font-serif text-4xl font-light leading-[1.2] text-ink lg:text-[48px]">
              Let’s see if we’re a good fit,{' '}
              <span className="font-script text-[1.4em] italic text-mauve">together.</span>
            </h2>

            <p className={`${bodyText} mt-8`}>
              Reaching out can feel like a big step, even when you know you need some support. Whether you’d like to meet in my quiet Santa Monica office or online from anywhere in California, I’ll help you find a time that works and answer any questions about what to expect. You don’t need to have it all figured out first. Start by telling me what’s been going on, and we’ll take it from there.
            </p>

            <p className={`${bodyText} mb-5 mt-4`}>Use the button below to book your first session.</p>

           
            <Link
              href="/contact"
              className="inline-block w-max rounded-[50%] border border-ink px-5 py-3.5 font-sans text-[14px] font-normal uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:bg-ink hover:text-fog"
            >
              Book now
            </Link>
          </div>
        </div>

        <div>
          <img
            src={IMAGES.main}
            alt="Person standing at the water's edge, looking out over the sea"
            className="h-[400px] w-full object-cover lg:h-[591px]"
          />
        </div>
      </div>
    </section>
  );
}