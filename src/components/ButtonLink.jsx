import PropTypes from 'prop-types';

const ButtonPrimary = ({ text, className = '', onClick }) => {
  return (
    <div>
        <button
          type='button'
          onClick={onClick}
          className={`btn-link ${className}`}
        >
        {text}
        <div className='link-arrow-container'>
          <svg width="12" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.85183 6.66367H9.75332L5.66463 10.7524L6.70326 11.7837L12.5547 5.93224L6.70326 0.0808105L5.67194 1.11212L9.75332 5.20081H0.85183V6.66367Z" fill="#0B0A0A"/>
          </svg>
        </div>
        </button>
    </div>
  );
};

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonPrimary;
