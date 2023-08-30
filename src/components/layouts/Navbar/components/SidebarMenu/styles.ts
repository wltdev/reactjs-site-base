import { styled } from 'styled-components';

type Props = {
    visible: boolean;
};

export const SidebarContainer = styled.div<Props>`
    position: absolute;
    z-index: 99;
    background-color: var(--grey);
    width: 30%; // u can adjust it
    height: 100%;
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    overflow-x: hidden;
    transition: 0.5s;
`;
