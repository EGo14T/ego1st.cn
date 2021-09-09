import React, { useEffect } from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import BlogPostItem from "@theme/BlogPostItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Navbar from '@theme/Navbar';
import Link from "@docusaurus/Link";
import Main from "../Main";

function BlogListPage(props) {
    const { metadata, items } = props;

    const { page, totalPages } = metadata;
    const { previousPage, nextPage } = metadata;

    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { header_bg } = customFields;

    const Pagination = () => {
        let res = [];

        if (previousPage) {
            res.push(
                <Link key="prepage" className="extend prev" to={previousPage}>
                    <i className="fa fa-angle-left"></i>
                </Link>
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
                res.push(
                    <Link className="page-number" key={i} to={i === 1 ? `/` : `/page/${i}`}>
                        {i}
                    </Link>
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
            <header className="header">
                <div className="header-inner">
                    <div className="site-brand-wrapper" style={{ backgroundImage: `url(${header_bg})` }}>
                        <Navbar/>
                        <Head>
                            <meta name="keywords" content="ego1st.cn" />
                            <title>ego1st.cn</title>
                        </Head>
                    </div>
                </div>
            </header>
            <Main>
                <section id="posts" className="posts-expand">
                    {items.map(({ content: BlogPostContent }) => (
                        <BlogPostItem
                            key={BlogPostContent.metadata.permalink}
                            frontMatter={BlogPostContent.frontMatter}
                            metadata={BlogPostContent.metadata}
                            truncated={BlogPostContent.metadata.truncated}
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
