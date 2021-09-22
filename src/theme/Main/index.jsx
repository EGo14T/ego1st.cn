import React from "react";
import BlogSidebar from "@theme/BlogSidebar";

export default function Main(props) {
    const { isBlogPostPage, toc } = props;

    return (
        <main className="main">
            <div className="main-inner">
                <div className="content-wrap">
                    <div className="content">{props.children}</div>
                </div>
                <BlogSidebar isBlogPostPage={isBlogPostPage} toc={toc} />
            </div>
        </main>
    );
}
