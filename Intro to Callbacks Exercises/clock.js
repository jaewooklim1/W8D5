class Clock {
    constructor() {
        const date = new Date;
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.printTime();
        this._tick();
    }

    printTime() {
        this.time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(this.time);
    }

    _tick() {
        setInterval(this.printTime, 1000);
    }
}