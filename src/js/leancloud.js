const AV = require("leancloud-storage");
AV.init({
    appId: "DMIBOS7zL7HSjBjzvYvr7eMY-gzGzoHsz",
    appKey: "14l8coYH4XyLm1hWQA6thMLo",
    serverURL: "https://dmibos7z.lc-cn-n1-shared.com",
});

export function queryVistors(title) {
    let time;
    const { Query } = AV;
    var query = new Query("Counter");
    query
        .equalTo("title", title)
        .find()
        .then((res) => {
            if (res.length == 0) {
                time = 0;
            } else {
                time = res[0];
            }
        })
        .catch(function (error) {
            alert(JSON.stringify(error));
        });
    return time;
}
