import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    border: 1px solid;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
