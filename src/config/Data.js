import {
    illustrator,
    javascript,
    typescript,
    visualCode,
    photoshop,
    firebase,
    reactJs,
    mongoDB,
    github,
    nextJS,
    sqlite,
    nodeJS,
    mySQL,
    vueJs,
    figma,
    html5,
    scss,
    css,
    php,
    git,
    pokedex,
    disneyPlus,
    spkPromethee,
} from "./_images";
import {
    FiExternalLink,
    FiFile,
    FiGithub,
    FiLinkedin,
    FiPhone,
    FiTwitter,
} from "react-icons/fi";
import {
    FaEllipsisV,
    FaCheckCircle,
    FaRegThumbsUp,
    FaLeaf,
    FaInstagram,
} from "react-icons/fa";

export const NAVLINKS = [
    {
        to: "about",
        icon: FaEllipsisV,
        name: "About",
    },
    {
        to: "experience",
        icon: FaEllipsisV,
        name: "Experience",
    },
    {
        to: "work",
        icon: FaEllipsisV,
        name: "Work",
    },
    {
        to: "project",
        icon: FaEllipsisV,
        name: "Project",
    },
];

export const TECH_STACK = [
    {
        tech_img: html5,
        tech_name: "HTML 5",
    },
    {
        tech_img: css,
        tech_name: "CSS",
    },
    {
        tech_img: javascript,
        tech_name: "JavaScript",
    },
    {
        tech_img: typescript,
        tech_name: "TypeScript",
    },
    {
        tech_img: github,
        tech_name: "Github",
    },
    {
        tech_img: reactJs,
        tech_name: "React JS",
    },
    {
        tech_img: visualCode,
        tech_name: "Visual Code",
    },
    {
        tech_img: scss,
        tech_name: "Scss",
    },
    {
        tech_img: mySQL,
        tech_name: "MySQL",
    },
    {
        tech_img: figma,
        tech_name: "Figma",
    },
    {
        tech_img: php,
        tech_name: "PHP",
    },
    {
        tech_img: nodeJS,
        tech_name: "Node JS",
    },
    {
        tech_img: mongoDB,
        tech_name: "MongoDB",
    },
    {
        tech_img: firebase,
        tech_name: "Firebase",
    },
    {
        tech_img: illustrator,
        tech_name: "Illustrator",
    },
    {
        tech_img: photoshop,
        tech_name: "Photoshop",
    },
    {
        tech_img: nextJS,
        tech_name: "Next JS",
    },
    {
        tech_img: sqlite,
        tech_name: "Sqlite",
    },
    {
        tech_img: git,
        tech_name: "Git",
    },
    {
        tech_img: vueJs,
        tech_name: "Vue JS",
    },
];

export const ABOUT_DATA = {
    text_small: "Being a frontend developer / frontend engineer.",
    big_heading: "Who am I <span>&</span> how did i get here.",
    text_description:
        "Hello, i am Prawito . I am from Indonesia who codes for fun, i have been in coding since 2016, when i was studied in Diponegoro University and I am graduated in June 2021. I have been using JavaScripts (Node JS and React Js (Client Side)) for 1.5 year. Now I'm trying to produce a lots of open source project and working as freelancer.",
    skill: [
        { icon: FaCheckCircle, text: "JavaScript (Node & Client Side)" },
        { icon: FaCheckCircle, text: "TypeScript, PHP" },
        { icon: FaCheckCircle, text: "NoSQL (MongoDB & MySQL)" },
        { icon: FaCheckCircle, text: "SQL (Postgre & Sqlite)" },
        {
            icon: FaCheckCircle,
            text: "Design (Figma, CorelDraw, AI & Adobe Photoshop)",
        },
    ],
    card_myArea: [
        {
            backgroundColor: "#3d6270",
            images: reactJs,
            alt: "React JS",
            years: "(0.8 Years)",
            description: "Technology that is my main focus to explore.",
        },
        {
            backgroundColor: "#939caa",
            images: mySQL,
            alt: "MySQL",
            years: "(1.8 Years)",
            description: "Database technology I learned first.",
        },
    ],
    card_myArea2: [
        {
            backgroundColor: "#25397e",
            images: figma,
            alt: "Figma",
            years: "(0.8 Years)",
            description: "I use it to create a user interface.",
        },
        {
            backgroundColor: "#354164",
            images: nodeJS,
            alt: "Node JS",
            years: "(0.5 Years)",
            description: "I learned because it deals with Javascript.",
        },
    ],
};

export const CONTACT_DATA = {
    text_small: "What's Next ?",
    big_heading: "Get in Touch",
    description:
        "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    icon: FaRegThumbsUp,
    to: "mailto:prawito.id@gmail.com",
    button: "Say Hello",
};

export const EXPE_DATA = {
    text_small: "What's Next ?",
    big_heading: "Where from I've Experienced",
    expe: [
        {
            tab: "Training II",
            key: 1,
            heading: "FRONTEND IT PERBANKAN ",
            to: "www.facebook.com",
            text_expe: "@ Thematic Academy DTS KOMINFO",
            date: "August 2021 - October 2021",
            skill: [
                {
                    icon: FaLeaf,
                    desc: "Training to answer the challenges of technological developments in the service sector financial management that aims to equip trainees with basic knowledge, specific hard skills and soft skills with the needs of the banking industry.",
                },
                {
                    icon: FaLeaf,
                    desc: "Shared knowledge about how to do coding with programming technology HTML, CSS, JavaScript, and React JS.",
                },
            ],
        },
        {
            tab: "Internship",
            key: 2,
            heading: "WEB DEVELOPER ",
            to: "www.facebook.com",
            text_expe: "@ PT. KAI Indonesia",
            date: "January 2019 - March 2019",
            skill: [
                {
                    icon: FaLeaf,
                    desc: "Designed, built, and tested an online system for PT. KAI DAOP 6 Yogyakarta employees using PHP, HTML, Bootstrap, JavaScript, and MySQL.",
                },
            ],
        },
        {
            tab: "Training I",
            key: 3,
            heading: "BIG DATA ANALYTICS ",
            to: "www.facebook.com",
            text_expe: "@ Fresh Graduate Academy DTS KOMINFO",
            date: "October 2019 - December 2019",
            skill: [
                {
                    icon: FaLeaf,
                    desc: "Shared knowledge about how to do basic coding with Python.",
                },
                {
                    icon: FaLeaf,
                    desc: "Worked on some final projects to solved current problems using Machine Learning, and data twitter.",
                },
            ],
        },
        {
            tab: "Certificate",
            key: 4,
            heading: "ORACLE ACADEMY ",
            to: "www.facebook.com",
            text_expe: "@ Oracle | Diponegoro University",
            date: "December 2018",
            skill: [
                {
                    icon: FaLeaf,
                    desc: "Oracle Academy is a training program from Oracle that provides training that includes Database design and Database programming with SQL, Database programming with PL/SQL, Java Programming, and Java Fundamentals.",
                },
            ],
        },
    ],
};

export const MEDIA_SOSIAL = [
    {
        to: "https://github.com/id-prawito",
        label: "Github",
        icon: FiGithub,
    },
    {
        to: "https://www.instagram.com/praw.ito/",
        label: "Instagram",
        icon: FaInstagram,
    },
    {
        to: "https://twitter.com/id_praw",
        label: "Twitter",
        icon: FiTwitter,
    },
    {
        to: "https://linkedin.com/in/prawito/",
        label: "Linkedin",
        icon: FiLinkedin,
    },
    {
        to: "tel:+6282137925172",
        label: "Phone",
        icon: FiPhone,
    },
];

export const HERO_DATA = {
    text_small: "Hi, my name is",
    big_heading: "Prawito.",
    big_heading2: "I build things for the web.",
    description:
        "I'm a software engineer specializing in building (andoccasionally designing) exceptional digital experiences. Currently, I'm focused on exploring and learning about JavaScript programming language and others tech stack for frontend engineer.",
    button: [
        {
            to: "https://bit.ly/Certificate_Praw",
            nama_button: "Check My Files",
            icon: FiFile,
        },
        {
            to: "https://github.com/id-prawito",
            nama_button: "Github",
            icon: FiGithub,
        },
    ],
};

export const WORK_DATA = {
    text_small: "Hi bro, this is",
    big_heading: "Some Things I've Built",
    project: [
        {
            style: "row",
            project_to: "https://id-prawito.github.io/pokedex-id/",
            project_img: pokedex,
            alt: "Pokedex-id",
            ml: "-80px",
            mr: "0px",
            ai: "flex-end",
            ta: "right",
            text: "Featured Project",
            description:
                "Pokédex id is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. Search for a Pokémon by name orusing it's National Pokédex number.",
            tect_list: [
                "VS Code",
                "Pokedex API",
                "React",
                "Styled Components",
                "Github Pages",
            ],
            project_link: [
                {
                    to: "https://github.com/id-prawito/pokedex-id",
                    icon: FiGithub,
                },
                {
                    to: "https://id-prawito.github.io/pokedex-id/",
                    icon: FiExternalLink,
                },
            ],
        },
        {
            style: "row-reverse",
            project_to: "https://id-prawito.github.io/disney-plus/",
            project_img: disneyPlus,
            alt: "Disney Plus",
            ml: "0px",
            mr: "-80px",
            ai: "flex-start",
            ta: "left",
            text: "Featured Project",
            description:
                "Disney Plus is a movie search app clone from Disney + website, this app can helps display and sort all movies available in the TMDB API. This App is build with ReactJS, SCSS and Swiper JS. Also, uses Github Pages to deploy.",
            tect_list: [
                "VS Code",
                "TMDB API",
                "React",
                "Scss",
                "Github Pages",
                "Swiper Js",
            ],
            project_link: [
                {
                    to: "https://github.com/id-prawito/disney-plus",
                    icon: FiGithub,
                },
                {
                    to: "https://id-prawito.github.io/disney-plus/",
                    icon: FiExternalLink,
                },
            ],
        },
        {
            style: "row",
            project_to: "https://promethee.ta-spk.xyz",
            project_img: spkPromethee,
            alt: "SPK - Promethee",
            ml: "-80px",
            mr: "0px",
            ai: "flex-end",
            ta: "right",
            text: "Featured Project",
            description:
                "Decision Support System for Priority Determination of Small Dam Construction Development with The Promethee Method (Preference Ranking Organization Methodfor Enrichment Evaluation).",
            tect_list: [
                "VS Code",
                "Laravel",
                "PHP",
                "MySQL",
                "Pond Data",
                "Promethee Method",
            ],
            project_link: [
                {
                    to: "#",
                    icon: FiGithub,
                },
                {
                    to: "https://promethee.ta-spk.xyz",
                    icon: FiExternalLink,
                },
            ],
        },
    ],
};
