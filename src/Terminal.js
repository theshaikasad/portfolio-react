import React, { useState } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([{ text: 'Type "help" for available commands', type: 'default' }]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  const processCommand = (command) => {
    switch (command.trim()) {
      case 'help':
        setOutput([{ text: 'Available commands:', type: 'info' }, { text: '- help: Display available commands', type: 'info' }, { text: '- about: Display information about Asad', type: 'info' }, { text: '- projects: display projects', type: 'info' }]);
        break;
      case 'about':
        setOutput([{ text: 'Hi, My name is Asad. I am a 2nd year college student, I am passionate about Artifical Intelligence, and Web development', type: 'info' }]);
        break;
      case 'projects':
        setOutput([{ 
          text: 'All my projects are on GitHub. You can find them <a href="https://github.com/theshaikasad">here</a>.', 
          type: 'info' 
        }]);
        break;
        
      default:
        setOutput([{ text: `Command not found: ${command}`, type: 'error' }]);
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal">
        <div className="input">
          <span>$</span>
          <input type="text" value={input} onChange={handleInputChange} onKeyPress={handleEnterPress} />
        </div>
        <div className="output">
          {output.map((line, index) => (
            <div key={index} className={`output-line ${line.type}`} dangerouslySetInnerHTML={{ __html: line.text }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
