import React from 'react';

import { SidebarContainer } from './styles';

type Props = {
    visible: boolean;
};

export const SidebarMenu: React.FC<Props> = ({ visible }) => {
    return (
        <SidebarContainer visible={visible}>
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
        </SidebarContainer>
    );
};
