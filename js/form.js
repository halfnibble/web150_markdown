class PreviewField {
    constructor(inputId, outputId) {
        this.input = document.getElementById(inputId);
        this.output = document.getElementById(outputId);
        this.setup();
    }
    
    setup() {
        this.input.addEventListener('keyup', () => {
            this.output.innerHTML = this.input.value;
        });
    }
}

export { PreviewField }