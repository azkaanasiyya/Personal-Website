// import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';

function Navbar() {
  return (
    <div className="navbar w-full bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-5 py-6 lg:px-8 lg:py-8">
        <div className="navbar-wrapper flex items-center justify-between">
          <div className="logo flex max-w-[138px] items-center space-x-4 font-semibold text-primary-500 lg:max-w-full">
            <a href="#hero">
              <img src={logoWhite} alt="logo" className='h-10' />
            </a>
          </div>

          <div className="navbar-block hidden lg:flex">
            <ul className="flex gap-[44px] text-base font-medium text-white">
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

          <div className="nav-right flex items-center gap-4">
            <button className="hidden h-[48px] rounded-full bg-primary-500 px-[32px] py-[8px] text-base font-medium text-white hover:bg-primary-400 lg:block">
              Contact
            </button>
            <i className="ri-menu-line block text-2xl lg:hidden"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
