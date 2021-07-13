import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";



function BlogPostItem(props) {
  const { children, metadata } = props;

  const { date, formattedDate, permalink, tags, readingTime, title, editUrl,words } = metadata;

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  let dateStr = `${year}-${month}-${day}`;

  const itemHeader = () => {
    return (
      <div className={styles.itemHeader}>
        <div className={styles.itemTitle}>
          <Link to={permalink}>{title}</Link>
        </div>

        <div className={styles.itemInfo}>
          <span>发表于 {dateStr}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {itemHeader()}
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </div>
  );
}

export default BlogPostItem;
