

import Link from 'next/link';


const IMAGES = {
  main: '/images/hero-main.jpg',
  slice: '/images/hero-slice.jpg',
};

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-fog pb-12 pt-4 lg:pt-0">
      <div className="grid lg:grid-cols-[34.5%_1fr_16.5%] lg:items-end">
       
        <div className="order-2 mx-6 mt-4 lg:order-1 lg:mx-0 lg:mt-0">
          <img
            src={IMAGES.main}
            alt="Woman standing in the ocean at dusk, looking out toward the horizon"
            className="h-90 w-full object-cover sm:h-115 lg:h-142"
          />
        </div>


        <div className="order-1 flex flex-col justify-between gap-10 px-6 lg:order-2 lg:h-142 lg:gap-0 lg:pb-4 lg:pl-[113px] lg:pr-0 lg:pt-4">
      
          <h1 className="max-w-xs font-sans text-[15px] font-normal uppercase leading-[1.8] tracking-[0.08em] text-ink">
            Anxiety &amp; Trauma Therapy in Santa Monica &amp; across CA
          </h1>

          <div>
           
            <h2 className="font-serif text-4xl font-light leading-[1.2] text-ink lg:text-[60px]">
              Ease the anxiety, steady your nerves, and finally begin to{' '}
              <span className="font-script text-[1.25em] italic text-mauve">exhale.</span>
            </h2>

            
            <p className="mt-6 max-w-[600px] font-sans text-base font-light leading-[1.7] text-body lg:text-[18px]">
              Evidence-based therapy for adults with anxiety, trauma, and burnout, in person or online.
            </p>

           
            <Link
              href="#contact"
              className="mt-8 inline-block border-b border-ink pb-1.5 font-sans text-[13px] uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-mauve hover:text-mauve lg:mt-10"
            >
              Book an appointment
            </Link>
          </div>
        </div>

        
        <div className="order-3 hidden lg:block">
          <img
            src={IMAGES.slice}
            alt=""
            aria-hidden="true"
            className="h-95 w-full translate-x-[52%] object-cover"
          />
        </div>
      </div>
    </section>
  );
}