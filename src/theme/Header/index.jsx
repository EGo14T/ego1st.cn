import React from "react";
import Head from "@docusaurus/Head";
import Navbar from "@theme/Navbar";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@theme/hooks/useThemeContext";

export default function Test() {
    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { header_bg } = customFields;
    const { light, dark } = header_bg;
    const { isDarkTheme } = useThemeContext();

    return (
        <div className="header-inner">
            <div className="site-brand-wrapper" style={{ backgroundImage: `url(${isDarkTheme ? dark : light})` }}>
                <Navbar />
                <Head>
                    <meta name="keywords" content="ego1st.cn" />
                    <title>ego1st.cn</title>
                </Head>
            </div>
        </div>
    );
}
