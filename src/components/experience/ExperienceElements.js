import styled from "styled-components";
import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

export const ExperienceSite = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    max-width: 800px;
    padding: 0px;

    ${devices.smartphone} {
        min-height: 0px;
    }

    ${devices.ipads} {
        min-height: 0px;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 30px;

        ${devices.smartphone} {
            padding: 80px 25px;
            height: 100vh;
        }
        ${devices.ipads} {
            padding: 50px 50px;
            height: 90vh;
        }

        ${devices.tablet} {
            padding: 50px 100px;
            /* height: 90vh; */
        }
        ${devices.desktops} {
            padding: 120px 0px;
            /* height: 90vh; */
        }
    }

    .expe_content {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        gap: 20px;

        .big_heading {
            color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--light-text-black)"
                    : "var(--dark-text-white)"};
            font-weight: 600;
            font-size: 40px;
            margin: 0px;
            ${devices.smartphone} {
                font-size: 30px;
            }
        }

        h1 {
            color: var(--colorMain);
            font-weight: 500;
            font-size: 14px;
        }
    }

    .rc-tabs {
        border: none !important;
        height: 300px;
        width: 100%;

        ${devices.smartphone} {
            height: 100%;
            gap: 20px;
        }

        ${devices.ipads} {
            height: 100%;
            gap: 20px;
        }
    }
    .rc-tabs-tab {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "var(--colorMain)" : "#8892b0"};
        border-right: 2px solid #233554;
        border-radius: 6px 0px 0px 6px;
        text-transform: capitalize;
        background: transparent;
        padding: 8px 30px;
        font-size: 14px;
        padding: 5px;

        ${devices.smartphone} {
            border-bottom: 2px solid #233554;
            border-radius: 0px 0px 0px 0px;
            border-right: 0px;
        }

        ${devices.ipads} {
            border-bottom: 2px solid #233554;
            border-radius: 0px 0px 0px 0px;
            border-right: 0px;
        }

        &:hover {
            background-color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--darkTab)"
                    : "var(--lightTab)"};
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#fff" : "var(--colorMain)"};
        }
    }
    .rc-tabs-tab .rc-tabs-tab-btn {
        font-weight: 500;
    }
    .rc-tabs-tab.rc-tabs-tab-active {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#444444" : "var(--colorMain)"};
    }
    .rc-tabs-ink-bar {
        background: var(--colorMain) !important;
    }
    .rc-tabs-content-holder {
        background: transparent;
        padding: 10px 30px;
        width: 500px;

        ${devices.smartphone} {
            padding: 0px;
            width: 100%;
        }

        ${devices.ipads} {
            padding: 0px;
            width: 100%;
        }
    }
    .rc-tabs-content {
        margin: auto;

        .content_expe {
            display: flex;
            flex-direction: column;
            gap: 15px;

            h3 {
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--lightText)"
                        : "var(--darkText)"};
                font-weight: 500;

                .company {
                    color: var(--colorMain);
                }
            }

            p {
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};
                letter-spacing: 1.2px;
                font-weight: 300;
                font-size: 12px;
            }

            .text_skill {
                display: flex;
                flex-direction: column;
                font-weight: 400;
                margin-top: 15px;
                font-size: 14px;
                color: #6b7280;
                gap: 1rem;

                .icon {
                    margin-top: 6px;
                    width: 20px;
                }

                .text_keterangan {
                    line-height: 1.8;
                    font-size: 14px;
                    width: 100%;
                }

                li {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;

                    svg {
                        color: var(--colorMain);
                        width: 100%;
                    }
                }
            }
        }
    }
`;
