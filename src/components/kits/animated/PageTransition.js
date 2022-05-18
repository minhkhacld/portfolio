import React from 'react';
import '../Kits.css';
import { ColCenter, RowCenter } from "../stucture/component.stucture";

const PageTransition = () => {
    return (
        <RowCenter className="ts-container">
            <ColCenter className="ts-child-1"></ColCenter>
            <ColCenter className="ts-child-2"></ColCenter>
            <ColCenter className="ts-child-3"></ColCenter>
            <ColCenter className="ts-child-4"></ColCenter>
            <ColCenter className="ts-child-5"></ColCenter>
        </RowCenter>
    )

};

export default PageTransition;

