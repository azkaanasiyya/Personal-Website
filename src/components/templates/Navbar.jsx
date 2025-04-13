function Navbar() {
  return (
    <div className="navbar w-full bg-primary-300">
      <div className="container mx-auto max-w-[1200px] px-5 py-6 lg:px-8 lg:py-8">
        <div className="navbar-wrapper flex items-center justify-between">
          <div className="logo flex max-w-[138px] items-center space-x-4 font-semibold text-yellow-950 lg:max-w-full">
            <a href="#hero">azkaanasiyya@gmail.com</a>
          </div>
          <div className="navbar-block flex items-center">
            <ul
              className={`flex w-full flex-row
              gap-[44px] rounded bg-primary-300 text-base 
              font-medium text-neutral-500`}
            >
              <li>
                <a href="#plans" className="hover:text-primary-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-primary-500">
                  Project
                </a>
              </li>
              <li>
                <a href="#testimony" className="hover:text-primary-500">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-button ml-auto gap-[8px] text-base flex">
            <button className="h-[48px] gap-[8px] rounded-full bg-primary-500 px-[32px] py-[8px] font-medium text-white hover:bg-primary-300">
              Contact
            </button>
          </div>
          <div>
            <i className="ri-menu-line block text-2xl lg:hidden"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
