import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${(props) => (props.Secondary ? 'var(--color-button-secondary)' : 'var(--color-button-primary)')};
    color: #ffffff;
    padding: 1.6rem 1.6rem !important;
    font-size: 1.6rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    @media only screen and (max-width: 1130px) {
        padding: 0 1rem;
    }
    a {
        text-decoration: none;
    }
    &:hover {
        background-color: ${(props) =>
            props.Secondary ? 'var(--color-button-secondary-hover)' : 'var(--color-button-primary-hover)'};
    }
    &:active,
    &:focus {
        outline: none;
    }
`;

const StyledButtonLink = styled.button`
    color: var(--color-text-link-button-secondary);
    background-color: ${(props) => (props.Secondary ? 'var(--color-button-secondary)' : 'var(--color-button-primary)')};
    padding: 1.6rem 1.6rem !important;
    font-size: 1.6rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    @media only screen and (max-width: 1130px) {
        padding: 0 1rem;
    }
    a {
        text-decoration: none;
    }
    &:hover {
        background-color: ${(props) =>
            props.Secondary ? 'var(--color-button-secondary-hover)' : 'var(--color-button-primary-hover)'};
    }
    &:active,
    &:focus {
        outline: none;
    }
`;

const CustomButton = ({ isLink, children, goTo, ...otherProps }) => {
    const a = 3;
    return (
        <>
            {!isLink && <StyledButton {...otherProps}>{children}</StyledButton>}

            {isLink && (
                <StyledButtonLink {...otherProps}>
                    <a href={goTo} target="_blank" rel="noreferrer">
                        {children}
                    </a>
                </StyledButtonLink>
            )}
        </>
    );
};

export default CustomButton;
