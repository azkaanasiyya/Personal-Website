// import deal from '../../assets/handshake.png';
function Footer() {
  return (
    <div className="bg-neutral-500">
      <footer className="flex flex-col items-center border-t bg-transparent pb-10">
        <div className="container flex w-full max-w-[1200px] flex-col items-center gap-8 px-24 py-24">
          {/* <img src={deal} alt="deal" className="mb-4 h-32 w-32" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" color="white" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M13 3a5.4 5.4 0 0 1-1.902 1.178c-.748.132-2.818-.828-3.838.152c-.17.17-.38.34-.6.51c-.48-.21-1.22-.53-1.76-.84S3 3 3 3L0 6.5s.74 1 1.2 1.66c.3.44.67 1.11.91 1.56l-.34.4a.88.88 0 0 0 .15 1a.83.83 0 0 0 1.002-.002a.62.62 0 0 0 .077.881a1 1 0 0 0 1.006-.002a.806.806 0 0 0-.003 1.005a1.01 1.01 0 0 0 .892-.114a.82.82 0 0 0 .187.912a1.1 1.1 0 0 0 1.054-.092l.516-.467c.472.47 1.123.761 1.842.761l.061-.001a1.31 1.31 0 0 0 1.094-.791c.146.056.312.094.488.094c.236 0 .455-.068.64-.185c.585-.387.445-.687.445-.687a1.07 1.07 0 0 0 1.229-.279a.996.996 0 0 0 .138-1.215a.04.04 0 0 0 .021.005c.421 0 .787-.232.978-.574a1.56 1.56 0 0 0-.191-1.48l.003.005c.82-.16.79-.57 1.19-1.17a4.7 4.7 0 0 1 1.387-1.208zm-.05 7.06c-.44.44-.78.25-1.53-.32S9.18 8.1 9.18 8.1c.061.305.202.57.401.781c.319.359 1.269 1.179 1.719 1.599c.28.26 1 .78.58 1.18s-.75 0-1.44-.56s-2.23-1.94-2.23-1.94a.94.94 0 0 0 .27.72c.17.2 1.12 1.12 1.52 1.54s.75.67.41 1s-1.03-.19-1.41-.58c-.59-.57-1.76-1.63-1.76-1.63l-.001.053c0 .284.098.544.263.75c.288.378.848.868 1.188 1.248s.54.7 0 1s-1.34-.44-1.69-.8v-.002a.4.4 0 0 0-.1-.269a.9.9 0 0 0-.906-.188A.61.61 0 0 0 6 11.1a.754.754 0 0 0-.912.001a.61.61 0 0 0-.085-.95a1 1 0 0 0-1.174.08a.66.66 0 0 0-.068-.911a1 1 0 0 0-1.186-.128L1.91 8.069c-.46-.73-1-1.49-1-1.49l2.28-2.77s.81.5 1.48.88c.33.19.9.44 1.33.64c-.68.51-1.25 1-1.08 1.34a1.83 1.83 0 0 0 2.087.036a2.4 2.4 0 0 1 1.343-.403c.347 0 .677.072.976.203c.554.374 1.574 1.294 2.504 1.874c1.17.85 1.4 1.4 1.12 1.68z"
            />
          </svg>
          <h2 className="mb-10 text-center text-5xl font-semibold leading-tight text-white">
            Tell me about your next <br /> project
          </h2>
          <div className="button-wrapper flex flex-row gap-[15px]">
            <button className="h-[48px] rounded-full bg-primary-500 px-[24px] py-[8px] text-sm font-medium text-white hover:bg-primary-400">
              Email Me
            </button>
            <button className="h-[48px] rounded-full border-2 border-primary-400 px-[24px] py-[8px] text-sm font-medium text-neutral-50 hover:bg-primary-400">
              WhatsApp
            </button>
          </div>
        </div>
        <div className="flex w-full max-w-[1200px] flex-col border-t border-neutral-300">
          <div className="mx-auto mt-10 flex w-full flex-row items-center justify-between gap-4 text-sm text-neutral-50">
            <p>© 2024 All rights reserved.</p>
            <div className="flex gap-2 text-center text-sm text-neutral-50 md:text-right">
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
