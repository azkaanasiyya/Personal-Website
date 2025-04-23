import { motion } from 'framer-motion';
import { Skills } from '../../data/Skills';
import SkillList from '../molecules/SkillList';
import Heading from '../atoms/Heading';

function Skill() {
  return (
    <div id="skill" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <motion.div
          className="skill-wrapper flex flex-col gap-[72px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="skill-header flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Heading>Skills & Technologies</Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillList skills={Skills} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skill;
