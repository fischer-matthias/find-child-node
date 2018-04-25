# findChildNode
[![npm version](https://badge.fury.io/js/find-child-node.svg)](https://badge.fury.io/js/find-child-node)
findChildNode is able to find a child node in a json object parsed by [parse5](https://github.com/inikulin/parse5).

## Installation
```
npm install find-child-node
```

## Usage
```javascript
var findChildNode = require('find-child-node')();

var classObj = findChildNode.byClass(childNodes, 'testClass');
var classId = findChildNode.byClass(childNodes, 'testId');
var classAttribute = findChildNode.byAttribute(childNodes, 'testKey', 'testValue');
```

## Methods
- byId - childNodes (Array of object), id (string)
- byClass  - childNodes (Array of object), class (string)
- byAttribute  - childNodes (Array of object), key (string), value (string)
