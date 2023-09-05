import { styled } from 'styled-components';

export const BannerContainer = styled.section`
    position: relative;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    padding: 7rem 0;

    gap: 15px;

    @media (max-width: 768px) {
        min-height: unset;
    }

    h1 {
        margin: 0;
        max-width: 800px;
        font-family: SharpGrotesk;
        font-weight: 700;
        text-align: center;
        font-size: 130px;
        text-transform: uppercase;

        line-height: 106px;

        @media (max-width: 768px) {
            font-size: 50px;
            line-height: 43px;
        }
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 1.6875rem;
        color: #ffffff;
        max-width: 800px;
        text-align: center;
    }
`;

export const ButtonWrapper = styled.div`
    svg {
        width: 15px;
        height: 15px;
    }
`;

export const SocialWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    top: 1rem;
    right: -10px;
`;

export const SocialIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;
