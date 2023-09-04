import { data } from './data';
import { MenuContainer, MenuItem } from './styles';

export const Menu = () => {
    return (
        <MenuContainer>
            {data.map(({ title, Icon }, index) => {
                return (
                    <MenuItem key={index}>
                        {Icon && <Icon />}
                        <a>{title}</a>
                    </MenuItem>
                );
            })}
        </MenuContainer>
    );
};
