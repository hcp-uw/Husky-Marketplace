import React from 'react';
import './BorS.css'; // Create the corresponding CSS for BorS screen

const BorS = () => {
    return (
        <div className="bor-s-container">
            <div className="h-shape">
                <div className="vertical"></div>
                <div className="vertical"></div>
                <div className="horizontalleft">
                    <span className='buytext'>BUY</span>
                </div>
                <div className="horizontalright">
                    <span className='selltext'>SELL</span>
                </div>

            </div>
        </div>
    );
};

export default BorS;
