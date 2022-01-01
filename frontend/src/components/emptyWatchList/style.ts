import Styled from 'styled-components';

type StyleProps = {
  emptyPageSize: number;
};

const Style = Styled.article<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        color: white;
        font-size: 30px;
    }
    img {
        max-width: 100px;
    }
    height: ${(props) => props.emptyPageSize}px;
`;

export { Style };
