import { styled } from 'styled-components';

export const BannerContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 600px;

    @media (max-width: 768px) {
        min-width: 400px;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        max-width: 800px;
        font-size: 130px;
    }
`;
