import React, { useEffect, useState } from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Header(props) {
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { header_bg } = customFields;

    return (
        <header className="header">
            <div className="header-inner">
                <div className="site-brand-wrapper" style={{ backgroundImage: `url(${header_bg})` }}>
                    <Head>
                        <meta name="keywords" content="ego1st.cn" />
                        <title>ego1st.cn</title>
                    </Head>
                </div>
            </div>
        </header>
    );
}
export default Header;
