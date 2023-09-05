import { FaBars } from 'react-icons/fa';

import { ReactComponent as ContactIcon } from '@assets/img/icons/HomeGreenIcon.svg';
import logo from '@assets/img/rockwool-logo-png-transparent.svg';

import { Button } from '@/components/buttons/Button';

import { Menu } from './components/Menu';
import {
    DesktopContactContent,
    DesktopMobileHamburger,
    LogoWrapper,
    NavbarContainer,
    NavbarNav
} from './styles';

type Props = {
    toggleSidebar: () => void;
};

export const Navbar: React.FC<Props> = ({ toggleSidebar }) => {
    const handleContactClick = () => {
        console.log('clicked');
    };

    return (
        <>
            <NavbarContainer>
                <NavbarNav>
                    <LogoWrapper>
                        <img src={logo} />
                    </LogoWrapper>
                    <Menu />
                    <DesktopContactContent>
                        <Button
                            title="Contact us"
                            handleClick={handleContactClick}
                            Icon={ContactIcon}
                        />
                    </DesktopContactContent>
                    <DesktopMobileHamburger onClick={toggleSidebar}>
                        <FaBars size={20} />
                    </DesktopMobileHamburger>
                </NavbarNav>
            </NavbarContainer>
        </>
    );
};
