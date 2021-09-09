import React, { useState, useEffect } from "react";
import { queryVistors, addVistors } from "../../js/leancloud";

export default function CountView(props) {
    const { isBlogPostPage, url, title } = props;

    const [time, setTime] = useState();

    useEffect(() => {
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

    return <span title="vistors">{time}</span>;
}
