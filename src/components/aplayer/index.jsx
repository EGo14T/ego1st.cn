import React, { useEffect, useRef } from "react";
import "APlayer/dist/APlayer.min.css";
import APlayer from "APlayer";
import axios from "axios";

function EAplayer(props) {
    const api = "https://api.i-meto.com/meting/api?server=netease&type=song&id=1383893826";
    const { songId } = props;
    const aplayerElm = useRef();

    useEffect(() => {
        axios.get(api).then((res) => {
            new APlayer({
                showlrc: 3,
                theme: "#8d7561",
                music: res.data,
                container: aplayerElm.current,
            });
        });
    }, []);

    return <div ref={aplayerElm} />;
}

export default EAplayer;