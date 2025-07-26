import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const baseClass =
    'relative px-3 py-2 text-sm font-semibold transition-all duration-300';
  const inactiveClass = 'text-gray-700 hover:text-blue-600';
  const activeClass =
    'text-blue-700 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-blue-400 after:to-cyan-500 after:transition-all after:duration-300';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md px-6 py-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-bold text-blue-700">BookingApp</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-booking"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              New Booking
            </NavLink>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-blue-600 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-800" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-blue-800" />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-blue-700" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2 bg-white rounded-md shadow-inner py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClass} block w-full ${isActive ? activeClass : inactiveClass}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `${baseClass} block w-full ${isActive ? activeClass : inactiveClass}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Bookings
          </NavLink>
          <NavLink
            to="/new-booking"
            className={({ isActive }) =>
              `${baseClass} block w-full ${isActive ? activeClass : inactiveClass}`
            }
            onClick={() => setMenuOpen(false)}
          >
            New Booking
          </NavLink>

          {/* Mobile Social Icons */}
          <div className="flex justify-center gap-4 pt-4 text-blue-600 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-blue-800" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

