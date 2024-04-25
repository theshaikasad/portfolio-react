import React, { useEffect, useState } from 'react';
import './App.css';
import MultiLayerParallax from "./MultiLayerParallax";
import MultiLayerParallax1 from "./MultiLayerParallax1";
import Terminal from './Terminal';

import ButtonWrapper from './ButtonWrapper';

// Import your images
import leftImage from './rose-left.png';
import rightImage from './rose.jpg';
import Example from './Example';

const Header = () => {
  return (
    <header className="sticky top-0 opacity-90 z-50 bg-black py-4 px-8 w-full flex justify-between items-center">
      <img src={require("./logo.png")} alt="Logo" className="flex space-x-4 h-10" />
      <nav>
        <ul className="flex space-x-4 font-bold text-white">
          <li><a href="#ABOUT" className="hover:text-yellow-400">About</a></li>
          <li><a href="#SKILLS" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#PROJECTS" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#PROJECTS" className="hover:text-yellow-400">Certifications</a></li>
          <li><a href="#CONTACT" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const ParallaxComponent = ({ imageUrl }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-bg"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(-${offsetY * 0.5}px)`,
          height: "100vh", // Ensure the background image covers the full screen height
        }}
      ></div>
      <div className="parallax-content">
        <h2 className="text-8xl font-bold text-white">Asad</h2>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <MultiLayerParallax />
      <Terminal/>
      <div id="ABOUT" className="w-full bg-[#000000]">
        <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
          <div className="flex justify-between">
            {/* Left image */}
            <img src={leftImage} alt="Left Image" className="h-80" />
            <div>
              <h2 className="text-8xl font-bold text-white opacity-1000">About</h2>
              <p>
                <br></br>
                Hey there! I am Asad, a 2nd year college student who is passionate about technology. I am particularly passionate about AI and BCI's.
                <br></br>
                <br></br>
                <h2 className="text-xl font-bold text-white">What I do currently?</h2>
                <br></br>
                I work on the crossroads of AI, web development and content creation
              </p>
            </div>
            {/* Right image */}
            
          </div>
          <p></p>
        </div>
      </div>
      <MultiLayerParallax1 />
      <ButtonWrapper buttonText="Python" />
      <ButtonWrapper buttonText="scikit-learn" />
      <ButtonWrapper buttonText="tensorflow" />
      <ButtonWrapper buttonText="Java" />
      <ButtonWrapper buttonText="HTML" />
      <ButtonWrapper buttonText="CSS" />
      <ButtonWrapper buttonText="JS" />
      <ButtonWrapper buttonText="matplotlib" />
      <ButtonWrapper buttonText="Tensorflow" />
      <ButtonWrapper buttonText="R" />
      <ButtonWrapper buttonText="React" />
      <ButtonWrapper buttonText="Google cloud" />
    
      <Example />

      <div id ="CONTACT" className="flex justify-center items-center bg-white">
      <div className="max-w-lg space-y-4 mx-auto py-24 text-black">

      <h2 className="text-8xl font-bold text-black opacity-1000">✉️  Contact</h2>
        <br></br>
      You can contact me through my email by clicking on this button: 
      <br></br>
      
      <br></br>

    <button onClick={() => window.location.href = "mailto:shaiksad17@gmail.com"} className="max-w-lg rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      EMAIL ME
    </button>
    <br></br>
        <br></br>
      </div>
      </div>
    </div>
  );
};

export default App;
