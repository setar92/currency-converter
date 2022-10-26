import './module.css';

const ErrorToast = ({ message }) => {
  return (
    <div className='error-container'>
      <div className='toast-error'>
        <div className='toast-title'>Something went wrong!</div>
        <div className='error'>
          Error when updating currency rates. The query returned the following error message: 
          <span>{' ' + message}</span>
        </div>
      </div>
    </div>
  );
};

export { ErrorToast };