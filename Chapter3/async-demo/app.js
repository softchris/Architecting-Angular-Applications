const { getMessages, getOrders } = require('./parallel-functions');

const async = require('async');
const fs = require('fs');

const basePath = __dirname + '/files/';
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
const mappedFiles = files.map( f => basePath + f);
console.log(mappedFiles);

fs.stat(basePath + 'file1.txt', (err, result) => {
  if(err) {
    console.log('err');
  } else {
    const { size, birthtime } = result;
    console.log('Size',size);
    console.log('Created', birthtime);
  }
});

async.map(mappedFiles, fs.stat,(err, results) => {
  if(err) {
    console.log('error', err);
  }
  else {
    results.forEach(({size, birthtime}) => {
      console.log('Size',size);
      console.log('Created', birthtime);
    })
  }
});

function readAsync(file, callback) {
  fs.readFile(file, 'utf8', callback);
}

async.map(mappedFiles, readAsync, (err, results) => {
  if(err) {
    console.log('error', console.error);
  } else {
    results.forEach(file => console.log('file content', file));
  }
});



