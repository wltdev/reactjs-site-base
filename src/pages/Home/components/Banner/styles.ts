import { styled } from 'styled-components';

export const BannerContainer = styled.section`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 600px;

    @media (max-width: 768px) {
        min-height: unset;
    }

    h1 {
        font-family: SharpGrotesk;
        text-align: center;
        max-width: 800px;
        font-size: 130px;
        text-transform: uppercase;

        line-height: 106px;

        @media (max-width: 768px) {
            font-size: 50px;
            line-height: 43px;
        }
    }
`;
