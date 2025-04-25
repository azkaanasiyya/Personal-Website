function SkillItem({ name, img, extraClass, link }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-transparent p-6 transition-all hover:scale-105 hover:border-[#FFFFFF1A]">
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={img} alt={name} className={`h-12 w-12 ${extraClass || ''}`} />
      </a>
      <p className="font-medium text-white">{name}</p>
    </div>
  );
}

export default SkillItem;
