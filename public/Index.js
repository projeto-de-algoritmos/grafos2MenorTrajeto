'use strict';

var kru = new Kruskal();

let gNodes = 5;
let gEdges = 7;
let gFrom = ['MAD', 'MAD', 'MAD', 'MAD', 'XDT', 'OTP', 'FRA'];
let gTo = ['XDT', 'OTP', 'FRA', 'BER', 'OTP', 'FRA', 'BER'];



function addWeight(hi) {
  
  let gWeight = hi.split(' ')

  gWeight = gWeight.map(Number)
  
  if (gNodes && gEdges && gFrom.length && gTo.length && gWeight.length) {
    kru.krk(gNodes, gEdges, gFrom, gTo, gWeight);
  } else console.log('invalid data');

}