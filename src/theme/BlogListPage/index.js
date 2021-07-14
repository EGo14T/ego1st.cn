import React, { useEffect } from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import BlogPostItem from "@theme/BlogPostItem";
import BlogSidebar from "@theme/BlogSidebar";

function BlogListPage(props) {
  const { metadata, items } = props;

  return (
    <Layout>
      <header className="header">
        <div className="header-inner">
          <div className="site-brand-wrapper">
            <Head>
              <meta name="keywords" content="ego1st.cn" />
              <title>ego1st.cn</title>
            </Head>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main-inner">
          <div className="content-wrap">
            <div className="content">
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
            </div>
          </div>
          <BlogSidebar />
        </div>
      </main>
    </Layout>
  );
}

export default BlogListPage;
