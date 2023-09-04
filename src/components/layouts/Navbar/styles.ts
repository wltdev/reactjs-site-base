import { styled } from 'styled-components';

export const NavbarContainer = styled.header`
    border-bottom: 1px solid;
`;

export const NavbarNav = styled.nav`
    min-height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
    /* gap: 1.3rem; */
`;

export const DesktopContactContent = styled.div`
    font-size: 1.25rem;

    @media (max-width: 1260px) {
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const DesktopMobileHamburger = styled.div`
    cursor: pointer;
    display: none;

    &:hover {
        color: #f92001bd;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;
