"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPercent(total, completed) {
    return Math.floor(100 * completed / total);
}
function generateBar(percent, length) {
    let n = 0;
    let proportion = length * percent;
    let bar = '';
    for (let i = 0; i <= 100 * length; i += 100) {
        if (i < proportion
            && proportion < i + 100
            || i == proportion) {
            break;
        }
        n++;
    }
    for (bar; bar.length != length;) {
        if (bar.length < n) {
            bar += '▓';
        }
        else {
            bar += '░';
        }
    }
    return bar;
}
function getBar(req, res) {
    if (!req.query.total || !req.query.completed) {
        return res
            .status(400)
            .send('Required URL  params not found.');
    }
    let total = parseFloat(req.query.total);
    let completed = parseFloat(req.query.completed);
    let barLength = parseFloat(req.query.length) || 10;
    let percent = getPercent(total, completed);
    let bar = generateBar(percent, barLength);
    return res.status(200).json({
        percent: percent,
        progressBar: bar,
    });
}
exports.default = { getBar };
