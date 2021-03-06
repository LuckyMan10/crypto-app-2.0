import Styled from 'styled-components';

const Style = Styled.header`
    padding: 0% 2.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    height: 100px;
    @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        height: 120px;
    }
    .logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
            max-width: 90px;
        }
        h1 {
            margin: 0;
            color: white;
            font-weight: 600;
        }
        @media (max-width: 660px) {
            img {
                max-width: 60px;
            }
            h1 {
                font-size: 1.2em;
            }
        }
    }
    .buttons {
        display: flex;
        align-items: center;
    }
    .selectWrapper, .authBtnWrapper {
        margin: 0px 10px;
        @media (max-width: 450px) {
            margin: 0px;
        }
    }
    .authModalWrapper {
        position: absolute;
    }

    .menuWrapper {
        user-select: none;
        width: 256px;
        height: 50px;
        position: relative;
    }
    .menu {
        position: absolute;
        width: 100%;
        z-index: 10;
    }
    .notAuthBtnWrapper {
        display: flex;
        flex-direction: column;
        gap: 5px;
        @media (max-width: 450px) {
            flex-direction: row;
        }
    }
`;

export { Style };
