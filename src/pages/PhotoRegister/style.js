import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    width: 100%;
    height: 90%;
    color: white;
`;

export const layout2 = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 20%;
    width: 300px;
    height: 300px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const title = css`
    cursor: default;
`;

const imgss = css`

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 20%;
    width: 300px;
    height: 300px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
    }

`;
