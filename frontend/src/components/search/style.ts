import Styled from 'styled-components';

type StyleProps = {
  isMediumScreen: boolean;
};

const Style = Styled.article<StyleProps>`
    text-align: center;
    .ant-input {
        width: ${(props) => (props.isMediumScreen ? '95%' : '400px')};
        fontSize: ${(props) => (props.isMediumScreen ? '1rem' : '21px')};
    }
`;

export { Style };
