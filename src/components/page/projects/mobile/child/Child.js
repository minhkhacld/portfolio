import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../../redux/reducer';
import './Child.css';

const Child = ({ app }) => {

    const dispatch = useDispatch();

    const _onOpenModal = (app) => {
        dispatch(setModal({ isModalOpen: true, app: app }));
    }

    return (
        <div className="mobile-child">
            <img src={app.feature} className="mobile-child-image" alt="feature" />
            <div className="mobile-child-circle" onClick={() => _onOpenModal(app)}>
                <div className="child-circle-text">View project</div>
            </div>
        </div>
    )
}

export default Child