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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM15.1986 12.5829H6.29714V11.12H15.1986L11.1173 7.03131L12.1486 6L18 11.8514L12.1486 17.7029L11.1099 16.6715L15.1986 12.5829Z" fill="#191919"/>
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
