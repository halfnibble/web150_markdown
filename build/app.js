var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pumpkin = function () {
    function Pumpkin() {
        _classCallCheck(this, Pumpkin);

        console.log("Newester pumpkin #" + this.getNumber());
    }

    _createClass(Pumpkin, [{
        key: "getNumber",
        value: function getNumber() {
            return Math.floor(Math.random() * 100) + 1;
        }
    }]);

    return Pumpkin;
}();

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Markdown = function () {
    function Markdown() {
        _classCallCheck$2(this, Markdown);

        this.node = null;
    }

    _createClass$2(Markdown, [{
        key: 'parse',
        value: function parse(text) {
            var textArray = text.split('\n');
            var result = document.createElement('div');
            this.node = null;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = textArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var line = _step.value;

                    var nodeType = this.getNodeType(line),
                        parentNodeType = this.getParentNodeType(nodeType);
                    line = this.cleanLine(line);
                    if (parentNodeType === null) {
                        if (this.node !== null) {
                            result.appendChild(this.node.cloneNode(true));
                            this.node = null;
                        }
                        result.appendChild(this.createNode(nodeType, line));
                    } else {
                        if (this.node === null) {
                            this.node = this.createNode(parentNodeType, '');
                        }
                        this.node.appendChild(this.createNode(nodeType, line));
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return result;
        }
    }, {
        key: 'getNodeType',
        value: function getNodeType(line) {
            if (line === '') {
                return 'br';
            } else if (/^#{1,6}/.test(line)) {
                var headerNumber = 0;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = line[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var char = _step2.value;

                        if (headerNumber >= 6) {
                            break;
                        }
                        if (char === '#') {
                            headerNumber += 1;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return 'h' + headerNumber;
            } else if (/^-\s/.test(line)) {
                return 'li';
            } else {
                return 'p';
            }
        }
    }, {
        key: 'cleanLine',
        value: function cleanLine(line) {
            return line.replace(/^#{1,6}\s+|^-\s+/, '');
        }
    }, {
        key: 'getParentNodeType',
        value: function getParentNodeType(nodeType) {
            switch (nodeType) {
                case 'li':
                    return 'ul';
                default:
                    return null;
            }
        }
    }, {
        key: 'createNode',
        value: function createNode(nodeType, text) {
            var node = document.createElement(nodeType);
            if (text) {
                node.innerHTML = text;
            }
            return node;
        }
    }]);

    return Markdown;
}();

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Editor = function () {
    function Editor(idInput, idOutput) {
        _classCallCheck$1(this, Editor);

        this.input = document.getElementById(idInput);
        this.output = document.getElementById(idOutput);
        this.markdown = new Markdown();
        this.setup();
    }

    _createClass$1(Editor, [{
        key: 'setup',
        value: function setup() {
            var _this = this;

            this.input.addEventListener('keyup', function () {
                var content = _this.input.value;
                var dom = _this.markdown.parse(content);
                _this.clearOutput().appendChild(dom);
            }, false);
        }
    }, {
        key: 'clearOutput',
        value: function clearOutput() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.output.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var content = _step.value;

                    content.remove();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return this.output;
        }
    }]);

    return Editor;
}();

var pumpkie = new Pumpkin();

var editor = new Editor('markdownInput', 'markdownOutput');
