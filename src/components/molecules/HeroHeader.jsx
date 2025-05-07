import Text from '../atoms/Text';
import Heading from '../atoms/HeroHeading';

function HeroHeader() {
  return (
    <div className="flex flex-col gap-3">
      <Text className="text-primary-200">Hello, I'm Azka!</Text>
      <Heading>
        Frontend
        <br />
        Developer
      </Heading>
    </div>
  );
}

export default HeroHeader;
