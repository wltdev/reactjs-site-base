import { styled } from 'styled-components';

type Props = {
    size?: string;
};

export const ButtonContainer = styled.button<Props>`
    border: 2px solid var(--secondary);
    border-radius: 2rem;
    background-color: transparent;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--secondary);
    letter-spacing: -3px;
    font-size: 1.25rem;

    &:focus,
    :active {
        border-color: #1bf6556e;
        outline: unset;
    }

    &:hover {
        border-color: #1bf6556e;
    }

    &.big {
        padding: 1rem 1.5rem;
        font-size: 1.7rem;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;
