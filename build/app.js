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
    }

    _createClass$2(Markdown, [{
        key: 'parse',
        value: function parse(text) {
            var inputArray = text.split('\n');
            var outputDiv = document.createElement('div');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = inputArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var line = _step.value;

                    var tagType = this.getTagType(line);
                    var element = document.createElement(tagType);
                    element.innerHTML = line;
                    outputDiv.appendChild(element);
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

            return outputDiv;
        }
    }, {
        key: 'getTagType',
        value: function getTagType(line) {
            return 'h1';
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
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _this.output.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var existing = _step.value;

                        existing.remove();
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

                _this.output.appendChild(dom);
            }, false);
        }
    }]);

    return Editor;
}();

var pumpkie = new Pumpkin();

var editor = new Editor('markdownInput', 'markdownOutput');
