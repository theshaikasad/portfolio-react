import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isHovered: false // Define isHovered in the state
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const { isMenuOpen, isHovered } = this.state; // Destructure isHovered from state

    return (
      <header className="bg-white bg-opacity-50 sticky static fixed top-0 left-0 right-0 flex justify-between items-center px-5 py-5">
        {/* Navbar content */}
        <div>
          {/* Logo or Profile Picture */}
        </div>
        <div className=" text-white text-center text-2xl font-light flex justify-center items-center">
          {/* Asad */}
          Asad
        </div>
        <div className="relative inline-block text-left">
          <div>
            <button 
              type="button" 
              className={`inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold ${isMenuOpen ? 'text-black' : 'text-white'} shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`} 
              id="menu-button" 
              aria-expanded={isMenuOpen} 
              aria-haspopup="true"
              onClick={this.toggleMenu}
              onMouseEnter={() => this.setState({ isHovered: true })}
              onMouseLeave={() => this.setState({ isHovered: false })}
              > 
              <svg className={`-mr-1 h-5 w-5 ${isHovered ? 'text-black' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="bg-opacity-50 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1" role="none">
                <a href="#" className="text-white block px-4 py-2 text-sm bg-opacity-70 hover:bg-opacity-100" role="menuitem" tabIndex="-1" id="menu-item-0">Terminal</a>
                <a href="#" className="text-white block px-4 py-2 text-sm bg-opacity-70 hover:bg-opacity-100" role="menuitem" tabIndex="-1" id="menu-item-1">Projects</a>
                <a href="#" className="text-white block px-4 py-2 text-sm bg-opacity-70 hover:bg-opacity-100" role="menuitem" tabIndex="-1" id="menu-item-2">Certifications</a>
                <a href="#" className="text-white block px-4 py-2 text-sm bg-opacity-70 hover:bg-opacity-100" role="menuitem" tabIndex="-1" id="menu-item-3">Education</a>
                <a href="#Experience" className="text-white block px-4 py-2 text-sm bg-opacity-70 hover:bg-opacity-100" role="menuitem" tabIndex="-1" id="menu-item-4">Experience</a>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
