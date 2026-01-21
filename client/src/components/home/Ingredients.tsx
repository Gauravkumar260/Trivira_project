import Image from 'next/image';
import better1 from '@/assets/icons/Better/Better1.svg';
import better2 from '@/assets/icons/Better/Better2.svg';
import better3 from '@/assets/icons/Better/Better3.svg';
import better4 from '@/assets/icons/Better/Better4.svg';
import better5 from '@/assets/icons/Better/Better5.svg';

const assets = {
  icons: {
    gelatinFree: better1.src,
    glutenFree: better2.src,
    nonGmoBadge: better3.src,
    soyFree: better4.src,
    vegan: better5.src,
  },
};

interface IngredientBadge { label: string; icon: string; }

const ingredients: IngredientBadge[] = [
  { label: 'Gelatin Free', icon: assets.icons.gelatinFree },
  { label: 'Gluten Free', icon: assets.icons.glutenFree },
  { label: 'Non GMO', icon: assets.icons.nonGmoBadge },
  { label: 'Soy-Free', icon: assets.icons.soyFree },
  { label: 'Vegan Friendly', icon: assets.icons.vegan }
];

const Ingredients = () => {
  return (
    <div className="bg-[#086938] w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-4 py-12 md:p-[32px_104px] gap-8 md:gap-[52px]">
      <div className="max-w-4xl text-center flex flex-col items-center gap-8">
        <h2 className="font-sans font-bold text-[#ffebd5] text-3xl md:text-4xl text-center leading-[1.2]">Better For You Formulation</h2>
        <p className="font-rubik text-[#fcf4ef] text-lg md:text-[22px] text-center tracking-[-0.44px] leading-[26.4px]">
          Made with premium mushroom extracts, our supplements are crafted for quality, taste, and effectiveness in a state-of-the-art, cGMP facility.
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-8 w-full max-w-[1214px]">
        {ingredients.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 group cursor-default shrink-0">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#3f8133] flex items-center justify-center mb-2 relative transition-transform transform group-hover:scale-110 shadow-md">
              <Image src={item.icon} alt={item.label} width={60} height={60} className="h-[40px] md:h-[60px] w-auto object-contain" />
            </div>
            <span className="font-sans font-semibold text-white text-base md:text-[20px] text-center tracking-[-0.44px] leading-[26.4px] whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
