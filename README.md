# findChildNode


## Installation
```
npm install find-child-node
```

## Usage
```
var findChildNode = require('find-child-node');

...

var classObj = findChildNode.byClass(childNodes, 'testClass');
var classId = findChildNode.byClass(childNodes, 'testId');
var classAttribute = findChildNode.byAttribute(childNodes, 'testKey', 'testValue');
```