// MIT License

// Copyright (c) 2018 Matthias Fischer

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

module.exports = function() {
    const findChildNode = {};

    /**
     * Searches an specific node by an attribute.
     * @param {array} childNodes 
     * @param {string} key 
     * @param {string} value 
     * @returns {object|null}
     */
    findChildNode.byAttribute = (childNodes, key, value) => {
        var returnNode = null;
        
        try {
            childNodes.forEach((node) => {
                if(node.attrs) {

                    try {
                        node.attrs.forEach((attribute) => {
                            if(attribute.name == key 
                                && attribute.value == value) {
                                returnNode = node;
                                throw BreakException;
                            }
                        });
                    } catch(e) {}

                    if(returnNode != null) {
                        throw BreakException;
                    }

                }

                if(node.childNodes && returnNode == null) {
                    var returnValue = findChildNode.byAttribute(node.childNodes, key, value);
                    if(returnValue) {
                        returnNode = returnValue;
                        throw BreakException;
                    }
                }
            });
        } catch(e) {

        }

        return returnNode;
    }

    /**
     * Searched an specific node by id.
     * @param {string} childNodes 
     * @param {string} id
     * @returns {object|null}
     */
    findChildNode.byId = (childNodes, id) => {
        return findChildNode.byAttribute(childNodes, 'id', id);
    }

    /**
     * Searched an specific node by class name.
     * @param {string} childNodes 
     * @param {string} className 
     * @returns {object|null}
     */
    findChildNode.byClass = (childNodes, className) => {
        return findChildNode.byAttribute(childNodes, 'class', className);
    }
    
    return findChildNode; 
}