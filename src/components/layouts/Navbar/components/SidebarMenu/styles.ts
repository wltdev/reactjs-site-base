import { styled } from 'styled-components';

type Props = {
    visible: string;
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
`;

export const Siderbar = styled.div`
    z-index: 99;
    width: 300px;
    height: 100%;
    background-color: var(--grey);
    overflow-x: hidden;
`;

export const CloseBtn = styled.div`
    cursor: pointer;
`;
