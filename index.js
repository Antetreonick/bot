const Client = require('mpp-client-net');

const client = new Client.Client('wss://vps.8448.space:8443', process.env.token);

client.start();
client.setChannel('lobby');

const MidiPlayer = require('./midiplayer.js');

const player = new MidiPlayer.Player();

let MPP = client;
MPP.press = MPP.startNote;
MPP.release = MPP.stopNote;

player.on('midiEvent', (ww) => {
    if (typeof ww.noteName !== 'undefined') {
        if (ww.noteName.length == 2 && ww.name !== 'Note off') {
            let nom3 = Array.from(ww.noteName.toLowerCase());

            nom3[1] = nom3[1] - 1;
            MPP.press(nom3.join(''), ww.velocity / 100);
        } else {
            let nom3 = Array.from(ww.noteName.toLowerCase());

            nom3[1] = nom3[1] - 1;
            MPP.release(nom3.join(''));
        }
    }
});
player.on('midiEvent', (ww) => {
    if (typeof ww.noteName !== 'undefined') {
        if (ww.name !== 'Note off') {
            if (ww.noteName == 'Bb0') {
                MPP.press('as-1', ww.velocity / 100)
            } else if (ww.noteName == 'Db0') {
                MPP.press('cs-1', ww.velocity / 100);
            } else if (ww.noteName == 'Eb0') {
                MPP.press('ds-1', ww.velocity / 100);
            } else if (ww.noteName == 'Gb0') {
                MPP.press('fs-1', ww.velocity / 100);
            } else if (ww.noteName == 'Ab0') {
                MPP.press('gs-1', ww.velocity / 100);
            } else if (ww.noteName == 'Bb0') {
                MPP.press('as-1', ww.velocity / 100);
            } else if (ww.noteName == 'Db1') {
                MPP.press('cs0', ww.velocity / 100);
            } else if (ww.noteName == 'Eb1') {
                MPP.press('ds0', ww.velocity / 100);
            } else if (ww.noteName == 'Gb1') {
                MPP.press('fs0', ww.velocity / 100);
            } else if (ww.noteName == 'Ab1') {
                MPP.press('gs0', ww.velocity / 100);
            } else if (ww.noteName == 'Bb1') {
                MPP.press('as0', ww.velocity / 100);
            } else if (ww.noteName == 'Db2') {
                MPP.press('cs1', ww.velocity / 100);
            } else if (ww.noteName == 'Eb2') {
                MPP.press('ds1', ww.velocity / 100);
            } else if (ww.noteName == 'Gb2') {
                MPP.press('fs1', ww.velocity / 100);
            } else if (ww.noteName == 'Ab2') {
                MPP.press('gs1', ww.velocity / 100);
            } else if (ww.noteName == 'Bb2') {
                MPP.press('as1', ww.velocity / 100);
            } else if (ww.noteName == 'Db3') {
                MPP.press('cs2', ww.velocity / 100);
            } else if (ww.noteName == 'Eb3') {
                MPP.press('ds2', ww.velocity / 100);
            } else if (ww.noteName == 'Gb3') {
                MPP.press('fs2', ww.velocity / 100);
            } else if (ww.noteName == 'Ab3') {
                MPP.press('gs2', ww.velocity / 100);
            } else if (ww.noteName == 'Bb3') {
                MPP.press('as2', ww.velocity / 100);
            } else if (ww.noteName == 'Db4') {
                MPP.press('cs3', ww.velocity / 100);
            } else if (ww.noteName == 'Eb4') {
                MPP.press('ds3', ww.velocity / 100);
            } else if (ww.noteName == 'Gb4') {
                MPP.press('fs3', ww.velocity / 100);
            } else if (ww.noteName == 'Ab4') {
                MPP.press('gs3', ww.velocity / 100);
            } else if (ww.noteName == 'Bb4') {
                MPP.press('as3', ww.velocity / 100);
            } else if (ww.noteName == 'Db5') {
                MPP.press('cs4', ww.velocity / 100);
            } else if (ww.noteName == 'Eb5') {
                MPP.press('ds4', ww.velocity / 100);
            } else if (ww.noteName == 'Gb5') {
                MPP.press('fs4', ww.velocity / 100);
            } else if (ww.noteName == 'Ab5') {
                MPP.press('gs4', ww.velocity / 100);
            } else if (ww.noteName == 'Bb5') {
                MPP.press('as4', ww.velocity / 100)
            } else if (ww.noteName == 'Bb6') {
                MPP.press('as5', ww.velocity / 100);
            } else if (ww.noteName == 'Db6') {
                MPP.press('cs5', ww.velocity / 100);
            } else if (ww.noteName == 'Eb6') {
                MPP.press('ds5', ww.velocity / 100);
            } else if (ww.noteName == 'Gb6') {
                MPP.press('fs5', ww.velocity / 100);
            } else if (ww.noteName == 'Ab6') {
                MPP.press('gs5', ww.velocity / 100);
            } else if (ww.noteName == 'Bb6') {
                MPP.press('as5', ww.velocity / 100);
            }
        } else {
            if (ww.noteName == 'Bb0') {
                MPP.release('as-1');
            } else if (ww.noteName == 'Db0') {
                MPP.release('cs-1');
            } else if (ww.noteName == 'Eb0') {
                MPP.release('ds-1');
            } else if (ww.noteName == 'Gb0') {
                MPP.release('fs-1');
            } else if (ww.noteName == 'Ab0') {
                MPP.release('gs-1');
            } else if (ww.noteName == 'Bb0') {
                MPP.release('as-1');
            } else if (ww.noteName == 'Db1') {
                MPP.release('cs0');
            } else if (ww.noteName == 'Eb1') {
                MPP.release('ds0');
            } else if (ww.noteName == 'Gb1') {
                MPP.release('fs0');
            } else if (ww.noteName == 'Ab1') {
                MPP.release('gs0');
            } else if (ww.noteName == 'Bb1') {
                MPP.release('as0');
            } else if (ww.noteName == 'Db2') {
                MPP.release('cs1');
            } else if (ww.noteName == 'Eb2') {
                MPP.release('ds1');
            } else if (ww.noteName == 'Gb2') {
                MPP.release('fs1');
            } else if (ww.noteName == 'Ab2') {
                MPP.release('gs1');
            } else if (ww.noteName == 'Bb2') {
                MPP.release('as1');
            } else if (ww.noteName == 'Db3') {
                MPP.release('cs2');
            } else if (ww.noteName == 'Eb3') {
                MPP.release('ds2');
            } else if (ww.noteName == 'Gb3') {
                MPP.release('fs2');
            } else if (ww.noteName == 'Ab3') {
                MPP.release('gs2');
            } else if (ww.noteName == 'Bb3') {
                MPP.release('as2');
            } else if (ww.noteName == 'Db4') {
                MPP.release('cs3');
            } else if (ww.noteName == 'Eb4') {
                MPP.release('ds3');
            } else if (ww.noteName == 'Gb4') {
                MPP.release('fs3');
            } else if (ww.noteName == 'Ab4') {
                MPP.release('gs3');
            } else if (ww.noteName == 'Bb4') {
                MPP.release('as3');
            } else if (ww.noteName == 'Db5') {
                MPP.release('cs4');
            } else if (ww.noteName == 'Eb5') {
                MPP.release('ds4');
            } else if (ww.noteName == 'Gb5') {
                MPP.release('fs4');
            } else if (ww.noteName == 'Ab5') {
                MPP.release('gs4');
            } else if (ww.noteName == 'Bb5') {
                MPP.release('as4')
            } else if (ww.noteName == 'Bb6') {
                MPP.release('as5');
            } else if (ww.noteName == 'Db6') {
                MPP.release('cs5');
            } else if (ww.noteName == 'Eb6') {
                MPP.release('ds5');
            } else if (ww.noteName == 'Gb6') {
                MPP.release('fs5');
            } else if (ww.noteName == 'Ab6') {
                MPP.release('gs5');
            } else if (ww.noteName == 'Bb6') {
                MPP.release('as5');
            }
        }
    }
});
function stop() {
    player.stop();
    playing = false;
}
function play(m, type) {
    if (type == 'file') {
        if (!playing) {
            player.loadFile(`./midis/${m}`);
            player.play();
            playing = true;
        } else {
            player.stop();
            player.loadFile(`./midis/${m}`);
            player.play();
            playing = true;
        }
    } else if (type == 'arraybuffer') {
        if (!playing) {
            player.loadArrayBuffer(m);
            player.play();
            playing = true;
        } else {
            player.stop();
            player.loadArrayBuffer(m);
            player.play();
            playing = true;
        }
    }
}

let commands = require('./commands.js');
let economy = require('./economy.js');
let mmmmmmmmmmmmmmm = [];
let playing = false;

function ranm(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let mmmm = ['a-1', 'as-1', 'b-1', 'c0', 'cs0', 'd0', 'ds0', 'e0', 'f0', 'fs0', 'g0', 'gs0', 'a0', 'as0', 'b0', 'c1', 'cs1', 'd1', 'ds1', 'e1', 'f1', 'fs1', 'g1', 'gs1', 'a1', 'as1', 'b1', 'c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2', 'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3', 'c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a4', 'as4', 'b4', 'c5', 'cs5', 'd5', 'ds5', 'e5', 'f5', 'fs5', 'g5', 'gs5', 'a5', 'as5', 'b5', 'c6', 'cs6', 'd6', 'ds6', 'e6', 'f6', 'fs6', 'g6', 'gs6', 'a6', 'as6', 'b6', 'c7'];
client.on('hi', () => {
    try {
        client.userset({
            name: 'mewobot (mhelp)',
            color: '#ff004f'
        });
        mm = true;
        client.on('a', (m) => {
            if (m.a == 'mhelp') {
                client.sendChat('mmewo, mid (says your id), mstop (stop playing), mplay <midi name> (start playing), mlist');
            } else if (m.a == 'mmewo') {
                client.sendChat(commands.mewo());
            } else if (m.a == 'mid') {
                client.sendChat(`your id is \`${commands.getid(m)}\``);
            } else if (m.a == 'mstop') {
                stop();
            } else if (m.a.startsWith('mplay ')) {
                play(m.a.substr(6), 'file');
            } else if (m.a == 'mlist') {
                client.sendChat(commands.mlist().join(', '));
            } else if (m.a.startsWith('mjs')) {
                if (m.p._id == '6148afe0128d1d20820186fe' || 'e68c1370a95f42db452e89fb') {
                    eval(m.a.substr(4));
                }
            } else if (m.a.startsWith('mplayurl ')) {
                fetch(m.a.substr(9)).then((res => {
                    res.arrayBuffer().then((res) => {
                        play(res, 'arraybuffer');
                    });
                })).catch((e) => {
                    console.log(e);
                });
            } else if (m.a == 'mb' || m.a == 'mbalance') {
                client.sendChat(`your balance is: $${economy.getUser(m.p).money}. items: ${economy.getUser(m.p).inventory.join(', ')}`);
            } else if (m.a == 'mwork') {
                if (!mmmmmmmmmmmmmmm.includes(m.p._id)) {
                    client.sendChat('k');
                    mmmmmmmmmmmmmmm.push(m.p._id);
                    setTimeout(() => {
                        let mm = ranm(60, 1400);

                        economy.writeEconomy(m.p, mm);
                        client.reply(`you made $${mm}`, m.id, m.p._id);
                        mmmmmmmmmmmmmmm.splice(mmmmmmmmmmmmmmm.indexOf(m.p._id), 1);
                    }, ranm(1000*20, 1000*120));
                } else {
                    client.sendChat('you are already working :3');
                }
            } else if (m.a == 'mshop') {
                client.sendChat(commands.temsf());
            } else if (m.a.startsWith('mbuy ')) {
                client.sendChat(economy.buy(m.p, m.a.substr(5)));
            }
            console.log(`${m.p.name}: ${m.a}`);
        });
    } catch (e) {
        console.log(e);
    }
});
