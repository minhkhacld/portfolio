import React from 'react'
import './Child.css';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../../../redux/reducer';

const Child = ({ app }) => {

    const dispatch = useDispatch();
    const store = useSelector(store => store.Reducer);

    const _onOpenModal = (app) => {
        dispatch(setModal({ isModalOpen: true, app: app }));
    }

    return (
        <div className="mobile-child">
            <img src={app.picture[0]} className="mobile-child-image" />
            <div className="mobile-child-circle" onClick={() => _onOpenModal(app)}>
                <div className="child-circle-text">View project</div>
            </div>
        </div>
    )
}

export default Child