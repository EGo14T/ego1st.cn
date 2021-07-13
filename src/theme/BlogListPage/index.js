import React, { useEffect } from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import BlogPostItem from "@theme/BlogPostItem";
import BlogSidebar from "@theme/BlogSidebar"
import styles from "./styles.module.css";

function BlogListPage(props) {
  const { metadata, items } = props;

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <Head>
            <meta name="keywords" content="ego1st.cn" />
            <title>ego1st.cn</title>
          </Head>
          <div className={styles.siteWrapper}>
            <div style={{ fontSize: "60px", paddingTop: "200px" }}>hi,ego1st~</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.postItem}>
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
          </div>
          <aside className={styles.sidebar}>
            <BlogSidebar></BlogSidebar>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
