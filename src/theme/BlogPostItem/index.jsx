import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import Link from "@docusaurus/Link";

import Main from "../Main";
import { queryVistors } from "../../js/leancloud";

function BlogPostItem(props) {
    const { children, metadata, isBlogPostPage = false } = props;
    const { date, permalink, tags, title, words } = metadata;
    const tag = tags[0];
    const { permalink: tagLink, label } = tag;

    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    let dateStr = `${year}-${month}-${day}`;

    useEffect(() => {
        console.log(queryVistors(title));
    }, []);

    const postDate = () => {
        return (
            <div className="post-date">
                <div className="post-month">{month}月</div>
                <div className="post-day">{day < 10 ? `0${day}` : day}</div>
            </div>
        );
    };

    const postBadge = () => {
        return (
            <div className="post-badge">
                <span>
                    <Link to={tagLink}>{label}</Link>
                </span>
            </div>
        );
    };

    const itemHeader = () => {
        return (
            <header className="post-header">
                <h1 className="post-title">
                    <Link to={permalink}>{title}</Link>
                </h1>
                <div className="post-meta">
                    <span className="post-time">
                        <span className="post-meta-item-icon">
                            <i className="fa fa-calendar"></i>
                        </span>
                        <span className="post-meta-item-text">发表于</span>
                        <span>{dateStr}</span>
                    </span>

                    <span className="post-wordcount">
                        <span className="post-meta-divider">•</span>
                        <span className="post-meta-item-icon">
                            <i className="fa fa-file-word-o"></i>
                        </span>
                        <span className="post-meta-item-text">字数统计</span>
                        <span title="字数统计">{words}</span>
                    </span>

                    <span className="post-vistors">
                        <span className="post-meta-divider">•</span>
                        <span className="post-meta-item-icon">
                            <i className="fa fa-eye"></i>
                        </span>
                        <span className="post-meta-item-text">被</span>
                        <span title="vistors">{words}</span>
                        <span className="post-meta-item-text">人看爆</span>
                    </span>
                </div>
            </header>
        );
    };

    const itemBody = () => {
        return (
            <div className="post-body">
                <MDXProvider components={MDXComponents}>{children}</MDXProvider>
                <div className="post-button text-center">
                    {!isBlogPostPage && (
                        <Link className="btn scaleup" to={permalink}>
                            阅读全文 »
                        </Link>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            {isBlogPostPage ? (
                <Main>
                    <section id="posts" className="posts-expand">
                        <article className="post post-type-normal">
                            <div className="post-block">
                                {postDate()}
                                {postBadge()}
                                {itemHeader()}
                                {itemBody()}
                            </div>
                        </article>
                    </section>
                </Main>
            ) : (
                <article className="post post-type-normal">
                    <div className="post-block">
                        {postDate()}
                        {postBadge()}
                        {itemHeader()}
                        {itemBody()}
                    </div>
                </article>
            )}
        </>
    );
}

export default BlogPostItem;
