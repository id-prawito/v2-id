import styled from "styled-components";
import { Link } from "react-scroll";
import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

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

    ${devices.ipads} {
        padding: 0px 25px;
    }

    .menuIcon,
    .closeIcon {
        display: flex;
        align-items: center;
        margin-right: -10px;
        cursor: pointer;
        svg {
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#222B5F" : "#F3F1FE"};
            height: 25px;
            width: 25px;
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
        background: #7227f3;
        height: 100vh;
        width: 100vw;
        opacity: 0.2;
        left: 0;
        top: 0;
    }

    .header {
        &__logo_link {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            height: 50px;
            width: 100%;
            gap: 10px;
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
                font-weight: 500;
                font-size: 14px;
            }

            ${devices.ipads} {
                font-weight: 500;
                font-size: 15px;
            }

            .resume {
                display: flex;
                align-items: center;
                background-color: var(--colorMain);
                border-radius: 6px;
                padding: 8px 16px;
                max-height: 100%;
                cursor: pointer;
                color: #ffffff;
                transition: 0.3s all ease;

                &:hover {
                    background-color: #7227f3;
                    transform: scale(1.05);
                }
            }

            .text_menu {
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};
                cursor: pointer;
                &:hover {
                    color: var(--colorMain);
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

                ${devices.ipads} {
                    box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
                    transform: translateX(0);
                }
            }

            nav {
                ${devices.smartphone} {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    background-color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#f0f8ff" : "#1a1d29"};
                    max-width: 250px;
                    overflow: hidden;
                    position: fixed;
                    height: 100vh;
                    z-index: 100;
                    width: 90%;
                    right: 0;
                    top: 0;
                    transform: translateX(100%);
                    transition: 0.3s ease-in-out transform;
                }

                ${devices.ipads} {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    background-color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#f0f8ff" : "#1a1d29"};
                    max-width: 250px;
                    overflow: hidden;
                    position: fixed;
                    height: 100vh;
                    z-index: 100;
                    width: 90%;
                    right: 0;
                    top: 0;
                    transform: translateX(100%);
                    transition: 0.3s ease-in-out transform;
                }

                ul {
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    ${devices.smartphone} {
                        flex-direction: column;
                        gap: 20px;
                    }

                    ${devices.ipads} {
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
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};
                font-size: 10px;

                ${devices.smartphone} {
                    display: none;
                }

                ${devices.ipads} {
                    display: none;
                }
            }
        }
    }

    .media_social {
        position: fixed;
        color: #a8b2d1;
        width: 40px;
        bottom: 0px;
        right: auto;
        z-index: 10;
        left: 40px;

        ${devices.smartphone} {
            display: none;
        }

        ${devices.ipads} {
            display: none;
        }

        .item_media {
            display: flex;
            flex-direction: column;
            align-items: center;
            -webkit-box-align: center;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--light-text-grey)"
                    : "var(--dark-text-white)"};
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

            &::after {
                content: "";
                background-color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-grey)"
                        : "var(--dark-text-white)"};
                margin: 0px auto;
                margin-top: 20px;
                display: block;
                height: 90px;
                width: 1px;
            }
        }
    }

    .media_social_right {
        position: fixed;
        color: #a8b2d1;
        width: 40px;
        bottom: 0px;
        right: 40px;
        z-index: 10;
        left: auto;

        ${devices.smartphone} {
            display: none;
        }

        ${devices.ipads} {
            display: none;
        }

        .item_media {
            display: flex;
            flex-direction: column;
            align-items: center;
            -webkit-box-align: center;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--light-text-grey)"
                    : "var(--dark-text-white)"};
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

            &::after {
                content: "";
                background-color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-grey)"
                        : "var(--dark-text-white)"};
                margin: 0px auto;
                margin-top: 20px;
                display: block;
                height: 90px;
                width: 1px;
            }
        }
    }
`;
