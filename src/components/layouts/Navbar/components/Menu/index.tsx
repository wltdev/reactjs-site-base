import { data } from './data';
import { MenuContainer, MenuItem } from './styles';

export const Menu = () => {
    return (
        <MenuContainer>
            {data.map(({ title, Icon }, index) => {
                return (
                    <MenuItem>
                        {Icon && <Icon />}
                        <a key={index}>{title}</a>
                    </MenuItem>
                );
            })}
        </MenuContainer>
    );
};
