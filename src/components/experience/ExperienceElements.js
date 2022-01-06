import styled from "styled-components";
import themeList from "../../config/themeList";

export const ExperienceSite = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    padding: 0px;
    max-width: 800px;

    .content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;
    }

    .expe_content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: 100%;

        .big_heading {
            margin: 0px;
            font-size: 40px;
            font-weight: 600;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--light-text-black)"
                    : "var(--dark-text-white)"};
        }

        h1 {
            color: #7c3aed;
            font-size: 16px;
            font-weight: 400;
        }
    }

    .rc-tabs {
        border: none !important;
        width: 100%;
        height: 300px;
    }
    .rc-tabs-tab {
        padding: 5px;
        text-transform: capitalize;
        background: transparent;
        /* color: #8892b0; */
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#7c3aed" : "#8892b0"};
        padding: 8px 30px;
        font-size: 14px;
        border-right: 2px solid #233554;
        border-radius: 6px 0px 0px 6px;

        &:hover {
            background-color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--darkTab)"
                    : "var(--lightTab)"};
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#fff" : "#7c3aed"};
        }
    }
    .rc-tabs-tab .rc-tabs-tab-btn {
        font-weight: 500;
    }
    .rc-tabs-tab.rc-tabs-tab-active {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#444444" : "#7c3aed"};
    }
    .rc-tabs-ink-bar {
        background: #7c3aed !important;
    }
    .rc-tabs-content-holder {
        background: transparent;
        width: 500px;
        padding: 10px 30px;
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
                    color: #7c3aed;
                }
            }

            p {
                font-size: 12px;
                font-weight: 300;
                letter-spacing: 1.2px;
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};
            }

            .text_skill {
                color: #6b7280;
                font-size: 14px;
                font-weight: 400;
                display: flex;
                gap: 1rem;
                flex-direction: column;
                margin-top: 15px;

                .icon {
                    width: 20px;
                }

                .text_keterangan {
                    font-size: 14px;
                    width: 100%;
                }

                li {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;

                    svg {
                        color: #7c3aed;
                        width: 100%;
                    }
                }
            }
        }
    }
`;
