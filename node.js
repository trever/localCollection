var localCollection = require('./index.js');

var arr = [];
for (var i = 0; i < 100; i++){
	arr.push({id: i});
};

var Arr = new localCollection(arr);

console.log('Arr.find({id:{$gt: 40}})');
console.log( Arr.find({id:{$gt: 40}}) );