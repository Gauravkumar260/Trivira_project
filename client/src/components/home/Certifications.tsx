import Image from 'next/image';

const assets = {
  icons: {
    iso: "/assets/images/icon-iso.svg",
    fda: "/assets/images/icon-fda.svg",
    nonGmo: "/assets/images/icon-non-gmo.svg",
    haccp: "/assets/images/icon-haccp.svg",
    gmp: "/assets/images/icon-gmp.svg",
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
              <Image src={icon} alt="Certification Badge" width={128} height={128} className="h-16 md:h-24 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
