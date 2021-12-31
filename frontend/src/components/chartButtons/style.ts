import Styled from 'styled-components';

const Style = Styled.article`
    display: flex;
    justify-content: center;
    padding: 15px 0px;
    .buttonsWrapper {
        width: 50%;
        display: flex;
        justify-content: space-around;
        gap: 10px;
        @media (max-width: 470px) {
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
        }
}
`;
export { Style };
