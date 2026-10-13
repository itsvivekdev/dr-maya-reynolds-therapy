'use client';


const IMAGE = '/images/vision.jpg';

export default function VisionStatement() {
  return (
    <section className="bg-mist lg:py-[90px]">
      <div className="grid lg:grid-cols-[53.4%_1fr]">
        
        <div>
          <img
            src={IMAGE}
            alt="Two people wading in calm water at dusk under a soft purple sky"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[512px]"
          />
        </div>

     
        <div className="flex items-end px-6 py-12 lg:pb-0 lg:pl-16 lg:pr-8 lg:pt-0 xl:pr-[128px]">
          <h2 className="font-serif text-3xl font-light leading-[1.2] text-ink sm:text-4xl lg:text-[50px]">
            Making sense of where you’ve been{' '}
            <span className="px-2 font-script text-[1.3em] italic text-mauve">&amp;</span> reconnecting with who you are.
          </h2>
        </div>
      </div>
    </section>
  );
}