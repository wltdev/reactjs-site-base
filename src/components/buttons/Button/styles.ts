import { styled } from 'styled-components';

type Props = {
    size?: string;
};
export const ButtonContainer = styled.button<Props>`
    border: 2px solid var(--secondary);
    border-radius: 1.375rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        border-color: #1bf6556e;
    }

    &.big {
        padding: 1rem 1.5rem;
        font-size: 1.3rem;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;
