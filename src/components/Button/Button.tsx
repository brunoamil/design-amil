import React from 'react';

import { ButtonProps } from './ButtonProps.types';
import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ theme }) => (
    <div className={`button-component button-component-${theme}`}>
        <button type="button">Login</button>
    </div>
);

export default Button;