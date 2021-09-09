import '../../sass/main.scss';

const refs = {
    timerDays: document.querySelector('[data-value="days"]'),
    timerHours: document.querySelector('[data-value="hours"]'),
    timerMins: document.querySelector('[data-value="mins"]'),
    timerSecs: document.querySelector('[data-value="secs"]'),    
}

const targetTime = new Date('Sep 13, 2021')

class Timer  {
    constructor({onTick}) {
        this.onTick = onTick
    }
    start(){
    
        setInterval(() => {
        const currentTime = Date.now()
        const deltaTime = targetTime - currentTime;
        const leftTime = this.getTimeComponents(deltaTime)
        this.onTick(leftTime)   
        
        }, 1000);  
     
    } 
    getTimeComponents(time) {

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }  
}

const timer = new Timer({onTick: updateTimer});

timer.start()

function updateTimer ({ days, hours, mins, secs }) {
    refs.timerDays.textContent = `${days}`
    refs.timerHours.textContent = `${hours}`
    refs.timerMins.textContent = `${mins}`
    refs.timerSecs.textContent = `${secs}`
}