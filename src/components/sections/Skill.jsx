import { Skills } from "../../data/Skills";
import SkillList from "../molecules/SkillList";

function Skill() {
  return (
    <div id="skill" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="skill-wrapper flex flex-col gap-[72px]">
          <div className="skill-header flex flex-col items-center gap-8">
            <p className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-4xl font-bold leading-[57.6px] tracking-wide text-transparent">
              Skills & Technologies
            </p>
          </div>
          <SkillList skills={Skills} />
        </div>
      </div>
    </div>
  );
}

export default Skill;
