import { motion } from 'framer-motion';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import ProjectCard from '../molecules/ProjectCard';
import Projects from '../../data/Projects';
import { useState } from 'react';

function Project() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? Projects : Projects.slice(0, 3);

  return (
    <div id="project" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <motion.div
          className="project-header flex flex-col items-center gap-[72px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="project-header-wrapper flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Heading>Projects</Heading>
            <Paragraph className="text-lg text-white">
              Have a look at some of the rolled-out projects I'm proud of:
            </Paragraph>
          </motion.div>

          <div className="project-wrapper grid grid-cols-1 gap-4">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <button 
            className="text-white h-[48px] rounded-full px-[24px] py-[8px] text-sm font-medium bg-primary-500 hover:bg-primary-400"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
