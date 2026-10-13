'use client';

const BG_IMAGE = '/images/banner.jpg';

export default function FullWidthBanner() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[543px]">
   
      <img
        src={BG_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

  
      <div className="absolute inset-0 bg-ink/50" />

      
      <div className="relative z-10 flex h-full items-end px-6 pb-12 sm:pb-16 lg:px-16 lg:pb-[88px] xl:px-[120px]">
        <p className="max-w-[800px] font-serif text-3xl font-light leading-snug text-fog sm:text-4xl lg:text-[50px] lg:leading-[1.2]">
          You deserve a place to finally put it all down.{' '}
          <span className="italic">Whatever you’ve been carrying, we’ll go through it together, at your pace.</span>
        </p>
      </div>
    </section>
  );
}