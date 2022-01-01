import React, { useState, useLayoutEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import BlogPostItem from "@theme/BlogPostItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Navbar from "@theme/Navbar";
import Link from "@docusaurus/Link";
import Main from "../Main";

function BlogListPage(props) {
    const { metadata, items, history } = props;
    const { page, totalPages } = metadata;
    const { previousPage, nextPage } = metadata;
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { header_bg } = customFields;

    useLayoutEffect(() => {
        if (page > 1) { 
            document.scrollingElement.scrollTop = 630;
        }
    }, []);

    const bindHandleScroll = (e) => {
        if (document.scrollingElement.scrollTop < 5) {
            document.scrollingElement.scrollTop = 630;
            window.removeEventListener("scroll", bindHandleScroll);
        }
    };

    const handleChangePage = (page) => {
        document.scrollingElement.scrollTo({ top: 630, behavior: "smooth" });
        window.addEventListener("scroll", bindHandleScroll);
        setTimeout(() => {
            props.history.push(page);
        }, 500);
    };

    const Pagination = () => {
        let res = [];

        if (previousPage) {
            res.push(
                <span key="prepage" className="extend prev" onClick={() => handleChangePage(previousPage)}>
                    <i className="fa fa-angle-left"></i>
                </span>
            );
        }

        for (let i = 1; i <= totalPages; i++) {
            if (i === page) {
                res.push(
                    <span key={i} className="page-number current">
                        {i}
                    </span>
                );
            } else {
                const link = i === 1 ? `/` : `/page/${i}`;
                res.push(
                    <span className="page-number" key={i} onClick={() => handleChangePage(link)}>
                        {i}
                    </span>
                );
            }
        }

        if (nextPage) {
            res.push(
                <Link key="nextpage" className="extend prev" to={nextPage}>
                    <i className="fa fa-angle-right"></i>
                </Link>
            );
        }

        return res;
    };

    return (
        <Layout>
            <Main>
                <section id="posts" className="posts-expand">
                    {items.map(({ content: BlogPostContent }) => (
                        <BlogPostItem
                            key={BlogPostContent.metadata.permalink}
                            frontMatter={BlogPostContent.frontMatter}
                            metadata={BlogPostContent.metadata}
                            truncated={BlogPostContent.metadata.truncated}
                            history={history}
                            isitem={true}
                        >
                            <BlogPostContent />
                        </BlogPostItem>
                    ))}
                </section>
                <nav className="pagination">{Pagination()}</nav>
            </Main>
        </Layout>
    );
}

export default BlogListPage;
