import { styled } from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    border: 1px solid var(--grey);
    padding: 1rem 2.125rem;
    border-radius: 36px;

    @media (max-width: 1260px) {
        gap: 2.5rem;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuItem = styled.div`
    width: 100%;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 1260px) {
        font-size: 1rem;
        gap: 5px;
    }

    @media (max-width: 1096px) {
        gap: 5px;
    }

    svg {
        width: 24px;
        height: 24px;
        @media (max-width: 1260px) {
            width: 18px;
            height: 18px;
        }
    }

    a {
        white-space: nowrap;
    }
`;
