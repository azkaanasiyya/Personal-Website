import SkillItem from '../atoms/SkillItem';

function SkillList({ skills }) {
  return (
    <div className="skill-content grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  );
}

export default SkillList;
