import styled from "styled-components";
import themeList from "../../config/themeList";
import { Link } from "react-scroll";

export const HeaderSite = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: sticky;
    font-size: 1rem;
    height: 100px;
    z-index: 6;
    top: 0;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.shrink {
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#ffffff" : "rgba(10, 17, 26, 0.9)"};
        height: 70px;
        transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export const NavLinks = styled(Link)`
    &.active {
        color: #7227f3;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 50px;
    width: 100%;
    z-index: 1;
    right: 0px;
    left: 0px;

    .header {
        &__logo_link {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            height: 50px;
            gap: 24px;
            width: 100%;
        }

        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            font-size: 13px;
            padding: 0 16px;
            height: 100%;
            width: 100%;
            gap: 8px;

            .resume {
                display: flex;
                align-items: center;
                background-color: #7c3aed;
                color: #fff;
                padding: 8px 16px;
                max-height: 100%;
                border-radius: 6px;
                transition: 0.3s all ease;
                cursor: pointer;

                &:hover {
                    transform: scale(1.05);
                    background-color: #7227f3;
                }
            }

            .text_menu {
                cursor: pointer;

                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};

                &:hover {
                    color: #7c3aed;
                }
            }
        }

        &__menu {
            display: flex;
            align-items: center;
            text-align: center;
            list-style: none;
            height: 100%;

            .closing {
                display: flex;
                align-items: center;
            }

            .color_icon {
                display: flex;
                font-size: 10px;
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};
            }
        }
    }
`;

export const Item = styled.ul`
    display: flex;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light
            ? "var(--light-text-grey)"
            : "var(--dark-text-white)"};
    flex-direction: column;
    -webkit-box-align: center;
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

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        margin-top: 20px;
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-grey)"
                : "var(--dark-text-white)"};
    }
`;
