import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import Navbar from "@theme/Navbar";

function BlogPostPage(props) {
    const { content: BlogPostContents } = props;
    const { frontMatter, metadata } = BlogPostContents;
    const { hide_table_of_contents: hideTableOfContents, keywords } = frontMatter;
    const { title, description } = metadata;

    return (
        <Layout title={title} description={description}>
            <div
                style={{
                    backgroundImage: "url(https://cdn.ego1st.cn/themeImg/header-weather.jpg)",
                    height: "750px",
                    width: "100%",
                    position: "relative",
                    backgroundPosition: "center  30%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    textAlign: "center",
                }}
            >
                <Navbar />
                <div style={{ fontSize: "60px", paddingTop: "200px" }}>hi,ego1st~</div>
            </div>
            {BlogPostContents && (
                <>
                    <BlogPostItem frontMatter={frontMatter} metadata={metadata} isBlogPostPage toc={!hideTableOfContents && BlogPostContents.toc ? BlogPostContents.toc : undefined}>
                        <BlogPostContents />
                    </BlogPostItem>
                    {/* {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />} */}
                </>
            )}
        </Layout>
    );
}

export default BlogPostPage;
