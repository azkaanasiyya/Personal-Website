import { Skills } from '../../data/Skills';
import SkillList from '../molecules/SkillList';
import Heading from '../atoms/Heading';

function Skill() {
  return (
    <div id="skill" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="skill-wrapper flex flex-col gap-[72px]">
          <div className="skill-header flex flex-col items-center gap-8">
            <Heading>Skills & Technologies</Heading>
          </div>
          <SkillList skills={Skills} />
        </div>
      </div>
    </div>
  );
}

export default Skill;
