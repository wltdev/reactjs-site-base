import React from 'react';
import { IoClose } from 'react-icons/io5';

import { Contact } from '../Contact';
import { data } from '../Menu/data';
import { CloseBtn, MenuItem, SidebarContainer, Siderbar } from './styles';

type Props = {
    visible: string;
    close: () => void;
};

export const SidebarMenu: React.FC<Props> = ({ visible, close }) => {
    return (
        <SidebarContainer visible={visible}>
            <Siderbar>
                <CloseBtn onClick={close}>
                    <IoClose size={30} />
                </CloseBtn>
                <ul>
                    {data.map(({ title, Icon }, index) => {
                        return (
                            <MenuItem>
                                {Icon && <Icon />}
                                <a key={index}>{title}</a>
                            </MenuItem>
                        );
                    })}
                    <MenuItem>
                        <div />
                        <Contact />
                    </MenuItem>
                </ul>
            </Siderbar>
        </SidebarContainer>
    );
};
