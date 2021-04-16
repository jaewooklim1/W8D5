class Clock {
    constructor() {
        const date = new Date;
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.printTime();
        let boundTime = this._tick.bind(this); //returns a new function that is perm bound to the passed arg

        setInterval(boundTime, 1000);
    
    }

    printTime() {
        this.time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(this.time);
    }

    _tick() {

        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }
        console.clear();
        this.printTime();
    }
}

const clock = new Clock();