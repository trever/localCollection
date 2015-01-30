var sift = require('sift');

var localCollection = function(target){
    if (!target || typeof target != "object") throw new Error('Requires Target Array to Instantiate');
    this.target = target;
    return this;
};

localCollection.prototype.find = function(query){
  var _this = this;
  var x = sift(query, this.target);
  var self = function(){};
  self.prototype = new Array;
  self.prototype.count = this.count;
  self.prototype.toArray = this.toArray;
  var oo = new self;

  x.forEach(function(ob){
    oo.push(ob);
  });

  return oo
};

localCollection.prototype.toArray = function(){
  var arr = Array.prototype.slice.call(this);
  return arr;
}

localCollection.prototype.findOne = function(query){
  var x = this.find(query);
  return x[0];
};

localCollection.prototype.update = function(query, rawSelector){
  var _this = this;
  var x = this.find(query);
  x.forEach(function(ob, i){
    rawSelector(_this.target[_this.target.indexOf(ob)], i, _this.target);
  });
  return this.target
};

localCollection.prototype.remove = function(query){
  var _this = this;
  var x = this.find(query);
  x.forEach(function(ob){
    _this.target.splice(_this.target.indexOf(ob),1);
  });
  return this.target
};

localCollection.prototype.count = function(){
  return this.length
};

localCollection.prototype.insert = function(doc){
  this.target.push(doc);
  return doc
};

localCollection.prototype.findAndModify = function(query, modifier){
  var _this = this;
  var x = this.findOne(query);
  modifier(this.target[this.target.indexOf(ob)], null, this.target);
  return this.target
};

module.exports = localCollection;