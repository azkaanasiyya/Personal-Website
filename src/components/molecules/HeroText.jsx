import Text from '../atoms/Text';
import Button from '../atoms/Button';

function HeroText() {
  return (
    <div className="flex flex-col gap-6">
      <Text className="max-w-[450px]">
        Transforming ideas into interactive, pixel-perfect web interfaces. Driven by design systems, performance, and an
        obsession with clean code.
      </Text>
      <div className="flex flex-row gap-[15px]">
        <Button>Get In Touch</Button>
        <Button variant="outlined">Browse Project</Button>
      </div>
    </div>
  );
}

export default HeroText;
