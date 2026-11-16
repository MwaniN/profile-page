const linkClasses = 'hover:text-white focus-visible:text-white focus-visible:underline';

const Header = () => {

  return (
    <header className='flex items-center bg-gray-800 justify-center px-3 h-14 sticky top-0 z-50 w-full text-base md:text-xl md:justify-end'>
      <nav aria-label="Main">
      <ul className='text-blue-200 flex items-center whitespace-nowrap'>
        <li className='px-3 md:px-4'>
        <a href="#main" className={linkClasses}>Home</a>
          </li>
        <li className='px-3 md:px-4'>
        <a href="#about" className={linkClasses}>About</a>
        </li>
        <li className='px-3 md:px-4'>
        <a href="#projects" className={linkClasses}>Projects</a>
        </li>
        <li className='px-3 md:px-4 md:mr-16 lg:mr-20'>
        <a href="#contact" className={linkClasses}>Contact</a>
        </li>
      </ul>
      </nav>
  </header>
  )
}

export default Header;
