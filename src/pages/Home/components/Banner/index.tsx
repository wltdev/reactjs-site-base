import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { ReactComponent as ContactIcon } from '@assets/img/icons/SendIcon.svg';

import { Button } from '@/components/buttons/Button';

import { BannerContainer, ButtonWrapper, SocialIcons, SocialWrapper } from './styles';

export const Banner = () => {
    const handleButtonClick = () => {
        console.log('clicked');
    };

    return (
        <BannerContainer>
            <SocialWrapper>
                <SocialIcons>
                    <FaFacebook size={40} color="#FFFF" />
                    <FaInstagram size={40} color="#FFFF" />
                    <FaWhatsapp size={40} color="#FFFF" />
                </SocialIcons>
                <div>V</div>
            </SocialWrapper>

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
                    size="big"
                />
            </ButtonWrapper>
        </BannerContainer>
    );
};
