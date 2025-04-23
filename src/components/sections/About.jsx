import { motion } from 'framer-motion';
import computer from '../../assets/waiting.svg';
import user from '../../assets/user-line.svg';
import project from '../../assets/suitcase-line.svg';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import AboutCard from '../molecules/AboutCard';

function About() {
  return (
    <div id="about" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="about-wrapper flex items-center gap-6">
          <motion.div
            className="about-image w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={computer} alt="computer" className="h-auto w-[450px]" />
          </motion.div>

          <motion.div
            className="about-content flex w-1/2 flex-col gap-4 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Title>About Me</Title>
            <Text>
              I'm a frontend developer with expertise in building responsive and modern user interfaces using ReactJS
              and TailwindCSS. I also work with Webflow and WordPress to create flexible and visually engaging websites,
              combining code and no-code solutions for efficient results.
            </Text>

            <motion.div
              className="about-project flex flex-row gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AboutCard icon={user} title="Experience" subtitle="1+ years" variant="primary" />
              <AboutCard icon={project} title="Projects" subtitle="5+ completed" variant="neutral" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
