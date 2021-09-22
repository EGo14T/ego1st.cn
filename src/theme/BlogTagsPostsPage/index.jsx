import React from "react";
import Layout from "@theme/Layout";
import Navbar from '@theme/Navbar';
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Main from "../Main";

function BlogTagsPostPage(props) {

    const { siteConfig } = useDocusaurusContext();
    const { customFields } = siteConfig;
    const { header_bg } = customFields;
    return (
        <Layout>
            <header className="header">
                <div className="header-inner">
                    <div className="site-brand-wrapper" style={{ backgroundImage: `url(${header_bg})` }}>
                        <Navbar />
                        <Head>
                            <meta name="keywords" content="ego1st.cn" />
                            <title>ego1st.cn</title>
                        </Head>
                    </div>
                </div>
            </header>
            <Main>
                <div style={{width:"100%", height:"100%", backgroundColor:"red"}}></div>
            </Main>
        </Layout>
    );
}

export default BlogTagsPostPage;
