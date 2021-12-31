import Styled from 'styled-components';

const Style = Styled.article`
    p {
        font-size: 21px;
    }
    @media (max-width: 750px) {
        p {
            font-size: 18px;
        }
    }
    @media (max-width: 650px) {
        h3 {
            font-size: 1.2rem;
        }
    }
`;
export { Style };
