const fs = require('fs');

let mmmm = JSON.parse(fs.readFileSync('./economy.json'));
let tems = JSON.parse(fs.readFileSync('./items.json'));

let tems2 = Object.keys(tems);

function check(p) {
    if (typeof mmmm[p._id] == 'undefined') {
        return false;
    } else {
        return true;
    }
}
function writeUser(p, money) {
    mmmm[p._id] = {
        name: p.name,
        id: p.id,
        _id: p._id,
        money,
        inventory: []
    };
    fs.writeFileSync('./economy.json', JSON.stringify(mmmm));
}
function writeEconomy(p, money, inventory = [], buy = false) {
    if (!check(p)) {
        writeUser(p, money);
    } else {
        if (buy) {
            mmmm[p._id].money = money;
            mmmm[p._id].inventory = inventory;
            fs.writeFileSync('./economy.json', JSON.stringify(mmmm));
        } else {
            mmmm[p._id].money += money;
            mmmm[p._id].inventory = inventory;
            fs.writeFileSync('./economy.json', JSON.stringify(mmmm));
        }
    }
}
function getUser(p) {
    if (check(p)) {
        return mmmm[p._id];
    } else {
        writeUser(p, 0);
        return mmmm[p._id];
    }
}
function buy(p, tem) {
    let m = getUser(p);

    if (tems2.includes(tem)) {
        if (!eval(m.money - tems[tem]).toString().includes('-')) {
            m.money -= tems[tem];
            m.inventory.push(tem);
            writeEconomy(p, m.money, m.inventory, true);
            return `you bought ${tem} for $${tems[tem]}`;
        } else {
            return `you don't have enough money to buy ${tem} sowwy`;
        }
    }
}
module.exports = { writeEconomy, getUser, buy };