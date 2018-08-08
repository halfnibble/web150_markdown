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
            for (let existing of this.output.children) {
                existing.remove();
            }
            this.output.appendChild(dom);
        }, false);
    }
}

export { Editor }