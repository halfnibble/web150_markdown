class Pumpkin {
    constructor() {
        console.log(
            `Newester pumpkin #${this.getNumber()}`
        );
    }
    
    getNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
}

export { Pumpkin }
