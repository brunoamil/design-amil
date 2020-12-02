import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import { ButtonProps } from './ButtonProps.types';

describe('Test Button', () => {
    let props: ButtonProps;

    beforeEach(() => {
        props = {
            theme: "normal"
        }
    });

    const renderComponent = () => render(<Button {...props} />);

    it('shoud have normal className', () => {
        const { getByTestId } = renderComponent();
        const buttonElemento = getByTestId("button-componentId");
        expect(buttonElemento).toHaveClass("button-component-normal");
    });
});