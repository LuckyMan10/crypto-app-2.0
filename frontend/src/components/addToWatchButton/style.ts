import Styled from 'styled-components';

const Style = Styled.div`
    position: fixed;
    bottom: 3%;
    right: 3%;
    button {
        background: transparent;
        border: none;
        cursor: pointer;
        background: black;
        border-radius: 10px;
        h2 {
            color: white;
            font-weight: 600;
            padding: 5px;
        }
        img {
            max-width: 120px;
        }
        opacity: 0.2;
        transition: 0.3s;
        &:hover {
            transition: 0.3s;
            opacity: 1;
        }
    }
`;

export { Style };
