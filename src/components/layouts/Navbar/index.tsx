import logo from '@assets/react.svg';

import { NavbarContainer, NavbarNav } from './styles';

export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarNav>
                <img src={logo} />
                <div>Menu items</div>
                <div>contact</div>
            </NavbarNav>
        </NavbarContainer>
    );
};
