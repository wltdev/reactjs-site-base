import { data } from './data';
import { MenuContainer } from './styles';

export const Menu = () => {
    return (
        <MenuContainer>
            {data.map((item, index) => {
                return <div key={index}>{item.title}</div>;
            })}
        </MenuContainer>
    );
};
