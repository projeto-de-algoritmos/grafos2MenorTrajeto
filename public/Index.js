'use strict';

let Kruskal =  require("./Kruskal")

let fs = require('fs'),
    readline = require('readline');


function readFile(fileName) {

  let fileStream = fs.createReadStream(fileName),
      rl,
      data = '', 
      index = 0,
      gNodes = 0, 
      gEdges = 0, 
      gFrom = [],
      gTo = [],
      gWeight = [];
  
  fileStream.on('error', (err) => {
    console.log('file issue: ', err.message)
  });
      
  rl = readline.createInterface({
      input: fileStream
  });
  // 'line' event - emitted whenever the input stream receives a new line \n
  rl.on('line', (line) => {
      data = line.split(' ');
      if (index == 0) {
          gNodes = parseInt(data[0], 10);
          gEdges = parseInt(data[1], 10);
      } else if (index <= gEdges) {
          gFrom.push(data[0]);
          gTo.push(data[1]);
          gWeight.push(parseInt(data[2], 10));
      }
      index++;
  });

  var kru = new Kruskal();

  rl.on('close', () => {
    if (gNodes && gEdges && gFrom.length && gTo.length && gWeight.length) {
      kru.krk(gNodes, gEdges, gFrom, gTo, gWeight);
    } else console.log('invalid data file');
  });
}

readFile('data1.txt');