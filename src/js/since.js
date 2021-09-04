export function showDateTime(since) {
    const BirthDay = new Date(since);
    const today = new Date();
    const timeold = today.getTime() - BirthDay.getTime();
    const msPerDay = 24 * 60 * 60 * 1000;
    const e_daysold = timeold / msPerDay;
    const daysold = Math.floor(e_daysold);
    const e_hrsold = (e_daysold - daysold) * 24;
    const hrsold = Math.floor(e_hrsold);
    const e_minsold = (e_hrsold - hrsold) * 60;
    const minsold = Math.floor((e_hrsold - hrsold) * 60);
    const seconds = Math.floor((e_minsold - minsold) * 60);

    return `${daysold}天${hrsold}小时${minsold}分${seconds}秒`;
}
