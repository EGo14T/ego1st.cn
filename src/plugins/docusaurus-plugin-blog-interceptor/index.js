const blogPluginExports = require("@docusaurus/plugin-content-blog");
const blogPlugin = blogPluginExports.default;

function getBlogWordCount(mdContent) {
    const parseMD = mdContent
        .replace(/\-\-\-\r\n(?:.|\r\n)*\-\-\-\r\n/g, "")
        .replace("<!--truncate-->", "")
        .replace(/\#/g, "")
        .replace(/\s+/g, "");
    const words = parseMD.length;
    return words;
}

function blogInterceptor(...pluginArgs) {
    const blogPluginInstance = blogPlugin(...pluginArgs);

    return {
        ...blogPluginInstance,
        async contentLoaded({ content, allContent, actions }) {
            const { blogPosts } = content;
            const { addRoute, createData } = actions;

            // blogPosts.map((blog) => {
            //     blog.metadata.words = getBlogWordCount(blog.content);
            // });

            await blogPluginInstance.contentLoaded({ content, allContent, actions });
        },
    };
}

module.exports = {
    ...blogPluginExports,
    default: blogInterceptor,
};
