import Image from 'next/image';
import certified1 from '@/assets/icons/certifications/Certified1.svg';
import certified2 from '@/assets/icons/certifications/Certified2.svg';
import certified3 from '@/assets/icons/certifications/Certified3.svg';
import certified4 from '@/assets/icons/certifications/Certified4.svg';
import certified5 from '@/assets/icons/certifications/Certified5.svg';

const assets = {
  icons: {
    iso: certified1,
    fda: certified2,
    nonGmo: certified3,
    haccp: certified4,
    gmp: certified5,
  },
};

const Certifications = () => {
  return (
    <div className="bg-[#086938] w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-4 py-12 md:px-[35px] md:h-[384px] h-auto">
      <div className="w-full flex flex-col items-center">
        <h3 className="font-sans font-medium text-2xl md:text-[32px] text-[#FCF2E7] text-center mb-8 md:mb-[67px] tracking-normal leading-normal">
          Certified By
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[assets.icons.iso, assets.icons.fda, assets.icons.nonGmo, assets.icons.haccp, assets.icons.gmp].map((icon, i) => (
            <div key={i} className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
              <Image src={icon.src} alt="Certification Badge" width={128} height={128} className="h-16 md:h-24 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
