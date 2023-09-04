import React from 'react';
import { IoClose } from 'react-icons/io5';

import { ReactComponent as ContactIcon } from '@assets/img/icons/HomeGreenIcon.svg';

import { Button } from '@/components/buttons/Button';

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
                            <MenuItem key={index}>
                                {Icon && <Icon />}
                                <a>{title}</a>
                            </MenuItem>
                        );
                    })}
                    <MenuItem>
                        <div />
                        <Button title="Contact Us" handleClick={close} Icon={ContactIcon} />
                    </MenuItem>
                </ul>
            </Siderbar>
        </SidebarContainer>
    );
};
