import React, { useEffect, useRef } from "react";
import "APlayer/dist/APlayer.min.css";
import APlayer from "APlayer";
import axios from "axios";

export default function EAplayer(props) {
    const api = "https://api.i-meto.com/meting/api?server=netease&type=song&id=";
    const { songId } = props;
    const aplayerElm = useRef();

    useEffect(() => {
        axios.get(api + songId).then((res) => {
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
