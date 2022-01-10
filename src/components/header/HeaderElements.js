import styled from "styled-components";
import themeList from "../../config/themeList";
import { Link } from "react-scroll";
import { devices } from "../../assets/scss/_respondTo";

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

    ${devices.smartphone} {
        padding: 0px 25px;
    }

    .menuIcon,
    .closeIcon {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-right: -10px;
        svg {
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#222B5F" : "#F3F1FE"};
            width: 25px;
            height: 25px;
        }
        &:hover {
            background-color: #8080803b;
            border-radius: 4px;
        }
    }
    .closeIcon {
        position: absolute;
        right: 35px;
        top: 30px;
        &:hover {
            background-color: #8080803b;
            svg {
                color: white;
            }
        }
    }
    .navOverlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: #7227f3;
        opacity: 0.2;
    }

    .header {
        &__logo_link {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            height: 50px;
            gap: 10px;
            width: 100%;
        }

        &__logo {
            color: #ffffff;
            justify-content: space-between;
            align-items: center;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            width: 100%;

            .logo {
                &__img {
                    height: 35px;
                    transition: 0.3s all ease;

                    &:hover {
                        transform: scale(1.1);
                    }
                }

                &__img-profile {
                    width: 100%;
                    transition: 0.3s all ease;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
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

            ${devices.smartphone} {
                font-size: 14px;
                font-weight: 500;
            }

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

                ${devices.smartphone} {
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "var(--light-text-black)"
                            : "var(--dark-text-white)"};
                }
            }
        }

        &__menu {
            display: flex;
            align-items: center;
            text-align: center;
            list-style: none;
            height: 100%;

            nav.open {
                ${devices.smartphone} {
                    box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
                    transform: translateX(0);
                }
            }

            nav {
                ${devices.smartphone} {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: fixed;
                    width: 90%;
                    max-width: 250px;
                    top: 0;
                    right: 0;
                    background-color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#f0f8ff" : "#1a1d29"};
                    height: 100vh;
                    z-index: 100;
                    transform: translateX(100%);
                    transition: 0.3s ease-in-out transform;
                    overflow: hidden;
                }

                ul {
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    ${devices.smartphone} {
                        flex-direction: column;
                        gap: 20px;
                    }

                    li {
                        .closing {
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }

            .color_icon {
                display: flex;
                font-size: 10px;
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};

                ${devices.smartphone} {
                    display: none;
                }
            }
        }
    }

    .media_social {
        width: 40px;
        position: fixed;
        bottom: 0px;
        left: 40px;
        right: auto;
        z-index: 10;
        color: #a8b2d1;

        ${devices.smartphone} {
            display: none;
        }

        ${devices.ipads} {
            display: none;
        }

        .item_media {
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
        }
    }

    .media_social_right {
        width: 40px;
        position: fixed;
        bottom: 0px;
        right: 40px;
        left: auto;
        z-index: 10;
        color: #a8b2d1;

        ${devices.smartphone} {
            display: none;
        }

        ${devices.ipads} {
            display: none;
        }

        .item_media {
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
        }
    }
`;
