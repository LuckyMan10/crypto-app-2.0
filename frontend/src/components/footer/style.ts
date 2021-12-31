import Styled from 'styled-components';

const Style = Styled.footer`
    padding: 5px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0,0.4);
    height: 110px;
    .footerLogo {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 50px;
        }
        p {
            margin: 0;
            font-size: 20px;
            color: white;
        }
    }
    .about {
        opacity: 0.7;
        p {
            margin: 0;
        }
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
    }
`;

export { Style };
