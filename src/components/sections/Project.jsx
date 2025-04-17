import pokemon from '../../assets/pokemon.png';
import fundsphere from '../../assets/fundsphere.png';
import finwealth from '../../assets/finwealth.png';
import finwealthWordpress from '../../assets/finwealthWordpress.png';
function Project() {
  return (
    <div id="project" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="project-header flex flex-col items-center gap-[72px]">
          <div className="project-header-wrapper flex flex-col items-center gap-8">
            <h2 className="text-5xl font-bold leading-[57.6px] tracking-wide bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">Projects</h2>
            <p className="text-lg text-white">Have a look at some of the rolled-out projects I'm proud of:</p>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="project-wrapper grid grid-cols-1 gap-4">
              <div className="project-card flex items-center gap-6 rounded-2xl bg-transparent border p-8 shadow-lg">
                <div className="project-image w-1/2">
                  <img src={pokemon} alt="pokemon" className="w-full rounded-xl" />
                </div>
                <div className="project-content flex w-1/2 flex-col justify-between text-left">
                  <h3 className="mb-4 text-2xl font-bold text-neutral-50">Pokemon</h3>
                  <p className="mb-4 text-base text-neutral-200">
                    UX design of the Pokemon project interface. Web app built using React, Vite and TailwindCSS.
                  </p>
                  <a
                    href="https://pokemon-tawny-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    View project
                  </a>
                </div>
              </div>

              <div className="project-card flex items-center gap-6 rounded-2xl bg-transparent border p-8 shadow-lg">
                <div className="project-image w-1/2">
                  <img src={fundsphere} alt="fundsphere" className="w-full rounded-xl" />
                </div>
                <div className="project-content flex w-1/2 flex-col justify-between text-left">
                  <h3 className="mb-4 text-2xl font-bold text-neutral-50">Fundsphere</h3>
                  <p className="mb-4 text-base text-neutral-200">
                    UX design of the Pokemon project interface. Web app built using React, Vite and TailwindCSS.
                  </p>
                  <a
                    href="https://fundsphere-ashy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    View project
                  </a>
                </div>
              </div>

              <div className="project-card flex items-center gap-6 rounded-2xl bg-transparent border p-8 shadow-lg">
                <div className="project-image w-1/2">
                  <img src={finwealth} alt="pokemon" className="w-full rounded-xl" />
                </div>
                <div className="project-content flex w-1/2 flex-col justify-between text-left">
                  <h3 className="mb-4 text-2xl font-bold text-neutral-50">FinWealth</h3>
                  <p className="mb-4 text-base text-neutral-200">
                    UX design of the Pokemon project interface. Web app built using React, Vite and TailwindCSS.
                  </p>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
                    View project
                  </a>
                </div>
              </div>
              <div className="project-card flex items-center gap-6 rounded-2xl bg-transparent border p-8 shadow-lg">
                <div className="project-image w-1/2">
                  <img src={finwealthWordpress} alt="pokemon" className="w-full rounded-xl" />
                </div>
                <div className="project-content flex w-1/2 flex-col justify-between text-left">
                  <h3 className="mb-4 text-2xl font-bold text-neutral-50">FinWealth</h3>
                  <p className="mb-4 text-base text-neutral-200">
                    UX design of the Pokemon project interface. Web app built using React, Vite and TailwindCSS.
                  </p>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
                    View project
                  </a>
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
