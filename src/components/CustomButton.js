import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${(props) => (props.Secondary ? 'var(--color-button-secondary)' : 'var(--color-button-primary)')};
    color: #ffffff;
    height: 4.8rem;
    padding: 0 2.5rem;
    font-size: 1.6rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) =>
            props.Secondary ? 'var(--color-button-secondary-hover)' : 'var(--color-button-primary-hover)'};
    }
`;

const CustomButton = ({ children, ...otherProps }) => <StyledButton {...otherProps}>{children}</StyledButton>;

export default CustomButton;
