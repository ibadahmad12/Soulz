import React from 'react';

const CommonWidget = ({ title, children }) => {
    return (
        <div className="widgets-container">
            <div className="widgets-title">{title}</div>
            <div className="widgets-children">{children}</div>
        </div>
    );
};

export default CommonWidget;
