import { FaBars } from 'react-icons/fa';

import logo from '@assets/react.svg';

import { Contact } from './components/Contact';
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
    return (
        <>
            <NavbarContainer>
                <NavbarNav>
                    <img src={logo} />
                    <Menu />
                    <DesktopContactContent>
                        <Contact />
                    </DesktopContactContent>
                    <DesktopMobileHamburger onClick={toggleSidebar}>
                        <FaBars />
                    </DesktopMobileHamburger>
                </NavbarNav>
            </NavbarContainer>
        </>
    );
};
