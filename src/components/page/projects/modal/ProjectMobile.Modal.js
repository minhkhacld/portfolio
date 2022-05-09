import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/reducer';
import Details from './content/detail/Detail';
import General from './content/general/General';
import './Modal.css';


const ProjectMobileModal = () => {
    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch(setModal({ isModalOpen: false, app: {} }));
    }

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
        </div>

    )
}

export default ProjectMobileModal


