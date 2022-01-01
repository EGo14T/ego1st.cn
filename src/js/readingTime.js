exports.myReadingTime = (content) => {
    const parseMD = content
        .replace(/\-\-\-\r\n(?:.|\r\n)*\-\-\-\r\n/g, "")
        .replace("<!--truncate-->", "")
        .replace(/\#/g, "")
        .replace(/\s+/g, "");
    const words = parseMD.length;
    return words;
};
