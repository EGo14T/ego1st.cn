import React from "react";
import Layout from "@theme/Layout";
import Navbar from "@theme/Navbar";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Main from "../Main";
import useScrollPosition from "@theme/hooks/useTOCHighlight";

class BlogTagsPostPage extends React.Component {

 test = () => {
    useScrollPosition((currentPosition, lastPosition) => {
        console.log(currentPosition);
    });
}

    componentDidMount() {
        this.test();
    }

    render() {
        return <div>123</div>;
    }
}

export default BlogTagsPostPage;
