// src/components/ui/checkbox.js
import React from 'react';

const Checkbox = ({ checked, onChange, children }) => {
    return (
        <label className="flex items-center cursor-pointer">
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                className="mr-2" // Adds some spacing between checkbox and label
            />
            {children}
        </label>
    );
};

export default Checkbox;

