import { ButtonContainer } from './styles';

type Props = {
    title: string;
    size?: string;
    handleClick: () => void;
};
export const Button: React.FC<Props> = ({ title, handleClick, size }) => {
    return (
        <ButtonContainer onClick={handleClick} size={size}>
            {title}
        </ButtonContainer>
    );
};
