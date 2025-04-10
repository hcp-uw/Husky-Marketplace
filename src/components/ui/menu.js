// src/components/ui/menu.js

import React, { useState } from "react";
import './menu.css'; // Ensure this path is correct

export const Menu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <div onClick={toggleMenu}>
                {children[0]} {/* MenuButton */}
            </div>
            {isOpen && (
                <div className="menu">
                    {React.Children.map(children.slice(1), (child) => {
                        return <div onClick={() => setIsOpen(false)}>{child}</div>; // Close menu on item click
                    })}
                </div>
            )}
        </div>
    );
};

export const MenuItem = ({ children, onClick }) => {
    return (
        <div className="menu-item" onClick={onClick}>
            {children}
        </div>
    );
};



export const MenuButton = ({ children }) => {
    return <button className="menu-button">{children}</button>;
};

