import React from 'react';
import { FaBars } from 'react-icons/fa';

import { CloseBtn, SidebarContainer, Siderbar } from './styles';

type Props = {
    visible: string;
    close: () => void;
};

export const SidebarMenu: React.FC<Props> = ({ visible, close }) => {
    return (
        <SidebarContainer visible={visible}>
            <Siderbar>
                <CloseBtn onClick={close}>
                    <FaBars />
                </CloseBtn>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </Siderbar>
        </SidebarContainer>
    );
};
