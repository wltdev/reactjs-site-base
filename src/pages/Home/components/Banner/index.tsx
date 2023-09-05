import { ReactComponent as ContactIcon } from '@assets/img/icons/SendIcon.svg';

import { Button } from '@/components/buttons/Button';

import { BannerContainer, ButtonWrapper } from './styles';

export const Banner = () => {
    const handleButtonClick = () => {
        console.log('clicked');
    };

    return (
        <BannerContainer>
            <h1>We are specialist in web development</h1>

            <p>
                DESTAQUE SUA EMPRESA NO MERCADO E CONQUISTE MAIS CLIENTES COM ESTRATÉGIAS QUE
                VALORIZA E POTENCIALIZA O QUE SEU NEGÓCIO FAZ DE MELHOR.
            </p>

            <ButtonWrapper>
                <Button
                    title="Request proposal"
                    handleClick={handleButtonClick}
                    Icon={ContactIcon}
                />
            </ButtonWrapper>
        </BannerContainer>
    );
};
