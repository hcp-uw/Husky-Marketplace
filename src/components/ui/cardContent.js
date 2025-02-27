import React from 'react';

const CardContent = ({ children, ...props }) => {
    return (
        <div {...props} className="card-content">
            {children}
        </div>
    );
};

export default CardContent;

