import { styled } from 'styled-components';

type Props = {
    visible?: string;
};

export const SidebarContainer = styled.div<Props>`
    position: fixed;
    z-index: 10;
    right: 0;
    background-color: var(--color-neutral-muted);
    width: 100%; // u can adjust it
    height: 100%;
    display: ${(props) => (props.visible === 'true' ? 'flex' : 'none')};
    justify-content: flex-end;
    transition: 0.5s;

    ul {
        margin-top: 10rem;
        list-style-type: none;
        display: flex;
        flex-direction: column;

        gap: 2rem;
    }
`;

export const Siderbar = styled.div`
    z-index: 99;
    width: 300px;
    height: 100%;
    background-color: #000000;
    overflow-x: hidden;
    position: relative;
`;

export const CloseBtn = styled.div`
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1.3rem;
`;

export const MenuItem = styled.li`
    width: 100%;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        width: 24px;
        height: 24px;
    }

    a {
        white-space: nowrap;
    }
`;
