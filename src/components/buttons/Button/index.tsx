import { ButtonContainer } from './styles';

type Props = {
    title: string;
    size?: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    handleClick: () => void;
};
export const Button: React.FC<Props> = ({ title, handleClick, size, Icon }) => {
    return (
        <ButtonContainer onClick={handleClick} className={size}>
            {title}
            {Icon && <Icon />}
        </ButtonContainer>
    );
};
