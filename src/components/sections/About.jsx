import computer from '../../assets/computer.png';
import user from '../../assets/user-line.svg'
import project from '../../assets/suitcase-line.svg'
function About() {
  return (
    <div id="about" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="about-wrapper flex items-center gap-6">
          <div className="about-image w-1/2">
            <img src={computer} alt="computer" className='w-3/4 h-auto' />
          </div>
          <div className="about-content flex w-1/2 flex-col gap-5 text-left">
            <h3 className="text-4xl font-semibold bg-gradient-to-r from-primary-400 to-primary-100 bg-clip-text text-transparent">About Me</h3>
            <p className="text-white">
              I'm a frontend developer with expertise in building responsive and modern user interfaces using ReactJS
              and TailwindCSS. I also work with Webflow and WordPress to create flexible and visually engaging websites,
              combining code and no-code solutions for efficient results.
            </p>
            <div className="about-project flex flex-row gap-5">
              <div className="project-card flex w-full flex-col rounded-[8px] bg-gradient-to-r from-primary-500 to-primary-200 p-6">
                <img src={user} alt="" className='w-6 h-6 mb-2' />
                <p className="text-xl font-semibold text-white mb-1">Experience</p>
                <p className="text-sm text-neutral-100">1+ years</p>
              </div>
              <div className="project-card flex w-full flex-col rounded-[8px] bg-gradient-to-r from-neutral-400 to-neutral-200 p-6">
                <img src={project} alt="" className='w-6 h-6 mb-2' />
                <p className="text-xl font-semibold text-white mb-1">Projects</p>
                <p className="text-sm text-neutral-100">5+ completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
