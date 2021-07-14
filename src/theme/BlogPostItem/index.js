import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import Link from "@docusaurus/Link";

function BlogPostItem(props) {
  const { children, metadata } = props;

  const { date, formattedDate, permalink, tags, readingTime, title, editUrl, words } = metadata;

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  let dateStr = `${year}-${month}-${day}`;

  const itemHeader = () => {
    return (
      <header className="post-header">
        <h1 className="post-title">
          <Link to={permalink}>{title}</Link>
        </h1>
        <div className="post-date">
          <div className="post-month">{month}月</div>
          <div className="post-day">{day < 10 ? `0${day}` : day}</div>
        </div>
        <div className="post-meta">
          <span className="post-time">发表于 {dateStr}</span>
        </div>
      </header>
    );
  };

  const itemBody = () => {
    return (
      <div className="post-body">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        <div className="post-button text-center">
          <Link className="btn scaleup" to={permalink}>阅读全文 »</Link>
        </div>
      </div>
    );
  };

  return (
    <article className="post post-type-normal">
      <div className="post-block">
        {itemHeader()}
        {itemBody()}
      </div>
    </article>
  );
}

export default BlogPostItem;
