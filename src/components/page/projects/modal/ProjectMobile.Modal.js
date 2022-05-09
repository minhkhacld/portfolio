import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../../redux/reducer';
import Details from './content/detail/Detail';
import General from './content/general/General';
import './Modal.css';
import Modal from 'react-modal'


Modal.setAppElement(document.getElementById('root'));

const ProjectMobileModal = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.Reducer);

    const closeModal = () => {
        dispatch(setModal({ isModalOpen: false, app: {} }));
    }

    // let subtitle;
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    // const customStyles = {
    //     content: {
    //         top: '50%',
    //         left: '50%',
    //         width: '90%',
    //         minHeight: 500,
    //         minWidth: 450,
    //         right: 'auto',
    //         bottom: 'auto',
    //         marginRight: '-50%',
    //         transform: 'translate(-50%, -50%)',
    //         overflowY: 'scroll'
    //     },
    // };

    return (
        <div className="modal-background">
            <div className="modal-project-mobile">
                <div className="modal-title">
                    <div className="modal-title-text">Project details</div>
                    <div className="close-btn">
                        <FaTimesCircle className="close-btn-icon" onClick={() => closeModal()} />
                    </div>
                </div>
                <div className="modal-content">
                    <General />
                    <Details />
                </div>
            </div>

            {/* <Modal
                isOpen={store.isModalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            // className="modal-project-mobile"
            >
                <div className="modal-title">
                    <div className="modal-title-text">Project details</div>
                    <div className="close-btn">
                        <FaTimesCircle className="close-btn-icon" onClick={() => closeModal()} />
                    </div>
                </div>
                <div className="modal-content">
                    <General />
                    <Details />
                </div>
            </Modal> */}
        </div>

    )
}

export default ProjectMobileModal


