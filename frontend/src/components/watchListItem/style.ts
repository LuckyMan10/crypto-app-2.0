import Styled from 'styled-components';

type StyleProps = {
  emptyPageSize: number;
};

const Style = Styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    min-height: ${(props) => props.emptyPageSize}px;
    .ant-divider {
        color: white;
        font-size: 25px;
        border-color: white;
    }
    .ant-spin {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 80%;
    }
    .oneCoin {
        width: 100%;
        margin: 30px 0px;
    }
    .cardWrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
    .chartWrapper {
        position: relative;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .oneCoinWrapper {
        display: flex;
        justify-content: space-between;
        align-items: top;
        gap: 10px;
        width: 100%;
        margin: 30px 0px; 
    }
    .buttons {
        display: flex;
        justify-content: end;
    }
    .buttonsWrapper {
        width: 75%;
        display: flex;
        justify-content: center;
        gap: 30px;
    }

    @media (max-width: 1350px) {
        .oneCoinWrapper {
            flex-direction: column-reverse;
            gap: 30px;
        }
        .chartWrapper {
            width: 100%;
        }
        .buttonsWrapper {
            width: 100%;
            justify-content: center;
        }
    }
    @media (max-width: 550px) {
        .buttonsWrapper {
            width: 100%;
            flex-wrap: wrap;
        }
    }
`;

export { Style };
