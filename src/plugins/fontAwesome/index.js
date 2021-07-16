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
              href: "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
            },
          },
        ],
      };
    },
  };
};
