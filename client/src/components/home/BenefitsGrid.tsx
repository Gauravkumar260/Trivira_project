import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';

const assets = {
  icons: {
    focus: "/assets/images/icon-focus.svg",
    energy: "/assets/images/icon-energy.svg",
    calm: "/assets/images/icon-calm.svg",
    heart: "/assets/images/icon-heart.svg",
  },
};

interface BenefitItem { icon: string; title: string; color: string; desc: string; btnText: string; }

const benefitItems: BenefitItem[] = [
  { icon: assets.icons.focus, title: "Focus", color: "text-[#da483b]", desc: "Lion's Mane Mushrooms promotes a cognitive boost and enhanced focus to help start your day.", btnText: "SHOP LION'S MANE" },
  { icon: assets.icons.energy, title: "Energy", color: "text-[#f89920]", desc: "Cordyceps Mushrooms are ideal for an extra energy surge to boost your stamina and endurance.", btnText: "SHOP CORDYCEPS" },
  { icon: assets.icons.calm, title: "Calm", color: "text-[#9f3691]", desc: "Reishi Mushrooms, known for their calming properties, can help you to unwind and relax.", btnText: "SHOP REISHI" },
  { icon: assets.icons.heart, title: "Heart Health", color: "text-[#ea236f]", desc: "Spirulina is a nutrient-rich superfood known for boosting immunity, supporting heart health.", btnText: "SHOP SPIRULINA" }
];

const BenefitsGrid = () => {
  return (
    <div className="bg-[#FCF2E7] w-full flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center px-4 py-12 md:p-[52px_78px] gap-10 md:gap-[64px]">
        <header className="flex flex-col w-full max-w-[1234px] gap-4 items-center justify-center text-center">
          <h1 className="font-sans font-bold text-[#3f8133] text-3xl md:text-[32px] leading-none tracking-[0%]">
            What&apos;s your Benefits?
          </h1>
          <p className="font-rubik text-[#086938] text-lg md:text-xl leading-[26.4px] tracking-[-0.44px] max-w-[800px]">
            Our daily superfood mushroom tablets offer unique health benefits that
            can be seamlessly incorporated into your daily routine.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[22px] w-full">
          {benefitItems.map((item, index) => (
            <article key={index} className="flex flex-col items-center justify-between gap-[37px] px-2 py-[31px] bg-[#fcf4ef] rounded-2xl border border-[#3f8133] shadow-[0px_2px_8px_#0000001f] hover:-translate-y-2 transition-transform duration-300 h-full">
              <div className="flex flex-col w-full items-center justify-center gap-3">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} width={100} height={100} className="w-full h-full object-contain p-2" />
                </div>
                <h2 className={`font-sans font-medium ${item.color} text-2xl text-center tracking-[-0.44px] leading-[26.4px]`}>
                  {item.title}
                </h2>
              </div>
              <p className="font-rubik text-[#086938] text-base text-center leading-[22.4px] w-[90%]">
                {item.desc}
              </p>
              <Link href="/products" className="w-full md:w-auto">
                <Button variant="outline" className={`w-full group-hover:bg-[#3f8133] group-hover:text-white`}>
                  {item.btnText}
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
