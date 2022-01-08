import styled from "styled-components";
import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

export const FooterSite = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;

    .footer_media-social {
        display: none;

        ${devices.smartphone} {
            display: initial;
        }
    }

    .footer_item {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-grey)"
                : "var(--dark-text-white)"};
        font-size: 12px;
        transition: 0.1s all ease;
        line-height: 1.4;
        letter-spacing: 0.4px;

        &:hover {
            color: #6c62e2;
            transition: 0.1s all ease;
        }
    }

    .github_stats {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            display: inline-flex;
            margin: 0px 7px;
        }

        svg {
            display: inline-block;
            margin-right: 5px;
            width: 14px;
            height: 14px;
        }
    }
`;

export const Item = styled.ul`
    display: flex;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light
            ? "var(--light-text-grey)"
            : "var(--dark-text-white)"};
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    font-size: 20px;

    .item_li {
        padding: 10px;
        transition: 0.3s all ease;

        &:hover {
            color: #7227f3;
            transform: translateY(-5px);
            transition: 0.3s all ease;
        }
    }
`;
