import hero from '../../assets/codinggirl.svg';
import HeroHeader from '../molecules/HeroHeader';
import HeroText from '../molecules/HeroText';
import Image from '../atoms/Image';

function Hero() {
  return (
    <section id="hero" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <HeroHeader />
            <HeroText />
          </div>
          <Image src={hero} alt="hero" className="h-[420px] w-[420px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
