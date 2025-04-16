import deal from '../../assets/handshake.png';
function Footer() {
  return (
    <div className="bg-primary-300">
      <footer className="flex flex-col items-center rounded-t-[120px] border-t-2 bg-primary-200 pb-10">
        <div className="container flex w-full max-w-[1200px] flex-col items-center gap-8 px-32 py-32">
          <img src={deal} alt="deal" className="mb-4 h-32 w-32" />
          <h2 className="mb-10 text-center text-5xl font-semibold leading-tight text-primary-400">
            Tell me about your next <br /> project
          </h2>
          <div className="button-wrapper flex flex-row gap-[15px]">
            <button className="h-[48px] rounded-full bg-primary-500 px-[24px] py-[8px] text-sm font-medium text-white hover:bg-primary-400">
              Email Me
            </button>
            <button className="h-[48px] rounded-full border-2 border-primary-400 px-[24px] py-[8px] text-sm font-medium text-primary-500 hover:bg-primary-400">
              WhatsApp
            </button>
          </div>
        </div>
        <div className="flex w-full max-w-[1200px] flex-col border-t border-primary-400">
          <div className="mx-auto mt-10 flex w-full flex-row items-center justify-between gap-4 text-primary-500">
            <p>© 2024 All rights reserved.</p>
            <div className="flex gap-2 text-center text-primary-500 md:text-right">
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <span>/</span>
              <a href="#" className="hover:underline">
                Dribbble
              </a>
              <span>/</span>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
