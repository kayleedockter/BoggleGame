export default class Timer {
    constructor(root) {
        console.log(root);
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
        };

        //Assigning the play game button to a variable
        var buttonPlay = document.getElementById('btnPlayGame');
        this.interval = null;
        this.remainingSeconds = 60;
        this.start();
        this.stop();

        this.updateInterfaceTime();

        //Play game button now starts the timer
        buttonPlay.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });
    }

    //Updates the minutes and seconds in the HTML
    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        //Injecting into HTML
        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    //Displays the HTML below to the page
    static getHTML() {
        return `
            <span class="timer__part timer__part--minutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
            <br />
           
        `;
    }
}