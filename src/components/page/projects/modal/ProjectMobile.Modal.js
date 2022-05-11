import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../../redux/reducer';
import { ColCenter } from '../../../kits/stucture/component.stucture';
import Details from './content/detail/Detail';
import General from './content/general/General';
import './Modal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const ProjectMobileModal = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.Reducer);

    const closeModal = () => {
        dispatch(setModal({ isModalOpen: false, app: {} }));
    }

    return (
        <ColCenter className="modal-background">
            {/* <div className="modal-project-mobile">
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
            </div> */}

            <Modal
                isOpen={store.isModalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => closeModal()}
                className="modal-project-mobile"
                contentLabel="Example Modal"
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
            </Modal>


        </ColCenter>



    )
}

export default ProjectMobileModal


