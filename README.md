# localCollection
A Sift.JS wrapper that adds array modification and MongoDB collection-like instantiation for easy access to collections.

## MongoDB inspired array filtering
For extended documentation, checkout [MongoDB's Docs](http://docs.mongodb.org/manual/reference/operator/query/) and [Sift.JS](https://github.com/crcn/sift.js)

## Node.js Examples

```javascript

var localCollection = require('sift');

var someArray = [{id: 1}, {id:2}, {id:3}];

var SomeArray = new localCollection(someArray);

// Find
SomeArray.find({id:2});
// [ {id:2} ]

// FindOne
SomeArray.findOne({id:2});
// {id:2}

// Remove
SomeArray.remove({id:2});
// [ {id:1}, {id:3} ]

// Count
SomeArray.find({id:3}).count()
// 1

// Update
SomeArray.update({id:3}, function(ob){ob.magic = true});
// [ {id:1}, {id:3, magic:true} ]

// Insert
SomeArray.insert({yoman: 'guild'});
// [ {id:1}, {id:3, magic:true}, {yoman: 'guild'} ]

// FindAndModify
SomeArray.findAndModify({yoman:'guild'}, function(ob){ob.happiness = true});
// [ {yoman:'guild', happiness:true} ]

```

## Sift Dependency

This package is a simple wrapper on Sift.js. For more information on functionality and features, see [Sift.js](https://github.com/crcn/sift.js)