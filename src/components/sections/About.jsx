import computer from '../../assets/computer.png';
import user from '../../assets/user-line.svg';
import project from '../../assets/suitcase-line.svg';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import AboutCard from '../molecules/AboutCard';

function About() {
  return (
    <div id="about" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="about-wrapper flex items-center gap-6">
          <div className="about-image w-1/2">
            <img src={computer} alt="computer" className="h-auto w-3/4" />
          </div>
          <div className="about-content flex w-1/2 flex-col gap-4 text-left">
            <Title>About Me</Title>
            <Text>
              I'm a frontend developer with expertise in building responsive and modern user interfaces using ReactJS
              and TailwindCSS. I also work with Webflow and WordPress to create flexible and visually engaging websites,
              combining code and no-code solutions for efficient results.
            </Text>
            <div className="about-project flex flex-row gap-5">
              <AboutCard icon={user} title="Experience" subtitle="1+ years" variant="primary" />
              <AboutCard icon={project} title="Projects" subtitle="5+ completed" variant="neutral" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
