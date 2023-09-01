import { FaBars } from 'react-icons/fa';

import logo from '@assets/react.svg';

import { Button } from '@/components/buttons/Button';

import { Menu } from './components/Menu';
import {
    DesktopContactContent,
    DesktopMobileHamburger,
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
                    <img src={logo} />
                    <Menu />
                    <DesktopContactContent>
                        <Button title="Contact us" handleClick={handleContactClick} />
                    </DesktopContactContent>
                    <DesktopMobileHamburger onClick={toggleSidebar}>
                        <FaBars size={20} />
                    </DesktopMobileHamburger>
                </NavbarNav>
            </NavbarContainer>
        </>
    );
};
