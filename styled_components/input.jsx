
import PropTypes from 'prop-types'; // Import PropTypes for validation
import styled from 'styled-components';

// Destructure props directly in the function signature
const Input = ({ placeholder, type, value, onChange, required, label }) => {
  return (
    <StyledWrapper>
      <div className="brutalist-container">
        <input 
          placeholder={placeholder} // Default placeholder
          className="brutalist-input smooth-type" 
          type={type } // Default type is "text"
          value={value} // Bind the value prop
          onChange={onChange} // Bind the onChange prop
          required={required} // Optional: Make input required based on props
        />
        <label className="brutalist-label">{label }</label>
      </div>
    </StyledWrapper>
  );
};

// PropTypes for validation
Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
};

// Default values for props (in case they are not passed)
Input.defaultProps = {
  placeholder: "TYPE HERE",
  type: "text",
  required: false,
  
};

const StyledWrapper = styled.div`
  .brutalist-container {
    position: relative;
  
    font-family: monospace;
  }

  .brutalist-input {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  .brutalist-input:focus {
    animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite,
      glitch 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  .brutalist-input:focus::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: white;
    z-index: -1;
  }

  .brutalist-input:focus::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: -2;
    clip-path: inset(0 100% 0 0);
    animation: glitch-slice 4s steps(2, end) infinite;
  }

  @keyframes glitch-slice {
    0% {
      clip-path: inset(0 100% 0 0);
    }
    10% {
      clip-path: inset(0 5% 0 0);
    }
    20% {
      clip-path: inset(0 80% 0 0);
    }
    30% {
      clip-path: inset(0 10% 0 0);
    }
    40% {
      clip-path: inset(0 50% 0 0);
    }
    50% {
      clip-path: inset(0 30% 0 0);
    }
    60% {
      clip-path: inset(0 70% 0 0);
    }
    70% {
      clip-path: inset(0 15% 0 0);
    }
    80% {
      clip-path: inset(0 90% 0 0);
    }
    90% {
      clip-path: inset(0 5% 0 0);
    }
    100% {
      clip-path: inset(0 100% 0 0);
    }
  }

  .brutalist-label {
    position: absolute;
    left: -3px;
    top: -35px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    padding: 5px 10px;
    transform: rotate(-1deg);
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .brutalist-input:focus + .brutalist-label {
    transform: rotate(0deg) scale(1.05);
    background-color: #4a90e2;
  }

  .smooth-type {
    position: relative;
    overflow: hidden;
  }

  .smooth-type::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .smooth-type:focus::before {
    opacity: 1;
    animation: type-gradient 2s linear infinite;
  }

  @keyframes type-gradient {
    0% {
      background-position: 300px 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .brutalist-input::placeholder {
    color: #888;
    transition: color 0.3s ease;
  }

  .brutalist-input:focus::placeholder {
    color: transparent;
  }

  .brutalist-input:focus {
    animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  @keyframes focus-pulse {
    0%,
    100% {
      border-color: #000;
    }
    50% {
      border-color: #4a90e2;
    }
  }`;

export default Input;