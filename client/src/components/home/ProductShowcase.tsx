import Image from 'next/image';
import { Button } from '@/components/ui';

const assets = {
  icons: {
    heartPlus: "/assets/images/icon-heart-plus.svg",
    weight: "/assets/images/icon-weight.svg",
    stomach: "/assets/images/icon-stomach.svg",
    puzzle: "/assets/images/icon-puzzle.svg",
    body: "/assets/images/icon-body.svg",
    drop: "/assets/images/icon-drop.svg",
    metabolism: "/assets/images/icon-metabolism.svg",
  },
  products: {
    protein: "/assets/images/product-protein.svg",
    mushroom: "/assets/images/product-mushroom.svg",
    stevia: "/assets/images/product-stevia.svg",
  },
};

interface ProductBenefit { icon: string; text: string; }
interface Product { id: string; title: string; desc: string; image: string; iconClass: string; iconColor: string; benefits: ProductBenefit[]; btnText: string; reverse: boolean; }

const products: Product[] = [
  {
    id: "protein", title: "Plant Based Protein Powder",
    desc: "Forget about complicated process of shaking and lumps - simply put one scoop of these delicious flavors of Protein Powder into your shaker and let it work its cognitive magic.",
    image: assets.products.protein, iconClass: "fas fa-leaf", iconColor: "text-[#086938]",
    benefits: [ { icon: assets.icons.heartPlus, text: "Improves heart health" }, { icon: assets.icons.weight, text: "Better weight management" }, { icon: assets.icons.stomach, text: "Enhanced digestive function" } ],
    btnText: "SHOP PROTEIN POWDER", reverse: false
  },
  {
    id: "mushroom", title: "Functional mushroom",
    desc: "Functional mushrooms are not psychedelic. Instead, they contain several medicinal compounds that strengthen gut health, immune health, and energy levels.",
    image: assets.products.mushroom, iconClass: "fas fa-magic", iconColor: "text-orange-500",
    benefits: [ { icon: assets.icons.heartPlus, text: "Anti-ageing properties" }, { icon: assets.icons.puzzle, text: "Stress Relief" }, { icon: assets.icons.body, text: "Boosting Immune System" } ],
    btnText: "SHOP FUNCTIONAL MUSHROOM", reverse: true
  },
  {
    id: "stevia", title: "Stevia",
    desc: "Stevia is a natural sweetener extracted from the leaves of Stevia rebaudiana plant. Stevia is reported to be 200 to 400 times sweeter than table sugar but has zero calories.",
    image: assets.products.stevia, iconClass: "fas fa-leaf", iconColor: "text-green-600",
    benefits: [ { icon: assets.icons.drop, text: "Blood Sugar Regulation" }, { icon: assets.icons.weight, text: "Weight Management" }, { icon: assets.icons.metabolism, text: "Antioxidant Properties" } ],
    btnText: "SHOP STEVIA", reverse: false
  }
];

const ProductShowcase = () => {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center px-4 py-12 md:p-[78px] gap-12 md:gap-[84px]">
        <div className="text-center w-full flex flex-col items-center gap-4">
          <h2 className="font-sans font-bold text-[#3f8133] text-3xl md:text-4xl text-center leading-[1.2]">
            Our Products
          </h2>
          <p className="font-rubik text-[#086938] text-lg md:text-[22px] text-center tracking-[-0.44px] leading-[26.4px] max-w-[800px]">
            Experience Our other Products made for the whole family. Delicious and effective, they're crafted to support focus, energy, immunity, and overall wellness.
          </p>
        </div>
        <div className="w-full flex flex-col gap-12 md:gap-[84px]">
          {products.map((product) => (
            <div key={product.id} className={`flex flex-col ${product.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-[18px] items-center justify-center w-full`}>
              <div className="w-full md:w-1/2 bg-[#fcf4ef] rounded-[32px] px-6 py-8 md:px-[42px] md:py-[46px] flex flex-col justify-center gap-8 md:gap-[40px] shadow-sm h-auto md:h-[594px]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 relative">
                    <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[5px] bg-white/50 flex items-center justify-center border border-[#3f8133]/20 shrink-0">
                      <i className={`${product.iconClass} text-2xl ${product.iconColor}`}></i>
                    </div>
                    <h3 className="font-sans font-semibold text-[#3f8133] text-2xl md:text-[32px] leading-tight">{product.title}</h3>
                  </div>
                  <p className="font-rubik font-medium text-[#3f8133] text-base leading-6">{product.desc}</p>
                </div>
                <ul className="flex flex-col gap-4 md:gap-6 p-1 md:p-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
                        <Image src={benefit.icon} alt="" width={28} height={28} className="w-full h-full object-contain"/>
                      </div>
                      <span className="font-sans font-medium text-[#3f8133] text-base leading-6">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className="self-start px-6 py-3 w-full md:w-auto">
                  {product.btnText}
                </Button>
              </div>
              <div className="w-full md:w-1/2 h-[300px] md:h-[594px]">
                <Image src={product.image} alt={product.title} width={594} height={594} className="w-full h-full object-cover rounded-[32px] hover:scale-105 transition-transform duration-500 shadow-sm"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
