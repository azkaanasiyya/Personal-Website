import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

function AboutCard({ icon, title, subtitle, variant }) {
  const bgClass =
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary-500 to-primary-200'
      : 'bg-gradient-to-r from-neutral-400 to-neutral-200';

  return (
    <div className={`project-card flex w-full flex-col rounded-[8px] p-6 ${bgClass}`}>
      <Icon src={icon} alt={title} className="mb-2" />
      <Text className="mb-1 text-xl font-semibold">{title}</Text>
      <Text className="text-sm text-neutral-100">{subtitle}</Text>
    </div>
  );
}

export default AboutCard;
