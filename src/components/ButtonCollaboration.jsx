import PropTypes from 'prop-types';

const ButtonCollaboration = ({ text, className = '', onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn-primary ${className}`}
    >
      {text}
    </button>
  );
};

ButtonCollaboration.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonCollaboration;
