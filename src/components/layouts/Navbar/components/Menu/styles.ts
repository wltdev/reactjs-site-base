import { styled } from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    border: 1px solid var(--grey);
    padding: 1rem;
    border-radius: 36px;

    @media (max-width: 768px) {
        display: none;
    }
`;
