import React from 'react';
import './loader.scss';

const Loader = () => {
    return (
        <div className="lds-dual-ring"/>
    );
};

export default React.memo(Loader);
