module.exports = function (context, options) {
  return {
    name: "font-awesome-plugin",
    injectHtmlTags({ content }) {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "stylesheet",
              href: "//cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
            },
          },
        ],
      };
    },
  };
};
