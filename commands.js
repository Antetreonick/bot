let mm = ['mewo mreow MEWO', 'mroew, mew, eeoowwwww, MEOOOOWWW, mreo', 'mewo mreowwww', 'MEWOOOOOOO','mrweooooo'];
let fs = require('fs');

let tems = JSON.parse(fs.readFileSync('./items.json'));

function mewo() {
    let m = Math.floor(Math.random() * (mm.length-1 - 0 + 1) + 0);

    return mm[m];
}
function getid(m) {
    return m.p._id;
}
function mlist() {
    return fs.readdirSync('./midis', 'utf-8');
}
function temsf() {
    let tems2 = [];
    let mm = Object.keys(tems);

    for (let i = 0; i < mm.length; i++) {
        tems2.push(`${mm[i]} for $${tems[mm[i]]}`);
    }
    console.log(tems2);
    return tems2.join(', ');
}
module.exports = { mewo, getid, mlist, temsf };