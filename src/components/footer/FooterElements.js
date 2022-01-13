import styled from "styled-components";
import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

export const FooterSite = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 70px;
    padding: 15px;
    height: auto;

    .footer_media-social {
        display: none;

        ${devices.smartphone} {
            display: initial;
        }

        ${devices.ipads} {
            display: initial;
        }
    }

    .footer_item {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-grey)"
                : "var(--dark-text-white)"};
        transition: 0.1s all ease;
        letter-spacing: 0.4px;
        font-size: 12px;
        line-height: 1.4;

        &:hover {
            color: #6c62e2;
            transition: 0.1s all ease;
        }
    }

    .github_stats {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        span {
            display: inline-flex;
            margin: 0px 7px;
        }

        svg {
            display: inline-block;
            margin-right: 5px;
            height: 14px;
            width: 14px;
        }
    }
`;

export const Item = styled.ul`
    color: ${({ theme: { theme } }) =>
        theme === themeList.light
            ? "var(--light-text-grey)"
            : "var(--dark-text-white)"};
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 20px;
    padding: 0px;
    margin: 0px;

    .item_li {
        transition: 0.3s all ease;
        padding: 10px;

        &:hover {
            transform: translateY(-5px);
            transition: 0.3s all ease;
            color: #7227f3;
        }
    }
`;
