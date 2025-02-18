import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className = 'w-full py=5 sm:px-10'>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
      </nav>

      <div>
        {['Phones', 'Macbooks', 'Tablets'].map((nav, i) => (
          <div key={nav}> {/* Add the key prop here */}
            {nav}
          </div>
        ))}
      </div>

      <div>
        <img src={searchImg} alt="search" width={18} height={18} />
        <img src={bagImg} alt="bag" width={18} height={18} />
      </div>
    </header>
  );
}

export default Navbar;
