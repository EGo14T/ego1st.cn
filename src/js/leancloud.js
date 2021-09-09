const AV = require("leancloud-storage");
AV.init({
    appId: "DMIBOS7zL7HSjBjzvYvr7eMY-gzGzoHsz",
    appKey: "14l8coYH4XyLm1hWQA6thMLo",
    serverURL: "https://leancloud.ego1st.cn",
});

export function queryVistors(title) {
    const { Query } = AV;
    var query = new Query("Counter");
    return new Promise((resolve) => {
        var time;
        query
            .equalTo("title", title)
            .find()
            .then((res) => {
                if (res.length === 0) {
                    time = 0;
                } else {
                    time = res[0].attributes.time;
                }
                resolve(time);
            });
    });
}

export function addVistors(url, title) {
    const { Query } = AV;
    var query = new Query("Counter");
    return new Promise((resolve) => {
        query
            .equalTo("url", url)
            .find()
            .then((res) => {
                if (res.length > 0) {
                    var counter = res[0];
                    counter.save(null, {
                        fetchWhenSave: true,
                    });
                    counter
                        .increment("time")
                        .save()
                        .then((res) => {
                            resolve(res.get("time"));
                        });
                } else {
                    var newcounter = new AV.Object("Counter");
                    /* Set ACL */
                    var acl = new AV.ACL();
                    acl.setPublicReadAccess(true);
                    acl.setPublicWriteAccess(true);
                    newcounter.setACL(acl);
                    /* End Set ACL */
                    newcounter.set("title", title);
                    newcounter.set("url", url);
                    newcounter.set("time", 1);
                    newcounter.save().then((res) => {
                        resolve(res.get("time"));
                    });
                }
            });
    });
}
