import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function CountView(props) {
    const { isBlogPostPage, url, title } = props;
    const [time, setTime] = useState();
    useEffect(() => {
        const addVistors = require("../../js/leancloud").addVistors;
        const queryVistors = require("../../js/leancloud").queryVistors;

        if (isBlogPostPage) {
            addVistors(url, title).then((res) => {
                setTime(res);
            });
        } else {
            queryVistors(title).then((res) => {
                setTime(res);
            });
        }
    }, []);

    return (
        <BrowserOnly fallback={<div></div>}>
            {() => {
                return <span title="vistors">{time}</span>;
            }}
        </BrowserOnly>
    );
}
