describe("test", function() {

    var findChildNode = require('../index')();
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('./spec/test.json', 'utf8'));

    it("should be true", function(){
        expect(true).toBe(true);
    });

    it("the test obj should not be null", function() {
        expect(obj).not.toBe(null);
    });

    it("should find a node by class", function() {

        var should = { 
            "nodeName": "div",
            "tagName": "div",
            "attrs": [ { "name": "class", "value": "team_kader_position" } ],
            "namespaceURI": "http://www.w3.org/1999/xhtml",
            "childNodes": [ 
                { 
                    "nodeName": "span",
                    "tagName": "span",
                    "attrs": [],
                    "namespaceURI": "http://www.w3.org/1999/xhtml",
                    "childNodes": [ ["Object"] ],
                    "parentNode": ["Circular"] 
                } 
            ],
            "parentNode": ["Circular"] 
        };

        var ret = findChildNode.byClass(obj.childNodes, 'team_kader_position');
        expect(JSON.stringify(ret)).toBe(JSON.stringify(should));
    });

    it("should find a node by id", function() {

        var should = { 
            "nodeName": "div",
            "tagName": "div",
            "attrs": [ {"name": "id", "value": "test"} ],
            "namespaceURI": "http://www.w3.org/1999/xhtml",
            "childNodes": [ ["Object"], ["Object"] ],
            "parentNode": ["Circular"] 
        };

        var ret = findChildNode.byId(obj.childNodes, 'test');
        expect(JSON.stringify(ret)).toBe(JSON.stringify(should));
    });

    it("should find a node by a specific attribute", function() {
        var should = { 
            "nodeName": "div",
            "tagName": "div",
            "attrs": [ {"name": "test5", "value": "test"} ],
            "namespaceURI": "http://www.w3.org/1999/xhtml",
            "childNodes": [ ["Object"] ],
            "parentNode": ["Circular"] 
        };

        var ret = findChildNode.byAttribute(obj.childNodes, 'test5', 'test');
        expect(JSON.stringify(ret)).toBe(JSON.stringify(should));
    });

    it("should find a node by a specific attribute, which is not the first attribute", function() {
        var should = { 
            "nodeName": "br",
            "tagName": "br",
            "attrs": [
                {"name": "id", "value": "test"},
                {"name": "test6", "value": "test"}
            ],
            "namespaceURI": "http://www.w3.org/1999/xhtml",
            "childNodes": [],
            "parentNode": ["Circular"] 
        };

        var ret = findChildNode.byAttribute(obj.childNodes, 'test6', 'test');
        expect(JSON.stringify(ret)).toBe(JSON.stringify(should));
    });
});