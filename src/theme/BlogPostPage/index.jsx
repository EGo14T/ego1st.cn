import React, { useEffect, useRef, useLayoutEffect } from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import Navbar from "@theme/Navbar";

function BlogPostPage(props) {
    const { content: BlogPostContents } = props;
    const { frontMatter, metadata } = BlogPostContents;
    const { hide_table_of_contents: hideTableOfContents, keywords } = frontMatter;
    const { title, description } = metadata;

    useLayoutEffect(() => {
        window.addEventListener("scroll", bindHandleScroll);
        document.scrollingElement.scrollTop = 630;
    }, []);

    const bindHandleScroll = (e) => {
        if (document.scrollingElement.scrollTop < 5) {
            document.scrollingElement.scrollTop = 630;
            window.removeEventListener("scroll", bindHandleScroll);
        }
    };

    return (
        <Layout title={title} description={description} isBlogPostPage>
            {BlogPostContents && (
                <>
                    <BlogPostItem
                        frontMatter={frontMatter}
                        metadata={metadata}
                        isBlogPostPage
                        toc={!hideTableOfContents && BlogPostContents.toc ? BlogPostContents.toc : undefined}
                    >
                        <BlogPostContents />
                    </BlogPostItem>
                    {/* {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />} */}
                </>
            )}
        </Layout>
    );
}

export default BlogPostPage;
