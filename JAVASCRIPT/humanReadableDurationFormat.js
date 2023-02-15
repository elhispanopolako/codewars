//mine
function formatDuration(seconds) {
    if (seconds == 0) return 'now'
    let res = []
    let year = seconds / 31536000
    if (year >= 1) {
        let y = Math.floor(year)
        res.push(`${y} ${y > 1 ? 'years' : 'year'}`)
        seconds = seconds - (y * 31536000)
    }
    let day = seconds / 86400
    if (day >= 1) {
        let y = Math.floor(day)
        res.push(`${y} ${y > 1 ? 'days' : 'day'}`)
        seconds = seconds - (y * 86400)
    }
    let hour = seconds / 3600
    if (hour >= 1) {
        let h = Math.floor(hour)
        res.push(`${h} ${h > 1 ? 'hours' : 'hour'}`)
        seconds = seconds - (h * 3600)
    }
    let minutes = seconds / 60
    if (minutes >= 1) {
        let m = Math.floor(minutes)
        res.push(`${m} ${m > 1 ? 'minutes' : 'minute'}`)
        seconds = seconds - (m * 60)
    }
    if (seconds >= 1) {
        let s = Math.floor(seconds)
        res.push(`${s} ${s > 1 ? 'seconds' : 'second'}`)
        seconds = seconds - s
    }
    if (res.length == 1) {
        return res[0]
    } else if (res.length == 2) {
        return res[0] + ' and ' + res[1]
    } else if (res.length > 2) {
        let s = res.join(", ")
        s = s.substring(0, s.lastIndexOf(',')) + " and" + s.substring(s.lastIndexOf(',') + 1);
        return s
    }
}
//refactored
function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    }

    const timeUnits = [
        { unit: "year", seconds: 31536000 },
        { unit: "day", seconds: 86400 },
        { unit: "hour", seconds: 3600 },
        { unit: "minute", seconds: 60 },
        { unit: "second", seconds: 1 },
    ];

    const res = [];
    let remainingSeconds = seconds;

    for (const { unit, seconds: unitSeconds } of timeUnits) {
        const count = Math.floor(remainingSeconds / unitSeconds);
        if (count > 0) {
            res.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
            remainingSeconds -= count * unitSeconds;
        }
    }

    if (res.length === 1) {
        return res[0];
    } else {
        const last = res.pop();
        return `${res.join(", ")} and ${last}`;
    }
}