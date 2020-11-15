import './style.css'

function Modal({ handleClose, show, children }) {
    return (
      <>
        <div className="modal">
          {children}

          <a href="javascript:;" className="close" onClick={handleClose}>
            close
          </a>
        </div>
      </>
    );
  };

export default Modal
