function SkillItem({ name, img, extraClass }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-transparent p-6 transition-all hover:scale-105 hover:border-[#FFFFFF1A]">
      <img src={img} alt={name} className={`h-12 w-12 ${extraClass || ''}`} />
      <p className="font-medium text-white">{name}</p>
    </div>
  );
}

export default SkillItem;
