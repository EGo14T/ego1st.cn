import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function CountView(props) {
    return (
        <BrowserOnly fallback={<div></div>}>
            {() => {
                const addVistors = require("../../js/leancloud").addVistors;
                const addVistors = require("../../js/leancloud").queryVistors;
                const { isBlogPostPage, url, title } = props;
                const [time, setTime] = useState();
                if (isBlogPostPage) {
                    addVistors(url, title).then((res) => {
                        setTime(res);
                    });
                } else {
                    queryVistors(title).then((res) => {
                        setTime(res);
                    });
                }

                return <span title="vistors">{time}</span>;
            }}
        </BrowserOnly>
    );
}
