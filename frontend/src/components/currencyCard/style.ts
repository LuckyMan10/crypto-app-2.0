import Styled from 'styled-components';

const Style = Styled.article`
    .ant-card.ant-card-bordered {
        width: '100%';
        minWidth: 315;
    }
    .cardWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    img {
        max-width: 130px; 
    }
    h3 {
        font-size: 30px;
        font-weight: 600;
        margin: 0;
    }
    .cardDescription {
        font-size: 21px;
    }
}
`;
export { Style };
