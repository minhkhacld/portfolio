import React from 'react'
import './General.css';
import { useSelector } from 'react-redux';
import moment from 'moment';

const General = () => {

    const store = useSelector(store => store.Reducer);

    return (
        <div className="modal-content-general">
            <div className="general-icon-group">
                <img src={store.app.icon} alt="app-icon" className="general-icon" />
            </div>
            <div className="general-row">
                <strong className="general-row-cap">App name:</strong>
                <span className="general-row-content">{store.app.appName}</span>
            </div>
            <div className="general-row">
                <strong className="general-row-cap">Description:</strong>
                <span className="general-row-content">{store.app.des}</span>
            </div>
            <div className="general-row">
                <strong className="general-row-cap">Technologies & Tools:</strong>
                <span className="general-row-content">{store.app.details}</span>
            </div>
            <div className="general-row">
                <strong className="general-row-cap">Published date:</strong>
                <span className="general-row-content">{moment(store.app.publishDate).format('YYYY, MMM-DD')}</span>
            </div>
            <div className="general-row">
                <strong className="general-row-cap">Project type:</strong>
                <span className="general-row-content">{store.app.projectType}</span>
            </div>
            <div className="general-row">
                <a href={store.app.link} className="general-row-link">View on Play Store</a>
            </div>
        </div>
    )
}

export default General