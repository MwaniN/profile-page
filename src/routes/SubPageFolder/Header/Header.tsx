import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <header className='flex items-center bg-gray-800 justify-center px-3 py-3 sticky top-0 w-full text-base md:text-xl md:justify-end font-hindSilliguri font-thin'>
      <ul className='text-blue-200 flex items-center'>
        <li className='px-3 md:px-4 hover:text-white focus:text-white focus:outline-none'>
        <Link to="/#main">Home</Link>
          </li>
        <li className='px-3 md:px-4 hover:text-white focus:text-white focus:outline-none'>
        <Link to="/#about">About</Link>
        </li>
        <li className='px-3 md:px-4 hover:text-white focus:text-white focus:outline-none'>
        <Link to="/#projects">Projects</Link>
        </li>
        <li className='px-3 md:px-4 md:mr-18 lg:mr-20 hover:text-white focus:text-white focus:outline-none'>
        <Link to="/#contact">Contact</Link>
        </li>
      </ul>
  </header>
  )
}

export default Header;