import React, { useEffect, useRef } from 'react';
import './APlayer.min.css';

function EAplayer(props) {
    const { songid } = props;
    const api = `https://api.i-meto.com/meting/api?server=netease&type=song&id=${songid}`;
    const aplayerElm = useRef();

    useEffect(() => {
        const APlayer = require('APlayer');
        const axios = require('axios');
        axios.get(api).then((res) => {
            new APlayer({
                showlrc: 3,
                theme: '#8d7561',
                music: res.data,
                container: aplayerElm.current,
            });
        });
    }, []);

    return <div ref={aplayerElm} />;
}

export default EAplayer;
