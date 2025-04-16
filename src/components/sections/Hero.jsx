import hero from '../../assets/cuate.svg'
function Hero() {
  return (
    <div id="hero" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="hero-wrapper flex items-center justify-between">
          <div className="hero-content flex flex-col gap-6">
            <div className="hero-header flex flex-col gap-2">
              <p className="font-medium text-primary-400">Hello, I'm Azka!</p>
              <h1 className="text-7xl font-semibold text-primary-300">
                Frontend<br></br>Developer
              </h1>
            </div>
            <div className="hero-text flex flex-col gap-6">
              <p className="max-w-[450px] text-white">
                I'm a Frontend Developer who loves to create beautiful and functional websites. I'm passionate about
                learning new technologies and improving my skills. I believe in continuous learning and always striving
                to become better.
              </p>
              <div className="button-wrapper flex flex-row gap-[15px]">
                <button className="h-[48px] rounded-full bg-primary-500 px-[24px] py-[8px] text-sm font-medium text-white hover:bg-primary-400">Get In Touch</button>
                <button className="h-[48px] rounded-full px-[24px] py-[8px] text-sm font-medium border-2 border-primary-400 text-white hover:bg-primary-400">Browse Project</button>
              </div>
            </div>
          </div>
          <div className="hero-logo">
            <img src={hero} alt="hero" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
