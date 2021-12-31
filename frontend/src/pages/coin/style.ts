import Styled from 'styled-components';

type StyleProps = {
  emptyPageSize: number;
};

const Style = Styled.main<StyleProps>`
    .coinMain {
        display: flex;
        width: 70%;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        justify-content: space-around;
    }
    .wrapper {
        padding: 40px 0px;
        display: flex;
        justify-content: center;
    }
    .toHomeWrapper {
        display: flex;
        justify-content: center;
        margin: 0px 0px 30px 0px;
    }
    .ant-spin {
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${(props) => props.emptyPageSize}px;
    }
`;

export { Style };
