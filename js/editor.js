import { Markdown } from './markdown';

class Editor {
    constructor(idInput, idOutput) {
        this.input = document.getElementById(idInput);
        this.output = document.getElementById(idOutput);
        this.markdown = new Markdown();
        this.setup();
    }
    
    setup() {
        this.input.addEventListener('keyup', () => {
            let content = this.input.value;
            let dom = this.markdown.parse(content);
            this.clearOutput().appendChild(dom);
        }, false);
    }
    
    clearOutput() {
        for (let content of this.output.children) {
            content.remove();
        }
        return this.output;
    }
}

export { Editor }