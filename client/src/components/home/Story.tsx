import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import storyImage from '@/assets/images/Story/story.svg';

const assets = {
  extras: {
    founder: storyImage.src,
  },
};

const Story = () => {
  return (
    <div className="bg-white w-full flex justify-center py-10 px-4 md:py-[42px] md:px-[78px]">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-stretch gap-8 md:gap-5">
        <div className="w-full md:w-1/2 h-full min-h-[300px] md:min-h-[476px]">
          <Image src={assets.extras.founder} alt="Sachin Trivedi" width={600} height={476} className="w-full h-full object-cover rounded-[24px] grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
        <div className="w-full md:w-1/2 bg-[#fcf4ef] border border-[#3f8133] rounded-[24px] p-6 md:p-9 flex flex-col justify-center gap-6 md:gap-7">
          <h2 className="font-sans font-bold text-[#3f8133] text-2xl md:text-[24px] text-center md:text-left">The Guy Behind the Trivira</h2>
          <div className="font-sans font-normal text-[#3f8133] text-base leading-relaxed text-center md:text-left">
            <p><span className="font-semibold">Trivira Global Enterprise</span> was founded by <span className="font-semibold">Sachin Trivedi</span>, inspired by the strength of his two elder brothers and the support of his closest friends. Rooted in trust, care, and togetherness, the name <span className="font-semibold">Trivira</span> reflects this bond and vision. Sachin’s mission is to bring plant-based protein, medicinal mushrooms, and superfoods into the everyday lives of people across India.</p>
            <br />
            <p>Blending the wisdom of tradition with the rigor of modern science, Trivira creates premium, natural wellness products that nurture both health and nature. Every product carries a promise — to empower healthier lifestyles, spread awareness of natural nutrition, and make wellness accessible to every home in India.</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="/about">
              <Button variant="primary" className="bg-[#3f8133] px-6 py-3 w-full md:w-auto">READ OUR STORY</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
