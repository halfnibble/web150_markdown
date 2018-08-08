class Markdown {
    constructor() {
    }
    
    parse(text) {
        let inputArray = text.split('\n');
        let outputDiv = document.createElement('div');
        for (let line of inputArray) {
            let tagType = this.getTagType(line);
            let element = document.createElement(tagType);
            element.innerHTML = line;
            outputDiv.appendChild(element);
        }
        return outputDiv;
    }
    
    getTagType(line) {
        return 'h1';
    }
}

export { Markdown }