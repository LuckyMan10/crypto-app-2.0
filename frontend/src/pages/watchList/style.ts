import Styled from 'styled-components';

type StyleProps = {
  emptyPageSize: number;
};

const Style = Styled.main<StyleProps>`
    display: flex;
    justify-content: center;
    .pageWrapper {
        width: 96%;
    }
    .ant-spin {
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${(props) => props.emptyPageSize}px;
    }
`;

export { Style };
