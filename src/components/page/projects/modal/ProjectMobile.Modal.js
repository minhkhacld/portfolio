import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/reducer';
import './Modal.css';
import { FaXbox } from 'react-icons/fa'

const ProjectMobileModal = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.Reducer);

    const closeModal = () => {
        dispatch(setModal({ isModalOpen: false, app: {} }));
    }

    return (
        <div className="modal-project-mobile">
            <div className="modal-title">
                <div className="modal-title-text">Project details</div>
                <div className="close-btn">
                    <FaXbox className="close-btn-icon" onClick={() => closeModal()} />
                </div>
            </div>
            <div className="modal-content">

            </div>
        </div>
    )
}

export default ProjectMobileModal