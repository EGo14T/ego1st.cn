import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function BlogSidebar(props) {
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { social } = customFields;

    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <section>
                    <div className="links-of-author">
                        {social.map((item) => (
                            <span className="links-of-author-item" key={item.title}>
                                <a href={item.url} target="_blank" title={item.title} data-balloon={item.title} data-balloon-pos="up" dangerouslySetInnerHTML={{ __html: item.icon }} />
                            </span>
                        ))}
                    </div>

                    <div className="feed-link">
                        <a className="feed-rss" href="/atom.xml" rel="alternate" target="_blank">
                            <i className="fa fa-rss"></i> <span>RSS 订阅</span>
                        </a>
                    </div>
                </section>
            </div>
        </aside>
    );
}
export default BlogSidebar;
