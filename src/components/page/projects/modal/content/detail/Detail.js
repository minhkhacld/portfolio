import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Detail.css';

const Details = () => {
 
    const store = useSelector(store => store.Reducer);
    const [picIndex, setPicIndex] = React.useState(0);

    const onShowPreviousPic = () => {
        if (store.app.picture.length > 1) {
            if (picIndex > 0) {
                setPicIndex(picIndex - 1);
            } else {
                setPicIndex(store.app.picture.length - 1);
            }
        }
    };

    const onShowNextPic = () => {
        if (store.app.picture.length > 1) {
            if (picIndex < store.app.picture.length - 1) {
                setPicIndex(picIndex + 1);
            } else {
                setPicIndex(0);
            }
        }
    }

    return (
        <div className="modal-content-detail">
            <div className="content-picture-group">
                <div className="content-chevon-left" onClick={() => onShowPreviousPic()}>
                    <div className="content-chevon-frame">
                        <FaChevronLeft className="content-chevon-icon" />
                    </div>
                </div>
                <div className="content-picture-frame">
                    {picIndex === 0 ?
                        <img src={store.app.picture[picIndex]} alt="product" className="content-picture"
                        />
                        :
                        <img src={store.app.picture[picIndex]} alt="product" className="content-picture-small" />}
                </div>
                <div className="content-chevon-right" onClick={() => onShowNextPic()}>
                    <div className="content-chevon-frame">
                        <FaChevronRight className="content-chevon-icon" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Details;