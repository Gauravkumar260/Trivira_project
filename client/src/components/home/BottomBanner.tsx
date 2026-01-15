import Image from 'next/image';

const assets = {
  mascots: {
    lionMane: "/assets/images/mascot-lion-mane.svg",
    cordyceps: "/assets/images/mascot-cordyceps.svg",
    reishi: "/assets/images/mascot-reishi.svg",
    spirulina: "/assets/images/mascot-spirulina.svg",
    chlorella: "/assets/images/mascot-chlorella.svg",
    monkFruit: "/assets/images/mascot-monk-fruit.svg",
    stevia: "/assets/images/mascot-stevia.svg",
  },
  extras: {
    confetti: "/assets/images/confetti.svg",
  },
};

const BottomBanner = () => {
  return (
    <div className="bg-[#FCF2E7] w-full flex flex-col items-center justify-center py-8 md:py-[64px] gap-6 md:gap-[80px] overflow-hidden">
      <div className="bg-white rounded-[24px] md:rounded-[84px] px-6 py-4 md:px-16 md:py-8 shadow-sm flex flex-col md:flex-row items-center gap-3 md:gap-12 mx-4 text-center z-10 relative">
        <Image src={assets.extras.confetti} alt="Decoration" width={64} height={64} className="w-8 h-8 md:w-16 md:h-16" />
        <div className="flex flex-col items-center gap-0 md:gap-1">
          <span className="font-sans font-normal text-[#086938] text-sm md:text-[32px] leading-tight tracking-wide uppercase">WE DELIVER THE WELLNESS,</span>
          <span className="font-sans font-normal text-[#086938] text-sm md:text-[32px] leading-tight tracking-wide uppercase">OVER 100,000 HAPPY CUSTOMERS</span>
        </div>
        <Image src={assets.extras.confetti} alt="Decoration" width={64} height={64} className="w-8 h-8 md:w-16 md:h-16 " />
      </div>
      <div className="flex flex-nowrap justify-between items-end w-full max-w-[1384px] px-2 md:px-8 gap-1 md:gap-0">
        {[
          { img: assets.mascots.stevia, w: 'w-[10%]' },
          { img: assets.mascots.lionMane, w: 'w-[15%]' },
          { img: assets.mascots.cordyceps, w: 'w-[14%]' },
          { img: assets.mascots.reishi, w: 'w-[14%]' },
          { img: assets.mascots.spirulina, w: 'w-[14%]' },
          { img: assets.mascots.chlorella, w: 'w-[14%]' },
          { img: assets.mascots.monkFruit, w: 'w-[14%]' },
        ].map((mascot, index) => (
          <div key={index} className={`${mascot.w} shrink-0 transition-transform duration-300 hover:-translate-y-4 cursor-pointer flex justify-center`}>
            <Image src={mascot.img} alt="Mascot" width={200} height={200} className="w-full h-auto object-contain drop-shadow-xl md:max-w-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBanner;
