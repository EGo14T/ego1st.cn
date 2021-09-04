import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";

function BlogPostPage(props) {
    const { content: BlogPostContents } = props;
    const { frontMatter, metadata } = BlogPostContents;
    const { title, description, nextItem, prevItem } = metadata;

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
                <div style={{ fontSize: "60px", paddingTop: "200px" }}>hi,ego1st~</div>
            </div>
            {BlogPostContents && (
                <>
                    <BlogPostItem frontMatter={frontMatter} metadata={metadata} isBlogPostPage>
                        <BlogPostContents />
                    </BlogPostItem>
                    {/* {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />} */}
                </>
            )}
        </Layout>
    );
}

export default BlogPostPage;
