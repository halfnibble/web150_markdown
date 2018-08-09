class Markdown {
    constructor() {
        this.node = null;
    }
    
    parse(text) {
        let textArray = text.split('\n');
        let result = document.createElement('div');
        this.node = null;
        for (let line of textArray) {
            let nodeType = this.getNodeType(line),
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
        return result;
    }
    
    getNodeType(line) {
        if (line === '') {
            return 'br';
        } else if (/^#{1,6}/.test(line)) {
            let headerNumber = 0;
            for (let char of line) {
                if (headerNumber >= 6) {
                    break;
                }
                if (char === '#') {
                    headerNumber += 1;
                }
            }
            return `h${headerNumber}`;
        } else if (/^-\s/.test(line)) {
            return 'li';
        } else {
            return 'p';
        }
    }
    
    cleanLine(line) {
        return line.replace(/^#{1,6}\s+|^-\s+/, '');
    }
    
    getParentNodeType(nodeType) {
        switch (nodeType) {
            case 'li':
                return 'ul';
            default:
                return null;
        }
    }
    
    createNode(nodeType, text) {
        let node = document.createElement(nodeType);
        if (text) {
            node.innerHTML = text;
        }
        return node;
    }
}

export { Markdown }