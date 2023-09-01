import logo from '@assets/react.svg';

import { Container } from './styles';

export const NotFound = () => {
    return (
        <Container>
            <div className="content">
                <img src={logo} />
                <h3>Page Not Found</h3>
            </div>

            <button>
                <a href="/">Go Home</a>
            </button>
        </Container>
    );
};
