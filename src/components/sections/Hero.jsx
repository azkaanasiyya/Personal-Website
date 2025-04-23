import { motion } from 'framer-motion';
import hero from '../../assets/codinggirl.svg';
import HeroHeader from '../molecules/HeroHeader';
import HeroText from '../molecules/HeroText';
import Image from '../atoms/Image';

function Hero() {
  return (
    <section id="hero" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroHeader />
            <HeroText />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image src={hero} alt="hero" className="h-[420px] w-[420px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
