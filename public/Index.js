'use strict';

let Kruskal =  require("./Kruskal")

let fs = require('fs'),
    readline = require('readline');

  var kru = new Kruskal();

    let gNodes = 5;
    let gEdges = 7;
    let gFrom = ['MAD', 'MAD','MAD', 'MAD','XDT', 'OTP','FRA'];
    let gTo = ['XDT', 'OTP','FRA', 'BER','OTP', 'FRA','BER'];
    let gWeight = [2,3,4,4,3,4,2];

    if (gNodes && gEdges && gFrom.length && gTo.length && gWeight.length) {
      kru.krk(gNodes, gEdges, gFrom, gTo, gWeight);
    } else console.log('invalid data');
