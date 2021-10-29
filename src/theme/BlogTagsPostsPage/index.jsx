import React from "react";
import CountView from "../../components/CountView";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function BlogTagsPostPage(props) {
    return <CountView isBlogPostPage={true} title={"sss"} url={"/hola"} {...props} />;
}
