/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
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
      copyright: `<div>© ${new Date().getFullYear()}.由Docusaurus强力驱动.豫ICP备19029669号</div><div>Made with By ego1st</div>`,
    },
  },

  // 自定义配置
  customFields: {
    header_bg: "https://cdn.ego1st.cn/themeImg/header-weather.jpg",

    card: {
      avatar: "https://cdn.ego1st.cn/themeImg/card.jpg",
      name: '<span style="opacity:.2;">帅B</span>EGo1ST',
      description: "什么都不会，什么都敢做的全干工程师",
    },

    footer: {
      since: "6/28/2019 19:30:00",
    },

    
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          postsPerPage: 2,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "./src/plugins/fontAwesome"],
};
