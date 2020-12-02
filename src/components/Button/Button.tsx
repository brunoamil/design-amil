import React from 'react';

import { ButtonProps } from './ButtonProps.types';
import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ theme }) => (
        <button data-testid="button-componentId"  className={`button-component button-component-${theme}`} type="button">Login</button>
);

export default Button;