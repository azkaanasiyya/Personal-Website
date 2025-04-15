import pokemon from '../../assets/pokemon.png';
import fundsphere from '../../assets/fundsphere.png';
import finwealth from '../../assets/finwealth.png';
import finwealthWordpress from '../../assets/finwealthWordpress.png';
function Project() {
  return (
    <div id="project" className="bg-primary-300">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="project-header flex flex-col items-center gap-[72px]">
          <h2 className="text-5xl font-bold leading-[57.6px] tracking-wide text-primary-500">Projects</h2>
          <div className='flex flex-col gap-[32px]'>
            <div className="project-wrapper grid grid-cols-3 gap-4">
              <div className="project-card flex flex-col gap-4 rounded-2xl">
                <div className="project-image w-full overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img src={pokemon} alt="pokemon" className="w-full rounded-2xl" />
                </div>
                <div
                  className="project-content flex w-full flex-grow flex-col justify-between 
                        rounded-[12px] bg-stone-50 px-[24px] py-[8px] text-left 
                        shadow-lg md:p-[16px] lg:p-[18px]"
                >
                  <h3 className="text-2xl font-semibold text-primary-500">Pokemon</h3>
                  <p className="text-base font-medium text-primary-400">React - Vite - Tailwind</p>
                </div>
              </div>
              <div className="project-card flex flex-col gap-4 rounded-2xl">
                <div className="project-image w-full overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img src={fundsphere} alt="fundsphere" className="w-full rounded-2xl" />
                </div>
                <div
                  className="project-content flex w-full flex-grow flex-col justify-between 
                        rounded-[12px] bg-stone-50 px-[24px] py-[8px] text-left 
                        shadow-lg md:p-[16px] lg:p-[18px]"
                >
                  <h3 className="text-2xl font-semibold text-primary-500">Fundsphere</h3>
                  <p className="text-base font-medium text-primary-400">React - Vite - Tailwind</p>
                </div>
              </div>
              <div className="project-card flex flex-col gap-4 rounded-2xl">
                <div className="project-image w-full overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img src={finwealth} alt="finwealth" className="w-full rounded-2xl" />
                </div>
                <div
                  className="project-content flex w-full flex-grow flex-col justify-between 
                        rounded-[12px] bg-stone-50 px-[24px] py-[8px] text-left 
                        shadow-lg md:p-[16px] lg:p-[18px]"
                >
                  <h3 className="text-2xl font-semibold text-primary-500">FinWealth</h3>
                  <p className="text-base font-medium text-primary-400">Webflow</p>
                </div>
              </div>
            </div>
            <div className="project-wrapper grid grid-cols-3 gap-4">
              <div className="project-card flex flex-col gap-4 rounded-2xl">
                <div className="project-image w-full overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img src={finwealthWordpress} alt="finW" className="w-full rounded-2xl" />
                </div>
                <div
                  className="project-content flex w-full flex-grow flex-col justify-between 
                        rounded-[12px] bg-stone-50 px-[24px] py-[8px] text-left 
                        shadow-lg md:p-[16px] lg:p-[18px]"
                >
                  <h3 className="text-2xl font-semibold text-primary-500">Pokemon</h3>
                  <p className="text-base font-medium text-primary-400">Elementor Wordpress</p>
                </div>
              </div>
              <div className="project-card flex flex-col gap-4 rounded-2xl">
                <div className="project-image w-full overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img src={finwealthWordpress} alt="finW" className="w-full rounded-2xl" />
                </div>
                <div
                  className="project-content flex w-full flex-grow flex-col justify-between 
                        rounded-[12px] bg-stone-50 px-[24px] py-[8px] text-left 
                        shadow-lg md:p-[16px] lg:p-[18px]"
                >
                  <h3 className="text-2xl font-semibold text-primary-500">Pokemon</h3>
                  <p className="text-base font-medium text-primary-400">Elementor Wordpress</p>
                </div>
              </div>
              <div className="project-card flex flex-col gap-4 rounded-2xl">
                <div className="project-image w-full overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img src={finwealthWordpress} alt="finW" className="w-full rounded-2xl" />
                </div>
                <div
                  className="project-content flex w-full flex-grow flex-col justify-between 
                        rounded-[12px] bg-stone-50 px-[24px] py-[8px] text-left 
                        shadow-lg md:p-[16px] lg:p-[18px]"
                >
                  <h3 className="text-2xl font-semibold text-primary-500">Pokemon</h3>
                  <p className="text-base font-medium text-primary-400">Elementor Wordpress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
