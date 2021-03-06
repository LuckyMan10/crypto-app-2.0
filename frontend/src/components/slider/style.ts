import Styled from 'styled-components';

const Style = Styled.article`
    position: relative;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
        font-weight: 600;
        color: white;
        font-size: 50px;
        position: relative;
        z-index: 5;
    }
    p {
        text-align: center;
        color: white;
        font-size: 25px;
        position: relative;
        z-index: 5;
    }
    @media (max-width: 350px) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1.1rem;
        }
    }
    .background {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    span {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
    }
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    }
    .slide {
        user-select: none;
        cursor: pointer;
        img {
            max-width: 100px;
        }
        p {
            font-size: 30px;
            color: white;
        }
        @media (max-width: 350px) {
            img {
                max-width: 75px;
            }
            p {
                font-size: 1.1rem;
            }
        }
    }
`;

export { Style };
