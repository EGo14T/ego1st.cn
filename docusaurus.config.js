/** @type {import('@docusaurus/types').DocusaurusConfig} */

const myReadingTime = require('./src/js/readingTime').myReadingTime;

module.exports = {
    title: "ego1st",
    tagline: "Dinosaurs are cool",
    url: "https://ego1st.cn",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "ego1st",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.webp",
            },
            items: [
                { to: "/", label: "Blog", position: "right" },
                {
                    href: "https://github.com/EGo14T",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "light",
            links: [],
        },
    },

    // 自定义配置
    customFields: {
        header_bg: {
            light: "/img/wallhaven-light.png",
            dark: "/img/wallhaven-dark.png",
        },

        card: {
            avatar: "https://cdn.ego1st.cn/themeImg/card.jpg",
            name: '<span style="opacity:.2;">帅B</span>EGo1ST',
            description: "什么都不会，什么都敢做的全干工程师",
        },

        footer: {
            since: "6/28/2019 19:30:00",
            author: "ego1st",
            beian: "豫ICP备19029669号",
        },

        social: [
            {
                title: "Github",
                url: "https://github.com/EGo14T",
                icon: `<i class='fa fa-fw fa-github'></i>`,
            },
            {
                title: "Twitter",
                url: "https://twitter.com/E_Go1ST",
                icon: `<i class='fa fa-fw fa-twitter'></i>`,
            },
        ],
    },

    stylesheets: [
        {
          href: '/font/Caroline.css',
          type: 'text/css',
        },
      ],

    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: false,
                blog: {
                    path: "./blog",
                    routeBasePath: "/",
                    blogSidebarTitle: "近期文章",
                    postsPerPage: 6,
                    feedOptions: {
                        type: "atom",
                        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
                    },
                    readingTime: ({content}) => myReadingTime(content),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
            },
        ],
    ],
    plugins: [
        "docusaurus-plugin-sass",
        "./src/plugins/fontAwesome",
    ],
};
