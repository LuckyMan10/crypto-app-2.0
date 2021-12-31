import Styled from 'styled-components';

const Style = Styled.article`
    text-align: center;
    padding: 10px 0px;
    h2 {
        font-size: 25px;
        color: white;
        @media (max-width: 350px) {
            font-size: 1.2rem;
        }
    }
`;

export { Style };
