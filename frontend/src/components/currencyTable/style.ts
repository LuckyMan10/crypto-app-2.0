import Styled from 'styled-components';

type StyleProps = {
  isSmallScreen: boolean;
};

const Style = Styled.article<StyleProps>`
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
    .ant-table-wrapper {
        width: 95%;
    }
    .ant-pagination.ant-table-pagination.ant-table-pagination-center {
        background: ${(props) => (props.isSmallScreen ? 'white' : 'transparent')};
        padding: 10px;
        font-size: ${(props) => (props.isSmallScreen ? '25px' : '100%')};
        border-radius: 5px;
    }
`;
export { Style };
