import * as ReactModal from 'react-modal'

import './style.css'

function Modal({ isOpen, handleCloseModal, title, children }) {
    ReactModal.setAppElement('#root')

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="topo">
                <h2 className="titulo">{title}</h2>
                <button className="close" onClick={handleCloseModal}>X</button>
            </div>
            {children}
        </ReactModal>
    )
}

export default Modal
